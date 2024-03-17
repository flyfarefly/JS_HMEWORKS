`use strict`;
const myNumber = +prompt(`Введіть число`);
const findSmallestDivisor =  function (number) {
    if (number === 1) {
        return 1; // Якщо число менше або дорівнює 1, то мінімальний дільник - 1
    }
    if (number < 1) {
        return NaN; // Якщо число менше ніж 1 виводимо NaN
    }

    for (let divisor = 2; divisor <= number; divisor++) {
        if (number % divisor === 0) {
            return divisor; // Знайдено мінімальний дільник
        }
    }
    return number; // Якщо не знайдено інших дільників, то саме число є мінімальним дільником
}

const smallestDivisor = findSmallestDivisor(myNumber);
console.log(`Мінімальний дільник числа ${myNumber} - це ${smallestDivisor}`);
