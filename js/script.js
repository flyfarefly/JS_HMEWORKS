`use strict`;
// Task #1
const getFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
};

const number = 4;
console.log(`${number}! = ${getFactorial(number)}`);

// Task #2
const pow = (x, n) => {
  if (n === 1) {
    return x;
  }
  return x * pow(x, n - 1);
};

const x = 3;
const n = 6;
console.log(
  `При возведенні числа ${x} в ${n} ступінь отримаємо число ${pow(x, n)}.`,
);

// Task #3
const recursiveSum = (a, b) => {
  if (b === 0) {
    return a;
  }
  return recursiveSum(a + 1, b - 1);
};

const a = 3;
const b = 6;

console.log(`Сума ${a} і ${b} дорівнює ${recursiveSum(a, b)}.`);
