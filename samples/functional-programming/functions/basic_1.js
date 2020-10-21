// function declaration
function goodMorning() {
  console.log("good morning");
}

goodMorning();

// function expression
goodEvening = function () {
  console.log("good evening");
};

goodEvening();

// JS does not take care about quantity of params

function sum(a, b = 0) {
  return a + b;
}

const result1 = sum(10, 10);
console.log(result1);

const result2 = sum(10, 10, 5, 3, 2, 1);
console.log(result2);

const result3 = sum(10);
console.log(result3);
