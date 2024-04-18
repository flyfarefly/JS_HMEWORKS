`use strict`;
// Task#1
const arr = [];

for (let i = 20; i <= 30; i += 0.5) {
    arr.push(i);
}
console.log(`Масив: ${arr}`);

// Task#2
const exchangeRate = 27; // Курс долара до гривні

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * exchangeRate;
    console.log(`${dollars} доларів = ${uah} гривень`);
}

// Task#3
const N = parseFloat(prompt('Введіть число N:'));

if (isNaN(N)) {
    alert('Ви ввели неправильні дані. Будь ласка, введіть число.');
} else {
    for (let i = 1; i <= 100; i++) {
        const square = i * i;
        if (square <= N) {
            console.log(i);
        }
    }
}

// Task#4

const number = parseInt(prompt('Введіть ціле число більше 1:'));

if (isNaN(number) || number <= 1) {
    alert('Ви ввели неправильні дані. Будь ласка, введіть ціле число більше 1.');
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(`${number} є простим числом.`);
    } else {
        alert(`${number} не є простим числом.`);
    }
}

// Task #5

const num = parseInt(prompt('Введіть ціле число:'));

if (isNaN(num)) {
    alert('Ви ввели неправильні дані. Будь ласка, введіть ціле число.');
} else {
    let base = 3;
    let result = 1;

    while (result < num) {
        result *= base;
    }

    if (result === num) {
        alert(`${num} можна отримати шляхом зведення числа 3 у деякий ступінь.`);
    } else {
        alert(`${num} не можна отримати шляхом зведення числа 3 у деякий ступінь.`);
    }
}