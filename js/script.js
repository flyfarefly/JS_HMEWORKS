`use strict`;
(function () {
  function deepFreeze(obj) {
    // Заморожуємо властивості об'єкта
    Object.freeze(obj);

    // Рекурсивно заморожуємо всі вкладені об'єкти
    for (const key in obj) {
      if (
        Object.prototype.hasOwnProperty.call(obj, key) &&
        typeof obj[key] === 'object'
      ) {
        deepFreeze(obj[key]);
      }
    }
  }

  // Приклад використання:
  const user = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3,
        },
      },
    },
  };

  deepFreeze(user);

  // Перевірка, чи об'єкт заморожений
  user.data.d.a1 = 100; // Заборонено, не відбудеться зміна
  console.log(user.data.d.a1); // Виведе початкове значення 1

  console.log(user);
  console.log(Object.isExtensible(user));
  console.log(Object.isFrozen(user)); // true
})();
