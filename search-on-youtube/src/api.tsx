import { chunksOf, flatten } from "fp-ts/Array"
import { CONFIG } from "./settings"
import { flow } from "fp-ts/function"
import { SpotifyID } from "./util"
import { map } from "fp-ts/Array"

export const fetchTracksSpotAPI50 = async (ids: SpotifyID[]) =>
    (await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`)).tracks as any[]

export const fetchTracksSpotAPI = flow(chunksOf(50)<string>, map(fetchTracksSpotAPI50), async x => flatten(await Promise.all(x)))

export const searchYoutube = async (searchString: string) =>
    (
        await (
            await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(searchString)}&type=video&key=${
                    CONFIG.YouTubeApiKey
                }`,
            )
        ).json()
    ).items as any[]
