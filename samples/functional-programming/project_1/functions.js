const fs = require("fs");
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

function removeIfContains(list, value) {
  return list.filter((el) => !el.includes(value));
}

function removeIfNumer(list) {
  return list.filter((el) => {
    const v = parseInt(el.trim());
    // JS defines that 'NaN != NaN = true'
    return v != v;
  });
}

function removeEmpty(list) {
  return list.filter((el) => el.trim());
}

function filterByExt(files, ext) {
  return files.filter((el) => el.endsWith(ext));
}

module.exports = {
  readDirectory,
  filterByExt,
  readFile,
  readFiles,
  removeEmpty,
  removeIfContains,
  removeIfNumer,
};
