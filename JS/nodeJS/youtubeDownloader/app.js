const downloader = require("ytdl-core") // Package from npmjs
const fs = require("fs") // Core module

downloader("rVB3n0o2ikw")
.pipe(fs.createWriteStream("video.mp4")) // Allows you to read videos on browser.