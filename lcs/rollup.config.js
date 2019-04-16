import babel from "rollup-plugin-babel"
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs"
import external from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import resolve from "rollup-plugin-node-resolve"
import url from "rollup-plugin-url"
import svgr from "@svgr/rollup"

import pkg from "./package.json"

let sourcemap = true;

export default {
    input: "src/js/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: sourcemap
        }
    ],
    plugins: [
        external(),
        postcss({
            modules: sourcemap
        }),
        url(),
        sass({
            output: pkg.styles
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