`use strict`;

const age = Number(prompt(`Скільки років тобі?`));
if (isNaN(age)) {
    alert('Напишіть число, будь ласка!');
} else {
    alert(`А через десять років тобі буде ${age + 10}`);
}






