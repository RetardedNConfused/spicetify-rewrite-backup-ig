import esbuild from "esbuild"
import _externalGlobalPlugin from "esbuild-plugin-external-global"
const { externalGlobalPlugin } = _externalGlobalPlugin
import fs from "fs"
import path from "path"
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
            })()`,
        )
    }
}

await esbuild.build({
    entryPoints: [entryJs],
    minify: false,
    outfile: outJs,
    target: "es6",
    //platform: "browser",
    external: ["react", "react-dom"],
    bundle: true,
    globalName: name,
    plugins: [
        externalGlobalPlugin({
            react: "Spicetify.React",
            "react-dom": "Spicetify.ReactDOM",
        }),
    ],
})

afterBuild()
