`use strict`;

let a = 10;
let b = 6;

// #1
if ( a === 0) {
    console.log (`Вірно`);
} else{
    console.log (`Неправильно`);
}
// #2
if (a > 0){
    console.log (`Вірно`);
} else {
    console.log (`Неправильно`);
}
// #3
if (a < 0){
    console.log (`Вірно`);
} else {
    console.log (`Неправильно`);
}
// #4
if (a >= 0){
    console.log (`Вірно`);
} else {
    console.log (`Неправильно`);
}
// #5
if (a <= 0){
    console.log (`Вірно`);
} else {
    console.log (`Неправильно`);
}
// #6
if (a !== 0){
    console.log (`Вірно`);
} else {
    console.log (`Неправильно`);
}
// #7
if (a === `test`){
    console.log (`Вірно`);
} else {
    console.log (`Неправильно`);
}

// #8
if (a === `1`&& typeof a){
    console.log (`Вірно`, typeof a);
} else {
    console.log (`Неправильно`, typeof a);
}
// #9
if (a > 0 && a < 5){
    console.log (`Вірно`);
} else {
    console.log (`Неправильно`);
}
// #10
// if (a === 0 || a === 2){
//     console.log ( a += 7);
// } else {
//     console.log (a /=10);
// }

// #11
if (a <= 1 && b >=3){
    console.log ( a + b);
} else {
    console.log (a - b);
}

// #12
if (a > 2 && a < 11 || b >= 6 && b < 14){
    console.log ('Вірно');
} else {
    console.log ('Невірно');
}

// #13.1
//
// const test = confirm("Згенерувати випадкове число від 1 до 4");
// console.log(test);
//
// if ( test === true) {
// alert( "Трохи почекайте!");
//
// function randomInt(min,max){
//     return Math.floor(Math.random() * (max - min) + min);
//     }
//
//     const season = (randomInt(1,4));
//     alert(season);
//     let cost = String();
//     switch (season) {
//             case 1 :
//             cost = "Зима";
//             alert(`B році ${season} перша пора року ${cost}`);
//             break;
//                 case 2:
//                 cost = "Весна";
//                 alert(`B році ${season} друга пора року ${cost}`);
//                 break;
//                 case 3:
//                     cost = "Літо";
//                     alert(`B році ${season} третя пора року ${cost}`);
//                     break;
//                     case 4:
//                         cost = "Осінь";
//                         alert(`B році ${season} четверта пора року ${cost}`);
//                         break;
//     }
// }
// else if (test !== true){
// alert("Спробуйте ще раз!");
// }

// #13.2

// const num = +prompt("Введіть число від 1 до 4");
// let result = String();
// if ( num === false) {
//     alert( "Введіть число!");
//
// } else if ( num === 1) {
//     result = "Зима";
//     console.log (result);
// } else if ( num === 2) {
//     result = "Весна";
//     console.log (result);
// } else if ( num === 3) {
//     result = "Літо";
//     console.log (result);
// } else if ( num === 4) {
//     result = "Осінь";
//     console.log (result);
// } else {
//     alert("Спробуйте ще раз!");
// }

// #13.3

const num = +prompt("Введіть число від 1 до 4");
if ( num === false) {
    alert("Введіть число!");
} else if (num === true){
    alert("Спробуйте ще раз!");
} else {
    let result = String();
    switch (num) {
        case 1 :
            result = "Зима";
            alert(`B році перша пора року ${result}`);
            break;
        case 2:
            result = "Весна";
            alert(`B році друга пора року ${result}`);
            break;
        case 3:
            result = "Літо";
            alert(`B році третя пора року ${result}`);
            break;
        case 4:
            result = "Осінь";
            alert(`B році четверта пора року ${result}`);
            break;
    }
}
