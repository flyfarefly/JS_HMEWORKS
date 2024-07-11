`use strict;`

// Питаємо користувача про операцію
const operation = prompt('Виберіть операцію (add, sub, mult, div):');

// Питаємо користувача про перше число
const num1 = parseFloat(prompt('Введіть перше число:'));

// Питаємо користувача про друге число
const num2 = parseFloat(prompt('Введіть друге число:'));

// Виконуємо вибрану операцію за допомогою тернарних операторів
const result = operation === 'add'
    ? num1 + num2
    : operation === 'sub'
        ? num1 - num2
        : operation === 'mult'
            ? num1 * num2
            : operation === 'div'
                ? num1 / num2
                : 'Невірна операція';

// Виводимо результат
console.log(`${num1} ${operation} ${num2} = ${result}`);
