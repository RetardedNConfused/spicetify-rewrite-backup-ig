export default {}
import { unary } from "fp-ts-std/Function"
import { fetchTracksSpotAPI, searchYoutube as searchYouTube } from "./api"
import { parseTrackFromSpotifyAPI } from "./parse"
import { CONFIG } from "./settings"
import { SpotifyURI, SpotifyURIType, normalizeStr } from "./util"

const YTVidIDCache = new Map<string, string>()

const showOnYouTube = async (uri: SpotifyURI) => {
    if (!YTVidIDCache.get(uri)) {
        const track = parseTrackFromSpotifyAPI(await fetchTracksSpotAPI([uri]))
        const searchString = `${track.artistName} - ${track.name} video song`

        let videos = []
        if (CONFIG.YouTubeApiKey)
            try {
                videos = await searchYouTube(searchString)
            } catch (_) {}

        if (!videos?.length) return void window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchString)}`)

        const normalizedTrackName = normalizeStr(track.name)
        YTVidIDCache.set(
            uri,
            videos.find(video => {
                normalizeStr(video.snippet.title).includes(normalizedTrackName)
            })?.id.videoId ?? videos[0].id.videoId,
        )
    }

    window.open(`https://www.youtube.com/watch?v=${YTVidIDCache.get(uri)}`)
}

const showIn =
    (allowedTypes: string[]) =>
    ([uri]: SpotifyURI[]) =>
        allowedTypes.some(String.prototype.startsWith.bind(uri))

new Spicetify.ContextMenu.Item(
    "Play on YouTube",
    unary(showOnYouTube) as any,
    showIn([SpotifyURIType.TRACK]),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="19px" height="19px"><path fill="currentColor" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="var(--spice-main)" d="M20 31L20 17 32 24z"/></svg>` as any,
).register()
