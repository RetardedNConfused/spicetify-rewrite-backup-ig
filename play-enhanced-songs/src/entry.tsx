import { lookup } from "fp-ts/lib/ReadonlyRecord"
import { flow } from "fp-ts/lib/function"
import { isNone } from "fp-ts/lib/Option"
;(async () => {
    const mustLoad = ["Platform", "CosmosAsync", "showNotification", "LocalStorage"]

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    while (mustLoad.map(flow(p => lookup(p)(Spicetify), isNone))) await sleep(100)

    await import("./app")
})()
