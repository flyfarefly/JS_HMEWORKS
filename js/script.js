// eslint-disable-next-line no-unused-expressions,quotes
`use strict`;
// eslint-disable-next-line func-names
(function () {
  function deepFreeze(obj) {
    const myObject = { obj };
    const keys = Object.keys(myObject);

    console.log(myObject);

    keys.forEach(() => {
      // const descriptors = Object.getOwnPropertyDescriptors(obj);
      const descriptors = Object.defineProperties(obj, {
        [keys]: {
          configurable: true,
          writable: true,
        },
      });

      console.log(keys, descriptors);
    });

    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      if (
        Object.prototype.hasOwnProperty.call(obj, key) &&
        typeof obj[key] === 'object'
      ) {
        deepFreeze(obj[key]);
      }
    }
  }

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

  deepFreeze(obj2);

  console.log(obj2);
  console.log(Object.isExtensible(obj2));
  console.log(Object.isFrozen(obj2)); // true
})();
