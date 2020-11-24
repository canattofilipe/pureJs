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

function removeIfContains(symbol) {
  return function (list) {
    return list.filter((el) => !el.includes(symbol));
  };
}

function removeSymbols(symbols) {
  return function (list) {
    return list.map((el) => {
      let newText = el;
      symbols.forEach((symbol) => {
        newText = newText.split(symbol).join("");
      });
      return newText;
    });
  };
}

function groupWords(list) {
  return Object.values(
    list.reduce((acc, word) => {
      const p = word.toLowerCase();
      const quantity = acc[p] ? acc[p].quantity + 1 : 1;
      acc[p] = { el: word, quantity };
      return acc;
    }, {})
  );
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

function filterByExt(ext) {
  return function (files) {
    return files.filter((el) => el.endsWith(ext));
  };
}

function mergeContent(list) {
  return list.join(" ");
}

function separateTextBy(symbol) {
  return function (text) {
    return text.split(symbol);
  };
}

function sortByNumericAttr(attr, order = "asc") {
  return function (list) {
    const desc = (o1, o2) => o1[attr] - o2[attr];
    const asc = (o1, o2) => o2[attr] - o1[attr];
    return list.sort(order === "asc" ? asc : desc);
  };
}

module.exports = {
  readDirectory,
  filterByExt,
  readFile,
  readFiles,
  removeEmpty,
  removeIfContains,
  removeIfNumer,
  removeSymbols,
  mergeContent,
  separateTextBy,
  groupWords,
  sortByNumericAttr,
};
