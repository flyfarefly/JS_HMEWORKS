`use strict`;

const num1 =prompt(`Введіть перше число`);
let averageSum = null;
if (num1 === null){
    console.log (`Обов'язково введіть число!`);
}else {
    if (isNaN (Number(num1))){
        console.log (`введіть перше число!`, typeof num1);
}else {
        averageSum = Number(num1);
        console.log(num1, averageSum, typeof averageSum);
    }}

const num2 =prompt(`Введіть друге число`);
if (num2 === null){
    console.log (`Обов'язково введіть число!`);
}else {
    if (isNaN (Number(num2))){
        console.log (`введіть друге число!`, typeof num2);
    }else {
        averageSum += (Number(num2));
        console.log(num2, averageSum, typeof averageSum);
    }}

const num3 =prompt('Введіть третє число');

if (num3 === null){
    console.log (`Обов'язково введіть число!`);
}else {
    if (isNaN (Number(num3))){
        console.log (`введіть третє число!`, typeof num3);
    }else {
        averageSum += (Number(num3));
        console.log(num3, averageSum, typeof averageSum);
    }}
if (averageSum === null){
    console.log (`Ви не ввели жодного числа`);
}else {
    if (averageSum === 0){
        console.log (`Ви таки не ввели жодного числа`);

    }else{

    averageSum /=3;
    console.log (averageSum);
    alert(`Середнє арифметичне цих трьох чисел ${num1}, ${num2} та ${num3} буде ${averageSum}`);
    }}



