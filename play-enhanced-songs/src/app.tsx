export default {}

import { tupled } from "fp-ts/lib/function"
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
        allowedTypes.some(String.prototype.startsWith.bind(uri))

new Spicetify.ContextMenu.Item("Play enhanced songs", tupled(playEnhancedSongs) as any, showIn([SpotifyURIType.PLAYLIST]), "enhance")
