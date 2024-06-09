// eslint-disable-next-line no-unused-expressions,quotes
`use strict`;

function deepFreeze(object) {
  // Отримання назв означених на об'єкті властивостей
  const propNames = Reflect.ownKeys(object);
  console.log(propNames);

  // Заморожування властивостей, перед заморожуванням самого себе
  for (const name of propNames) {
    const value = object[name];

    if ((value && typeof value === 'object') || typeof value === 'function') {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

// const obj2 = {
//   internal: {
//     a: null,
//     b: null,
//   },
// };

const obj2 = {
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

Object.defineProperty(obj2, 'data', {
  writable: true,
  configurable: false,
  enumerable: false,
});

const descriptor = Object.getOwnPropertyDescriptor(obj2, 'data');

console.log(descriptor);
console.log(deepFreeze(obj2));
console.log(descriptor);
console.log(Object.isExtensible(obj2));
console.log(Object.isFrozen(obj2));

//
// const employee = {
//   name: 'Маянк',
//   designation: 'Розробник',
//   address: {
//     street: 'Рогіні',
//     city: 'Делі',
//   },
// };
//
// Object.freeze(employee);
//
// employee.name = 'Кінь в пальто'; // мовчки не спрацьовує в несуворому режимі
// employee.address.city = 'Нойда'; // атрибути дочірніх об'єктів можна модифікувати
//
// console.log(employee.address.city); // "Нойда"
