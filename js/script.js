`use strict`;
// Task#1

// Task#2
const test = confirm("Згенерувати випадкове п'ятизначне число");
console.log(test);
if ( test === true) {
    alert("Трохи почекайте!");
    function randomInt(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
const num = (randomInt(10000,99999));
alert (num);
console.log(typeof num);

let arr = String(num).split('').join(` `);
alert (arr);
console.log(typeof arr);
}
