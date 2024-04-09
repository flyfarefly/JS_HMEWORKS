`use strict`;
const userInput = prompt(`Скільки вам років? Введіть число від 1 до 124`);
if (userInput === null) {
    alert('Ви скасували введення.');
} else {
    const number = parseFloat(userInput);
    if (isNaN(number) || number < 0 || number >= 124) {
        alert('Ви ввели неправильні дані. Будь ласка, введіть число.');
    } else {
        let word;
        if (number === 0 || (number >= 5 && number <= 20)) {
            word = 'років';
        } else if (number % 10 === 1) {
            word = 'рік';
        } else if (number % 10 >= 2 && number % 10 <= 4) {
            word = 'роки';
        } else {
            word = 'років';
        }
        alert(`Вам ${number} ${word}.`);
    }
}
