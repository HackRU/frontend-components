/**
 * @author Shivan Modha
 * @description Configuration file for styleguidist
 */
const path = require("path")
module.exports = {
    components: "./src/components/**/*.js", // Regex for our component directory layout
    require: [
        path.join(__dirname, "dist/lcl.css"), // Static css import of LCL
    ]
};