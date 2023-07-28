export type SpotifyID = string
export type SpotifyURI = string

export type TrackData = {
    albumName?: string
    albumUri?: SpotifyURI
    artistName: string
    artistUri: SpotifyURI
    durationMilis: number
    name: string
    playcount?: number
    popularity?: number
    releaseDate?: string
    uri: SpotifyURI
    lastfmPlaycount?: number
    scrobbles?: number
    personalScrobbles?: number
}

export type TrackParser = (track: any) => TrackData

export const enum SpotifyURIType {
    TRACK = "spotify:track",
    ALBUM = "spotify:album",
    ARTIST = "spotify:artist",
    PLAYLIST = "spotify:playlist",
}

export const normalizeStr = (str: string) =>
    str
        .replace(/\(.*\)/g, "")
        .replace(/\[.*\]/g, "")
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase()
