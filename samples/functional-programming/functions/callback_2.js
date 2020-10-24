const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt");

function showFileContent(err, content) {
  console.log(content.toString());
}
fs.readFile(filePath, showFileContent);
