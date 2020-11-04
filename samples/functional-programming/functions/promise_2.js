// callback approach
// setTimeout(function () {
//   console.log("Executing callback...");

//   setTimeout(function () {
//     console.log("Executing callback...");

//     setTimeout(function () {
//       console.log("Executing callback...");
//     }, 2000);
//   }, 2000);
// }, 2000);

// promise approach
function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executing promise ...");
      resolve();
    }, time);
  });
}

waitFor().then(waitFor).then(waitFor);
