@val
external sp: {..} = "Spicetify"

type spotUri = string

@new
external createItem: (string, ((spotUri, unit)) => unit, ((spotUri, unit)) => bool, string) => 'a =
  "Spicetify.ContextMenu.Item"

let mustLoad = ["Platform", "CosmosAsync", "showNotification", "ContextMenu"]

while mustLoad->Array.map(prop => prop |> Object.get(sp))->Array.some(Option.isNone) {
  {
    await Js.Promise2.make((~resolve as res, ~reject as _) => {
      setTimeout(() => {
        res(. None)
      }, 100)->ignore
    })
  }->ignore
}

type spotUriType =
  | ALBUM
  | ARTIST
  | PLAYLIST
  | TRACK

let spotUriTypeToString = spotUriType =>
  "spotify:" ++
  switch spotUriType {
  | ALBUM => "album"
  | ARTIST => "artist"
  | PLAYLIST => "playlist"
  | TRACK => "track"
  }

let showIn = (spotUriTypes: array<spotUriType>, (spotUri, ())) =>
  spotUriTypes->Array.map(spotUriTypeToString)->Array.some(String.startsWith(spotUri))

let fetchPlaylistEnhancedSongs100 = async (~offset=0, spotUri): array<{..}> =>
  {
    await sp["CosmosAsync"]["get"](
      `https://spclient.wg.spotify.com/enhanced-view/v1/context/${spotUri}?&offset=${Int.toString(
          offset,
        )}&format=json`,
    )
  }["pageItems"]

let rec fetchPlaylistEnhancedSongs = async (~offset=0, spotUri) => {
  let nextItems = await fetchPlaylistEnhancedSongs100(spotUri, ~offset)
  if Array.length(nextItems) < 100 {
    nextItems
  } else {
    Array.concat(nextItems, await fetchPlaylistEnhancedSongs(spotUri, ~offset=offset + 100))
  }
}

let playEnhancedSongs = ((spotUri, _)) => {
  fetchPlaylistEnhancedSongs(spotUri)
  ->Promise.then(queue => {
    sp["Platform"]["PlayerAPI"]["clearQueue"]()
    sp["Platform"]["PlayerAPI"]["addToQueue"](queue)
  })
  ->ignore
}

createItem("Play Enhanced Songs", playEnhancedSongs, showIn([PLAYLIST]), "enhance")
