### Homework #53 Recursion V2
    Ваша функція повинна повторювати базовий функціонал методу flat, але з деякими доопрацюваннями.

    Функція приймає лише 1 аргумент - масив,
    Функція повертає лише одновимірний масив
    Якщо користувач передає більше одного аргументу, викидати помилку в консоль
   
    
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    
    
    
    Якщо в функцію передали багатовимірний масив, то вона повинна повернути новий одновимірний масив.
    
    Якщо в функцію передали одновимірний масив, то вона повинна повернути новий масив, що є повною копією переданого.
    
    P.S використання методу flat заборонено
    
    Приклад масиву для використання
      
    
        const complexArray = [
        [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
        [5, [6, [7, [8, 9]]]],
        [[10, 11], 12, 13]
        ];
    
    
    
    Домашку можна здати після терміну 