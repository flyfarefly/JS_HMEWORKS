`use strict`;

const numOrStr = prompt('Введіть число або рядок');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log('Ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Порожній рядок');
        break;
    case isNaN(+numOrStr):
        console.log('Не число (NaN)');
        break;
    default:
        console.log('OK!');
}
