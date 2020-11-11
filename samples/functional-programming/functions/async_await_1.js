function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), time);
  });
}

// waitFor(2000)
//   .then(() => console.log("Executed promise 1"))
//   .then(waitFor)
//   .then(() => console.log("Executed promise 2"))
//   .then(waitFor)
//   .then(() => console.log("Executed promise 3"));

function returnValue() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 5000);
  });
}

async function execute() {
  const v = await returnValue();

  await waitFor(1500);
  console.log(`Async/Await ${v}`);

  await waitFor(1500);
  console.log(`Async/Await ${v + 1}`);

  await waitFor(1500);
  console.log(`Async/Await ${v + 2}`);

  return v + 3;
}

execute().then(console.log);
