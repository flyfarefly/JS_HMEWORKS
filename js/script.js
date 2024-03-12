`use strict`;

alert('Презентуємо простенький калькулятор,\n');
alert('Він вміє виконувати прості математичні операції.\n');
alert(`Додавання "add"\n Множення "mult"\n Ділення "div"\n Віднімання "sub"`);
const name = prompt(`Введіть назву математичної операції, яку ви хочете зробити з числами:`);

switch (name.toLowerCase()){
    case "add":
    case "sub":
    case "mult":
    case "div":

        const num1 = Number(prompt(`Введіть будь яке перше число.`));
        console.log(num1);
        const num2 = Number(prompt(`Введіть будь яке друге число.`));
        console.log(num2);

        if (isNaN(num1) || isNaN(num2)) {
            alert('Напишіть числа, будь ласка!');
        } else {
            switch (name.toLowerCase()){
                case `add` :
                    console.log(`Сума цих чисел буде ${num1 + num2}`);
                    break;
                case `sub`:
                    console.log(`Якщо від першого числа відняти друге ${num1 - num2}`);
                    console.log(`Якщо від другого числа відняти перше ${num2 - num1}`);
                    break;
                case `mult`:
                    console.log(`А якщо помножити то вийде ${num1 * num2}`);
                    break;
                case `div`:
                    console.log(`Якщо розділити перше на друге число вийде ${num1 / num2}`);
                    console.log(`Якщо розділити друге на перше число вийде ${num2 / num1}`);
                    break;
            }}
        break;
    default:
        alert ("Ви ввели не існуючу операцію");
        alert("Введіть назву операції зрозумілу калькулятору, будь ласка!");
        console.log(name);}
