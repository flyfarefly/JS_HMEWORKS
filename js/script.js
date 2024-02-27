`use strict`;

// Task #1

let admin = null;
console.log (typeof admin); // object
let name = null;
console.log (typeof  name); // object
name = "John";
admin = name;
alert( admin ); // "John"
console.log (typeof admin); // string

// Task #2

const planet = "Earth";
let userName= null;
console.log(typeof userName); // object

// Task #3

let number = null;
number = "10";
console.log(typeof number); // string

number = 10;
console.log(typeof number); // number