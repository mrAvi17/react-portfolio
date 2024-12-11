const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "build", "index.html");
const destination = path.join(__dirname, "build", "404.html");

fs.copyFileSync(source, destination);
console.log("Copied index.html to 404.html");
