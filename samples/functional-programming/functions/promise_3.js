function generateNumbersBetweenRange(min, max) {
  if (max < min) {
    [min, max] = [max, min];
  }

  return new Promise((resolve) => {
    const randomNumber = parseInt(Math.random() * (max - min + 1)) + min;
    resolve(randomNumber);
  });
}

generateNumbersBetweenRange(10, 15)
  .then((value) => value * 10)
  .then((numX10) => `This number 10 times is equal ${numX10}`)
  .then(console.log);
