export default {}
import { array as a, number, option as o, ord, task } from "fp-ts"
import { guard } from "fp-ts-std/Function"
import { values } from "fp-ts-std/Record"
import { groupBy } from "fp-ts/NonEmptyArray"
import { lookup, mapWithIndex } from "fp-ts/Record"
import {
    constant,
    flow as f,
    flip,
    identity,
    pipe as p,
    tupled,
} from "fp-ts/function"
import { startsWith } from "fp-ts/string"
import { Lens, Optional } from "monocle-ts"
import {
    fetchAlbumGQL,
    fetchArtistGQL,
    fetchArtistLikedTracksSP,
    fetchPlaylistAPI,
    fetchTrackLFMAPI,
    fetchTracksSpotAPI,
} from "./api"
import { async, objConcat } from "./fp"
import {
    TrackData,
    TracksPopulater,
    UnparsedTrack,
    parseTopTrackFromArtist,
    parseTrackFromAlbum,
    parseTrackFromArtistLikedTracksSP,
    parseTrackFromPlaylistAPI,
    parseTrackFromSpotifyAPI,
} from "./parse"
import { CONFIG } from "./settings"
import { SpotifyURI, SpotifyURIType, parseUri } from "./util"

export enum SortBy {
    SPOTIFY_PLAYCOUNT = "Spotify - Play Count",
    SPOTIFY_POPULARITY = "Spotify - Popularity",
    LASTFM_SCROBBLES = "LastFM - Scrobbles",
    LASTFM_PERSONALSCROBBLES = "LastFM - My Scrobbles",
    LASTFM_PLAYCOUNT = "LastFM - Play Count",
}

export enum SortProp {
    "Spotify - Play Count" = "playcount",
    "Spotify - Popularity" = "popularity",
    "LastFM - Scrobbles" = "scrobbles",
    "LastFM - My Scrobbles" = "personalScrobbles",
    "LastFM - Play Count" = "lastfmPlaycount",
}

// Fetching Tracks

const getAlbumTracks = async (uri: SpotifyURI) => {
    const albumRes = await fetchAlbumGQL(uri)
    const releaseDate = albumRes.date.isoString.split("T")[0]

    return p(
        albumRes.tracks.items,
        a.map(
            f(
                parseTrackFromAlbum,
                Lens.fromProp<TrackData>()("albumUri").set(albumRes.uri),
                Lens.fromProp<TrackData>()("albumName").set(albumRes.name),
                Lens.fromProp<TrackData>()("releaseDate").set(releaseDate),
            ),
        ),
    )
}

export const getPlaylistTracks = f(
    fetchPlaylistAPI,
    async(a.map(parseTrackFromPlaylistAPI)),
)

async function getArtistTracks(uri: SpotifyURI) {
    type agg = {
        releases: {
            items: { uri: SpotifyURI }[]
        }
    }

    const parseTracksFromAggregates = f(
        a.map(
            f(
                Lens.fromPath<agg>()(["releases", "items", 0, "uri"]).get,
                getAlbumTracks,
            ),
        ),
        x => Promise.all(x),
        async(a.flatten),
    )

    const disc = (await fetchArtistGQL(uri)).discography

    const artistTopTracks: UnparsedTrack[] = disc.topTracks.items
    const artistPopularReleases: UnparsedTrack[] =
        disc.popularReleasesAlbums.items
    const artistAlbums: UnparsedTrack[] = disc.albums.items
    const artistSingles: UnparsedTrack[] = disc.singles.items
    const artistCompilations: UnparsedTrack[] = disc.compilations.items

    const formatUrisAsAggregates = a.map<{ uri: SpotifyURI }, agg>(
        ({ uri }) => ({
            releases: { items: [{ uri }] },
        }),
    )

    const allTracks = new Array<TrackData>()

    const add = (tracks: TrackData[]): void =>
        void Array.prototype.push.apply(allTracks, tracks)

    if (CONFIG.artistTopTracks)
        add(
            p(
                artistTopTracks,
                a.map(f(lookup("track"), o.map(parseTopTrackFromArtist))),
                a.sequence(o.Applicative),
                o.getOrElse(constant([] as TrackData[])),
            ),
        )
    if (CONFIG.artistPopularReleases)
        add(
            await p(
                artistPopularReleases,
                formatUrisAsAggregates,
                parseTracksFromAggregates,
            ),
        )
    if (CONFIG.artistSingles)
        add(await parseTracksFromAggregates(artistSingles))
    if (CONFIG.artistAlbums) add(await parseTracksFromAggregates(artistAlbums))
    if (CONFIG.artistCompilations)
        add(await parseTracksFromAggregates(artistCompilations))
    if (CONFIG.artistLikedTracks)
        add(
            await p(
                parseUri(uri).id,
                fetchArtistLikedTracksSP,
                async(a.map(parseTrackFromArtistLikedTracksSP)),
            ),
        )

    return allTracks
}

// Populating Tracks For Spotify

const fetchAPITracksFromTracks: TracksPopulater = f(
    a.map(track => parseUri(track.uri).id),
    fetchTracksSpotAPI,
    async(a.map(parseTrackFromSpotifyAPI)),
)

const fetchAlbumTracksFromTracks: TracksPopulater = f(
    groupBy(track => String(track.albumUri)),
    mapWithIndex(async (albumUri: SpotifyURI, tracks: TrackData[]) => {
        const albumTracks = await getAlbumTracks(albumUri)
        return a.filter<TrackData>(albumTrack =>
            a.some<TrackData>(track => albumTrack.uri === track.uri)(tracks),
        )(albumTracks)
    }),
    values,
    x => Promise.all(x),
    async(a.flatten),
)

const populateTracksSpot =
    (propName: keyof typeof SortProp) => (tracks: TrackData[]) =>
        p(
            tracks,
            a.filter(
                f(
                    Optional.fromNullableProp<TrackData>()(SortProp[propName])
                        .getOption,
                    o.isNone,
                ),
            ),
            guard([
                [
                    startsWith(SortBy.SPOTIFY_PLAYCOUNT),
                    constant(fetchAlbumTracksFromTracks),
                ],
                [
                    startsWith(SortBy.SPOTIFY_POPULARITY),
                    constant(fetchAPITracksFromTracks),
                ],
            ])(constant(task.of([])))(propName),
            async(a.concat(tracks)),
            async(groupBy(Lens.fromProp<TrackData>()("uri").get)),
            async(values<TrackData[]>),
            async(a.map(objConcat<TrackData>())),
        )

// Populating Tracks For LastFM

const populateTrackLastFM = async (track: TrackData) => {
    const lastfmTrack = (
        await fetchTrackLFMAPI(
            track.artistName,
            track.name,
            CONFIG.lastFmUserName,
        )
    ).track
    track.lastfmPlaycount = lastfmTrack.listeners
    track.scrobbles = lastfmTrack.playcount
    track.personalScrobbles = lastfmTrack.userplaycount
    return track
}

// Fetching, Sorting and Playing

export const fetchTracks = guard([
    [startsWith(SpotifyURIType.ALBUM), getAlbumTracks],
    [startsWith(SpotifyURIType.ARTIST), getArtistTracks],
    [startsWith(SpotifyURIType.PLAYLIST), getPlaylistTracks],
])(task.of([]))

export const populateTracks = guard<keyof typeof SortProp, TracksPopulater>([
    [startsWith("Spotify"), populateTracksSpot],
    [
        startsWith("LastFM"),
        constant(f(a.map(populateTrackLastFM), x => Promise.all(x))),
    ],
])(constant(task.of([])))

let queue = new Array<TrackData>()
export const sortByProp =
    (name: keyof typeof SortProp) => async (uri: SpotifyURI) => {
        const prop = SortProp[name]
        const toProp = Optional.fromNullableProp<TrackData>()(prop).getOption

        queue = await p(
            uri,
            fetchTracks,
            async(populateTracks(name)),
            async(a.filter(f(toProp, o.isSome))),
            async(
                a.sort(
                    p(
                        number.Ord,
                        ord.contramap(f(toProp, o.getOrElse(constant(-1)))),
                    ),
                ),
            ),
            async(CONFIG.ascending ? identity : a.reverse),
            async(a.append({ uri: "spotify:delimiter" } as TrackData)),
        )

        if (queue.length <= 1)
            return Spicetify.showNotification("Data not available")

        await Spicetify.Platform.PlayerAPI.clearQueue()
        await Spicetify.Platform.PlayerAPI.addToQueue(queue)
        Spicetify.Player.next()
    }

// Menu

const showIn =
    (allowedTypes: string[]) =>
    ([uri]: SpotifyURI[]) =>
        p(allowedTypes, a.some(flip(startsWith)(uri)))

const showAlways = showIn([
    SpotifyURIType.ALBUM,
    SpotifyURIType.ARTIST,
    SpotifyURIType.PLAYLIST,
])

const createSortByPropSubmenu = (name: keyof typeof SortProp, icon: any) =>
    new Spicetify.ContextMenu.Item(
        name,
        tupled(sortByProp(name)) as any,
        showAlways,
        icon,
        false,
    )

new Spicetify.ContextMenu.SubMenu(
    "Sort by",
    a.zipWith(
        values(SortBy),
        ["play", "heart", "volume", "artist", "subtitles"],
        createSortByPropSubmenu,
    ),
    showAlways,
).register()
