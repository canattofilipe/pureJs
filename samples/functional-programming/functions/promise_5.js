function workOrNo(value, errorChance) {
  return new Promise((resolve, reject) => {
    try {
      con.log("temp");
      if (Math.random() < errorChance) {
        reject("Ocorreu um erro!");
      } else {
        resolve(value);
      }
    } catch (e) {
      reject(e);
    }
  });
}

workOrNo("Testing...", 0.5)
  .then((v) => `value: ${v}`)
  .then(
    (v) => consol.log(v),
    (err) => console.log(`Specific err.: ${err}`)
  )
  .then(() => console.log("Almost end!"))
  .catch((err) => console.log(`Generic err: ${err}`))
  .then(() => console.log("End!"));
