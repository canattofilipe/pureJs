const { rejects } = require("assert");
const { EROFS } = require("constants");
const fs = require("fs");
const { resolve } = require("path");
const path = require("path");

function readDirectory(dir) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(dir);
      resolve(files.map((file) => path.join(dir, file)));
    } catch (error) {
      reject(error);
    }
  });
}

function readFile(path) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(path, { encoding: "utf-8" });
      resolve(content.toString());
    } catch (error) {
      reject(error);
    }
  });
}

function readFiles(paths) {
  return Promise.all(paths.map((path) => readFile(path)));
}

function filterByExt(files, ext) {
  return files.filter((el) => el.endsWith(ext));
}

module.exports = {
  readDirectory,
  filterByExt,
  readFile,
  readFiles,
};
