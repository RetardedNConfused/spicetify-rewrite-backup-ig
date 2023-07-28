import { TrackParser } from "./util"

export const parseTrackFromSpotifyAPI: TrackParser = track => ({
    albumName: track.album.name,
    albumUri: track.album.uri,
    artistName: track.artists[0].name,
    artistUri: track.artists[0].uri,
    durationMilis: track.duration_ms,
    name: track.name,
    playcount: undefined,
    popularity: track.popularity,
    releaseDate: track.album.releaseDate,
    uri: track.uri,
})
