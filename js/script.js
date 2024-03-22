`use strict`;
const arr1 = [1, 2, 3, -1, -2, -3];
const positiveArr = function (arr) {
    const positiveNumbers = arr.filter(number => number > 0);
    return positiveNumbers;
}
console.log(`Масив позитивних чисел: ${positiveArr(arr1)}`);


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 1; num > i; i++) {
        if (num < 0) {
            return false;
        }
    }
    return num >= 1;
}

console.log(array.filter(isPrime));

const arr = [-3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const positiveNum = function (arr) {
    const newArr = [];
    if (arr.length === 0) return `Масив пустий`;
    for (let i = 0; i < arr.length; i++) {
        const isPositive = Math.sign(arr[i]) === 1 || Math.sign(arr[i]) === 0;
        isPositive && newArr.push(arr[i]);
    }
    return newArr.length ? newArr : null;
}
console.log(positiveNum(arr));
console.log(positiveNum([]));
console.log(positiveNum([-3, -2, -1, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13]));
