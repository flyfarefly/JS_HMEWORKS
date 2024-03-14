`use strict`;
const arr = [1, 2, 3, 4, 5];
let sum = 0;
let multi = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

for (let i = 0; i < arr.length; i++) {
    multi += arr[i]** 2;
}

console.log(`Сума елементів масиву: ${sum}`);
console.log(`Сума квадратів елементів масиву: ${multi}`);