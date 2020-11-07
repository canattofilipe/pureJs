const fs = require("fs");
const { resolve } = require("path");
const path = require("path");

function readFile(path){
    return new Promise(resolve => {
        fs.readFile(path, function(_, content){
            resolve(content.toString())
        })
        console.log('Afrer reading')
    })
}

const filePath = path.join(__dirname, "data.txt");
readFile(filePath).then(console.log)
