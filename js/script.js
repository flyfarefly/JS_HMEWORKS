`use strict`;
const power = function (base, exponent = 1) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        return 'Помилка: введено неправильні дані';
    }
    const result = Math.pow(base, exponent);
    return result;
}

const baseNumber = parseFloat(prompt('Введіть число:'));
const exponentNumber = parseFloat(prompt('Введіть ступінь:'));
const resultValue = power(baseNumber, exponentNumber);
alert(`Результат: ${resultValue}`);
