`use strict`;


// Task#1.2
let numbers = []; // Пустий масив для зберігання чисел
for (let i = 10; i <= 20; i++) {
    numbers.push(i); // Додаємо число до масиву
}
console.log(numbers); // Виведе [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let numbersString = numbers.join(', ');
console.log(numbersString); // Виведе "10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20"

