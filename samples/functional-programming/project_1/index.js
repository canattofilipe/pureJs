const path = require("path");
const fn = require("./functions");

const dir = path.join(__dirname, "..", "data", "subtitles");

fn.readDirectory(dir)
  .then((files) => fn.filterByExt(files, "srt"))
  .then((filesSrt) => fn.readFiles(filesSrt))
  .then((content) => content.join("\n"))
  .then((content) => content.split("\n"))
  .then(console.log);
