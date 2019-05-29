const path = require("path")
module.exports = {
    components: "./src/components/**/*.js",
    require: [
        path.join(__dirname, "dist/lcs.css"),
    ]
};