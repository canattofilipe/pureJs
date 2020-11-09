function generateNumbersBetweenRange(min, max, time) {
  if (max < min) {
    [min, max] = [max, min];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = parseInt(Math.random() * (max - min + 1)) + min;
      resolve(randomNumber);
    }, time);
  });
}

function genManyNumbers() {
  return Promise.all([
    generateNumbersBetweenRange(1, 60, 400),
    generateNumbersBetweenRange(1, 60, 100),
    generateNumbersBetweenRange(1, 60, 500),
    generateNumbersBetweenRange(1, 60, 300),
    generateNumbersBetweenRange(1, 60, 100),
  ]);
}

console.time("promise");
genManyNumbers()
  .then(console.log)
  .then(() => console.timeEnd("promise"));
