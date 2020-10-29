const firstElement = (array) => array[0];
const firstLetter = (string) => string[0];
const letterLowerCase = (letter) => letter.toLowerCase();

let p = new Promise(function (resolve) {
  resolve(["Filip", "Jhon", "Miller", "Steve"]);
});

p.then(firstElement).then(firstLetter).then(letterLowerCase).then(console.log);
