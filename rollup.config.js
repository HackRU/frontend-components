/**
 * @author Shivan Modha
 * @description LCL compilation tool chain configuration
 */
// Import all of the packages needed to compile this library
import babel from "rollup-plugin-babel";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import copy from "rollup-plugin-copy";
import pkg from "./package.json";
// Define static configuration variables
const SOURCE_MAP = false;
// Default configuration
export default {
    input: "src/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: SOURCE_MAP
        } // Compile all of the javascript code correctly
    ],
    plugins: [
        external(),
        postcss({
            modules: SOURCE_MAP
        }),
        url(),
        sass({
            output: pkg.main.replace(".js", ".css") // Compile the sass files correctly
        }),
        svgr(),
        babel({
            exclude: "node_modules/**",
            plugins: ["external-helpers"]
        }),
        resolve(),
        commonjs(),
        // Add static file references here
        copy({
            targets: [
                { src: "src/assets/fonts/Titillium/TitilliumWeb-Light.ttf", dest: "dist/fonts", rename: "Titillium.ttf" }, // Copy over the theme default font
                { src: "src/assets/fonts/Titillium/OFL.txt", dest: "dist/fonts", rename: "Titillium-OFL.txt" } // Copy over the fonts license for legal reasons
            ]
        })
    ]
}