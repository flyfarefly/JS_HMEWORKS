`use strict`;
// // Task#1
// let i = 10;
// while (i <= 20) {
//     console.log( i );
//     i++;
// }

// // Task#1.1
// let numberString = '';
// for (let i = 10; i <= 20; i++) {
//     numberString += i;
//     if (i < 20) numberString += ', ';
// }
// console.log(numberString); // Виведе "10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20"


// // Task#1.2
// let numbers = []; // Пустий масив для зберігання чисел
// for (let i = 10; i <= 20; i++) {
//     numbers.push(i); // Додаємо число до масиву
// }
// console.log(numbers); // Виведе [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let numbersString = numbers.join(', ');
// console.log(numbersString); // Виведе "10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20"


// // Task#2
// for (let i = 10; i <= 20; i++) {
//     console.log(i, i**2);
// }

// // Task#3
// for (let i = 1; i <= 7; i++) {
//     console.log(i, i*7);
// }

// // Task#4
// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//     if (Number.isInteger(i)) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

// // Task#5
// let i = 15;
// let multi = 15;
// while (i < 35) {
//     i++;
//     multi = multi * i;
//     console.log( i, multi );
// }

// // Task#6
// let sum = null;
// for (let i = 1; i <= 500; i++) {
//     if (Number.isInteger(i)) {
//         sum = sum + i;
//     }
//     console.log(i, sum, sum/i);
// }
// console.log ( sum/500 );

// // Task#7
// let sum = null;
// for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//         sum = sum + i;
//         console.log( i, sum )
//     }
// }

// Task#8
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
// }

// // Task#9
// const n = +prompt(`Введіть натуральне число`);
// let k = 0; // Кількість дільників
// let i = 1; // Дільники
// let s = 0; // Сума дільників
//
// if (Number.isInteger(n)) {
//      for (; i <= n; i++) {
//      if (n % i === 0) {
//             console.log(i,s);
//             k = k + 1;
//             s = s + i;
//         }
//     }
// console.log(`Дільників ${k}, сума дільників ${s}`);
// }

// // Task#10 & Task#11
// const n = +prompt(`Введіть натуральне число`);
// let k = 0; // Кількість дільників
// let i = 1; // Дільники
// let s = 0; // Сума дільників
//
// if (Number.isInteger(n)) {
//         for (; i <= n; i++) {
//          if (n % i === 0) {
//          if (i % 2 === 0) {
//          console.log (i, s);
//          k = k + 1;
//          s = s + i;
//  }
//  }
//  }
//  console.log(`Парних дільників ${k}, а їх сума дорівнює ${s}`);
// }

// // Task#12
// for (let i = 1; i <= 10; i++) {
//     for (let n = 1; n <= 10; n++) {
//     console.log(`${i} * ${n} = ${i*n}`);
//     }
// }


