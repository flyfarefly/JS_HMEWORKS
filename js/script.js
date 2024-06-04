// eslint-disable-next-line no-unused-expressions,quotes
`use strict`;
(function () {
  const createArrayIterator = function (arr) {
    let index = 0;

    return {
      next() {
        if (index < arr.length) {
          // eslint-disable-next-line no-plusplus
          return { value: arr[index++], done: false };
        }
        return { done: true };
      },
    };
  };

  // Приклад використання:
  const myArray = [1, 2, 3, 4];

  const iterator = createArrayIterator(myArray);

  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: 4, done: false }
  console.log(iterator.next()); // { done: true }
})();
