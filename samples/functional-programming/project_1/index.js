const path = require("path");
const fn = require("./functions");

const dir = path.join(__dirname, "..", "data", "subtitles");

fn.readDirectory(dir)
  .then(fn.filterByExt("srt"))
  .then(fn.readFiles)
  .then((content) => content.join("\n"))
  .then((content) => content.split("\n"))
  .then(fn.removeEmpty)
  .then(fn.removeIfContains("-->"))
  .then(fn.removeIfNumer)
  .then(console.log);
