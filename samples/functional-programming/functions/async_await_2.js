function generateNumbersBetweenRange(min, max, ilegalNumbers) {
  if (max < min) {
    [min, max] = [max, min];
  }

  return new Promise((resolve, reject) => {
    const randomNumber = parseInt(Math.random() * (max - min + 1)) + min;
    if (ilegalNumbers.includes(randomNumber)) {
      reject("Number repeated!");
    }
    resolve(randomNumber);
  });
}

async function genMegaSena(quantityNumbers) {
  const numbers = [];
  for (let _ of Array(quantityNumbers).fill()) {
    numbers.push(await generateNumbersBetweenRange(1, 60, numbers));
  }

  return numbers;
}

genMegaSena(8).then(console.log).catch(console.log);
