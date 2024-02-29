`use strict`;

const  num1 = Number(prompt(`Введіть будь яке перше число.`));
console.log(num1);
const  num2 = Number(prompt(`Введіть будь яке друге число.`));
console.log(num2);
    if (isNaN(num1) || isNaN(num2)) {
        alert('Напишіть числа, будь ласка!');
    } else {
        console.log(`Сума цих чисел буде ${num1 + num2}`);
        console.log(`Якщо розділити перше на друге число вийде ${num1 / num2}`);
        console.log(`Якщо розділити друге на перше число вийде ${num2 / num1}`);
        console.log(`А якщо помножити то вийде ${num1 * num2}`);
        console.log(`Якщо від першого числа відняти друге ${num1 - num2}`);
        console.log(`Якщо від другого числа відняти перше ${num2 - num1}`);
    }