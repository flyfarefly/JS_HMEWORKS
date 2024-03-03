`use strict`;

// Task#1

// let user = new Object();

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// console.log(user);
//
// user.name = 'Pete';
// console.log(user);
//
// delete user.name;
// console.log(user);

//Task#2

// const user = {
//     name: 'John'
// };

// Чи буде це працювати та чому ?

// user.name = 'Pete'; // Це властивість об'єкту. Вона може змінюватись.
// console.log(user);

// Task#3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130

};
sum = salaries.John+ salaries.Ann+salaries.Pete;
console.log(sum);
console.log(typeof sum);