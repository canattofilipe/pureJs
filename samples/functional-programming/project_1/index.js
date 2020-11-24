const path = require("path");
const fn = require("./functions");

const dir = path.join(__dirname, "..", "data", "subtitles");

const symbols = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

fn.readDirectory(dir)
  .then(fn.filterByExt("srt"))
  .then(fn.readFiles)
  .then(fn.mergeContent)
  .then(fn.separateTextBy("\n"))
  .then(fn.removeEmpty)
  .then(fn.removeIfContains("-->"))
  .then(fn.removeIfNumer)
  .then(fn.removeSymbols(symbols))
  .then(fn.mergeContent)
  .then(fn.separateTextBy(" "))
  .then(fn.removeEmpty)
  .then(fn.removeIfNumer)
  .then(fn.groupWords)
  .then(console.log);
