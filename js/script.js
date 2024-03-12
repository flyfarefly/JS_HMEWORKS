`use strict`;
const age = prompt(`Cкільки вам років? Введіть число від 1 до 124`);
let ageString = String();

console.log( age, typeof age)

if ( age === null) {
    alert(`Шкода, що ви не ввели скільки вам років!`);
} else {
    if (isNaN(Number(age))) {
        alert('Напишіть число, будь ласка!');
    } else if (age < 1 || age > 124){
        console.log ( `Ви ввели не коректне значення`);
    } else if (age === 1 || age === 21 || age === 31 || age === 41|| age === 51 || age === 61 || age === 71|| age === 81 || age === 91 || age === 101|| age === 121){
        ageString = "рік";
        alert(` Вам ${age} ${ageString}`);

    } else if ( age === 2 || age <=4 && age >= 22 || age <=24) {
        ageString = "роки";
        alert(` Вам ${age} ${ageString}`);

    } else if ( age => 5 || age < 20) {
        ageString = "років";
        alert(` Вам ${age} ${ageString}`)
    }
    alert(`Спробуйте ще!`);
}
