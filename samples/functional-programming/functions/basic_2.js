// pass function as parameter

function goodMorning() {
  console.log("good morning");
}

goodEvening = function () {
  console.log("good evening");
};

function execute(fn) {
  if (typeof fn === "function") {
    fn();
  } else {
    console.log("not a function");
  }
}

execute(goodMorning);
execute(goodEvening);
execute(3);

// return function as parameter

function pow(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const pow2 = pow(2);
console.log(pow2(2));
// or
console.log(pow(2)(2));
