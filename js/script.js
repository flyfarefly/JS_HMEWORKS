`use strict`;
(function () {
  function myApply(func, context, argsArray) {
    if (typeof func !== 'function') {
      throw new Error('Перший аргумент повинен бути функцією.');
    }

    if (context === null || context === undefined) {
      context = window;
      // Якщо контекст не вказано, використовуємо глобальний об'єкт (наприклад, window у браузері)
    }

    if (!Array.isArray(argsArray)) {
      throw new Error('Третій аргумент повинен бути масивом аргументів.');
    }

    // Викликаємо функцію з вказаним контекстом та переданими аргументами
    return func.apply(context, argsArray);
  }

  // Приклад використання:
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }

  const user = { name: 'John' };
  const args = ['World'];

  myApply(greet, user, args); // Виведе: Hello, World!
})();
