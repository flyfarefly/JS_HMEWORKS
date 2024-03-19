`use strict`;
const padString = function (str, length, symbol, right = true) {

    if (typeof str !== 'string') return `STR not type of string`;
    if (typeof length !== 'number' || isNaN(length)) return `Length not type of number`;
    if (str.length >= length) return str.substring(0, length);
    if (typeof symbol !== 'string' || symbol.length !== 1) return `Symbol not type of symbol or more symbols`;
    const repeatedElements = symbol.repeat(length - str.length);
    if (typeof right !== 'boolean') return `Right not type of boolean`;
    return right ? str + repeatedElements : repeatedElements + str;
}


console.log(padString('hello', 9, '*', true));