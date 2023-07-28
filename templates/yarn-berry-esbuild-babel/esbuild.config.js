import esbuild from "esbuild"
import _externalGlobalPlugin from "esbuild-plugin-external-global"
const { externalGlobalPlugin } = _externalGlobalPlugin
import fs from "fs"
import path from "path"
import babel from "esbuild-plugin-babel"
import _name from "./package.json" assert { type: "json" }
const name = _name.name.replaceAll("-", ".")

const entryJs = path.join("src", `entry.tsx`)
const outJs = path.join("dist", `${name}.js`)
const outCss = path.join("dist", `${name}.css`)

const afterBuild = () => {
    if (fs.existsSync(outCss)) {
        console.log("Bundling css with js...")

        let css = fs.readFileSync(outCss, "utf-8")
        fs.rmSync(outCss)

        fs.appendFileSync(
            outJs,
            `(async () => {
                if (!document.getElementById(\`${name}\`)) {
                    var el = document.createElement("style")
                    el.id = \`${name}\`
                    el.textContent = String.raw\`${css}\`.trim()
                    document.head.appendChild(el)
                }
            })()`.trim(),
        )
    }
}

await esbuild.build({
    entryPoints: [entryJs],
    outfile: outJs,
    platform: "browser",
    external: ["react", "react-dom"],
    bundle: true,
    globalName: name,
    plugins: [
        externalGlobalPlugin({
            react: "Spicetify.React",
            "react-dom": "Spicetify.ReactDOM",
        }),
        babel({
            filter: /.tsx/,
            config: {
                sourceMaps: "inline",
                presets: [
                    "@babel/env",
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                ],
                plugins: [
                    [
                        "@babel/plugin-proposal-pipeline-operator",
                        { proposal: "hack", topicToken: "%" },
                    ],
                    ["@babel/plugin-proposal-partial-application"],
                    ["@babel/plugin-proposal-function-bind"],
                    //   ["@babel/plugin-proposal-do-expressions"],
                    //   ["@babel/plugin-proposal-async-do-expressions"],
                ],
            },
        }),
    ],
})

afterBuild()
