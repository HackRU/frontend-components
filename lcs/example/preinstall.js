/**
 * @author Shivan Modha
 * @description This script removes the package-lock.json file in the parent directory. This is to solve and issue with npm: https://npm.community/t/npm-install-for-package-with-local-dependency-fails/754. This exists as a script so that it is cross compatible.
 */
const fs = require("fs");
// Remove the package-lock file from the parent directory
if (fs.existsSync("../package-lock.json")) {
    fs.unlinkSync("../package-lock.json");
}
// Remove the package-lock file from the current directory
if (fs.existsSync("package-loc.json")) {
    fs.unlinkSync("package-lock.json");
}