import babel from "rollup-plugin-babel"
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs"
import external from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import resolve from "rollup-plugin-node-resolve"
import url from "rollup-plugin-url"
import svgr from "@svgr/rollup"

import pkg from "./package.json"

let sourceMap = false;

export default {
    input: "src/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: sourceMap
        }
    ],
    plugins: [
        external(),
        postcss({
            modules: sourceMap
        }),
        url(),
        sass({
            output: pkg.main.replace(".js", ".css")
        }),
        svgr(),
        babel({
            exclude: "node_modules/**",
            plugins: ["external-helpers"]
        }),
        resolve(),
        commonjs()
    ]
}