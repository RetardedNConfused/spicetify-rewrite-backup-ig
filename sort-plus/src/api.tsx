import { chunksOf, flatten, map } from "fp-ts/Array"
import { flow as f, pipe as p } from "fp-ts/function"
import { CONFIG } from "./settings"
import { SpotifyID, SpotifyURI } from "./util"
import { invokeNullary } from "fp-ts-std/Function"

export const fetchAlbumGQL = async (uri: SpotifyURI, offset = 0, limit = 487) =>
    (
        await Spicetify.GraphQL.Request(
            Spicetify.GraphQL.Definitions.getAlbum,
            { uri, locale: Spicetify.Locale.getLocale(), offset, limit },
        )
    ).data.albumUnion

export const fetchArtistGQL = async (uri: SpotifyURI) =>
    (
        await Spicetify.GraphQL.Request(
            Spicetify.GraphQL.Definitions.queryArtistOverview,
            {
                uri,
                locale: Spicetify.Locale.getLocale(),
                includePrerelease: true,
            },
        )
    ).data.artistUnion
export const fetchArtistLikedTracksSP = async (id: SpotifyID) =>
    (
        await Spicetify.CosmosAsync.get(
            `sp://core-collection/unstable/@/list/tracks/artist/${id}`,
        )
    ).items

export const fetchPlaylistAPI = async (uri: SpotifyURI) =>
    (await Spicetify.Platform.PlaylistAPI.getContents(uri)).items as any[]
export const fetchPlaylistSP = async (uri: SpotifyURI) =>
    (await Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/${uri}`))
        .items

export const fetchTracksSpotAPI50 = async (ids: SpotifyID[]) =>
    (
        await Spicetify.CosmosAsync.get(
            `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`,
        )
    ).tracks as any[]
export const fetchTracksSpotAPI = f(
    chunksOf(50)<SpotifyID>,
    map(fetchTracksSpotAPI50),
    async x => p(await Promise.all(x), flatten),
)

export const fetchTrackLFMAPI = async (
    artist: string,
    trackName: string,
    lastFmUsername: string,
) => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${
        CONFIG.LFMApiKey
    }&\
artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(
        trackName,
    )}&format=json&username=${encodeURIComponent(lastFmUsername)}`
    return await p(url, fetch, async x => p(await x, invokeNullary("json")))
}
