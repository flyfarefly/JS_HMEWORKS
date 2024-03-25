`use strict`;
// Task#1
const arr = [`a`, `b`, `c`, `d`];
const result = `${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`;
console.log(result);

// Task#2
const arr1 = [2, 5, 3, 9];
const result1 = arr1[0] * arr1[1] + arr1[2] * arr1[3];
console.log(result1);

// Task#3
const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr2[1][0]);

// Task#4
const nothing = {js: [`jQuery`, `Angular`], php: `hello`, css: `world`};
console.log(nothing.js[0]);

// Task#5
const arr3 = [];
for (let i = 1; i <= 5; i++) {
    arr3.push('x'.repeat(i));
}
console.log(`Масив: ${arr3}`);

// Task#6
const arr4 = [];
for (let i = 1; i <= 5; i++) {
    arr4.push(String(i).repeat(i));
}
console.log(`Масив: ${arr4}`);

// Task#7
const result2 = [];

const filledArray = function (value, length) {
    for (let i = 0; i < length; i++) {
        result2.push(value);
    }
    return result2;
}
filledArray('x', 5);
console.log(`${result2}`);


// Task#8
const numbers = [2, 3, 1, 5, 4];
let sum = 0;
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
    if (sum > 10) {
        break;
    }
}
console.log(`Кількість елементів для суми більше 10: ${count}`);

// Task#9
const reverse = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        arr [i] = arr[arr.length - (1 + i)];
        arr[arr.length - (1 + i)] = currentElement;
        if (i + 1 === Math.floor(arr.length / 2)) break; // Перенесення цієї умови з if в умову циклу for не працює.
    }
    return arr;
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))

// Task#10.1 Працює. Розбираюся як... працює.
const arr10 = [[1, 2, 3], [4, 5], [6]];

const sum101 = arr10.reduce((acc, curr) => {
    return acc.concat(curr);
}, []).reduce((total, num) => total + num, 0);
console.log(`Сума елементів масиву: ${sum101}`);

// Task#10.2
let sum102 = 0;
for (let i = 0; i < arr10.length; i++) {
    for (let j = 0; j < arr10[i].length; j++) {
        sum102 += arr10[i][j];
    }
}
console.log(`Сума елементів масиву: ${sum102}`);


// Task#11.1
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum11 = 0;
for (let i = 0; i < arr11.length; i++) {
    for (let j = 0; j < arr11[i].length; j++) {
        for (let k = 0; k < arr11[i].length; k++) {
            sum11 += arr11[i][j][k];
        }
    }
}
console.log(`Сума елементів масиву: ${sum11}`);

// Task#11.2
const arr112 = [];

function oneLevel(num) {
    for (let elem of num) {
        if (typeof (elem) === 'object') {
            oneLevel(elem);
        } else {
            arr112.push(elem);
        }
    }
}

oneLevel(arr11);
let sum112 = arr112.reduce(function (acc, elem) {
    return acc + elem;
}, 0)
console.log(`Сума елементів масиву: ${sum112}`);