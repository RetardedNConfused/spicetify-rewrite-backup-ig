export default {}
import { array as a, number, option as o, ord } from "fp-ts"
import { guard, unary } from "fp-ts-std/Function"
import { values } from "fp-ts-std/Record"
import { groupBy } from "fp-ts/NonEmptyArray"
import { getUnionSemigroup, lookup, mapWithIndex, upsertAt } from "fp-ts/Record"
import { constant, flow as f, identity, pipe as p } from "fp-ts/function"
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
import {
    parseTopTrackFromArtist,
    parseTrackFromAlbum,
    parseTrackFromArtistLikedTracksSP,
    parseTrackFromPlaylistAPI,
    parseTrackFromSpotifyAPI,
} from "./parse"
import { CONFIG } from "./settings"
import {
    SortBy,
    SortProp,
    SpotifyID,
    SpotifyURI,
    SpotifyURIType,
    TrackData,
    TracksPopulater,
    UnparsedTrack,
} from "./util"

// Fetching Tracks

const getAlbumTracks = async (uri: SpotifyURI): Promise<TrackData[]> => {
    const albumRes = await fetchAlbumGQL(uri)
    const releaseDate = albumRes.date.isoString.split("T")[0]
    return albumRes.tracks.items.map(
        f(
            lookup("track"),
            o.map(
                f(
                    parseTrackFromAlbum,
                    upsertAt("albumName", albumRes.name),
                    upsertAt("albumUri", albumRes.uri),
                    upsertAt("releaseDate", releaseDate),
                ),
            ),
        ),
    )
}

export const parseUri = (uri: SpotifyURI) =>
    uri.match(
        /^(?<type>spotify:(?:artist|track|album|playlist))(?:_v2)?:(?<id>[a-zA-Z0-9_]{62})/,
    )?.groups as { type: SpotifyURIType; id: SpotifyID }

export const getPlaylistTracks = f(fetchPlaylistAPI, async x =>
    p(await x, a.map(parseTrackFromPlaylistAPI)),
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
        async x => p(await Promise.all(x), a.flatten),
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
                uri,
                parseUri,
                lookup("id"),
                o.map(
                    f(fetchArtistLikedTracksSP, async x =>
                        a.map(parseTrackFromArtistLikedTracksSP)(await x),
                    ),
                ),
                o.getOrElse(constant(Promise.resolve([] as TrackData[]))),
            ),
        )

    return allTracks
}

// Populating Tracks For Spotify

const fetchAPITracksFromTracks: TracksPopulater = f(
    a.map(track => parseUri(track.uri).id),
    fetchTracksSpotAPI,
    async x => p(await x, a.map(parseTrackFromSpotifyAPI)),
)

const fetchAlbumTracksFromTracks: TracksPopulater = f(
    groupBy(track => String(track.albumName)),
    mapWithIndex(async (albumUri: SpotifyURI, tracks: TrackData[]) => {
        const albumTracks = await getAlbumTracks(albumUri)

        return a.filter<TrackData>(albumTrack =>
            a.some<TrackData>(track => albumTrack.uri === track.uri)(tracks),
        )(albumTracks)
    }),
    values,
    async x => p(await Promise.all(x), a.flatten),
)

const objConcat2 = getUnionSemigroup({ concat: (x: any, y: any) => x }).concat
const objConcat = a.reduce({}, objConcat2)

const populateTracksSpot =
    (propName: keyof typeof SortProp) => (tracks: TrackData[]) =>
        p(
            tracks,
            a.filter(f(lookup(SortProp[propName]), o.isNone)),
            guard([
                [
                    startsWith(SortBy.SPOTIFY_POPULARITY),
                    constant(fetchAPITracksFromTracks),
                ],
                [
                    startsWith(SortBy.SPOTIFY_PLAYCOUNT),
                    constant(fetchAlbumTracksFromTracks),
                ],
            ])(constant(x => Promise.resolve(x)))(propName),
            async x =>
                p(
                    (await x).concat(tracks),
                    groupBy(Lens.fromProp<TrackData>()("uri").get),
                    values,
                    a.map(objConcat),
                ) as TrackData[],
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
])(x => Promise.resolve([] as TrackData[]))

export const populateTracks = guard<keyof typeof SortProp, TracksPopulater>([
    [startsWith("Spotify"), populateTracksSpot],
    [
        startsWith("LastFM"),
        constant(f(a.map(populateTrackLastFM), x => Promise.all(x))),
    ],
])(constant(x => Promise.resolve(x)))

let queue = new Array<TrackData>()
export const sortByProp =
    (name: keyof typeof SortProp) => async (uri: SpotifyURI) => {
        const prop = SortProp[name]
        const toProp = Optional.fromNullableProp<TrackData>()(prop).getOption

        queue = await p(uri, fetchTracks, async x =>
            p(await x, populateTracks(name), async x =>
                p(
                    await x,
                    a.filter(f(toProp, o.isSome)),
                    a.sort(
                        p(
                            number.Ord,
                            ord.contramap(f(toProp, o.getOrElse(constant(-1)))),
                        ),
                    ),
                    CONFIG.ascending ? identity : a.reverse,
                    a.append({ uri: "spotify:delimiter" } as TrackData),
                ),
            ),
        )

        if (queue.length < 1)
            return Spicetify.showNotification("Data not available")

        await Spicetify.Platform.PlayerAPI.clearQueue()
        await Spicetify.Platform.PlayerAPI.addToQueue(queue)
        Spicetify.Player.next()
    }

// Menu

const showIn =
    (allowedTypes: string[]) =>
    ([uri]: SpotifyURI[]) =>
        allowedTypes.some(String.prototype.startsWith.bind(uri))

const showAlways = showIn([
    SpotifyURIType.ALBUM,
    SpotifyURIType.ARTIST,
    SpotifyURIType.PLAYLIST,
])

const createSortByPropSubmenu = (name: keyof typeof SortProp, icon: any) =>
    new Spicetify.ContextMenu.Item(
        name,
        unary(sortByProp(name)) as any,
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
