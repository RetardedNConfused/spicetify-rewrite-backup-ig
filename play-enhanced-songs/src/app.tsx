export default {}

import { array as a } from "fp-ts"
import { pipe as p, tupled, flip } from "fp-ts/function"
import { startsWith } from "fp-ts/string"
import { fetchPlaylistEnhancedSongs } from "./api"
import { SpotifyURI, SpotifyURIType } from "./util"

let queue = new Array<any>()
const playEnhancedSongs = async (uri: SpotifyURI) => {
    queue = await fetchPlaylistEnhancedSongs(uri)
    Spicetify.Platform.PlayerAPI.clearQueue()
    Spicetify.Platform.PlayerAPI.addToQueue(queue)
}

// Menu

const showIn =
    (allowedTypes: string[]) =>
    ([uri]: SpotifyURI[]) =>
        p(allowedTypes, a.some(flip(startsWith)(uri)))

new Spicetify.ContextMenu.Item(
    "Play enhanced songs",
    tupled(playEnhancedSongs) as any,
    showIn([SpotifyURIType.PLAYLIST]),
    "enhance",
).register()
