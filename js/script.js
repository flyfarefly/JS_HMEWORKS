// eslint-disable-next-line no-unused-expressions,quotes
`use strict`;
// eslint-disable-next-line func-names
(function () {
  // eslint-disable-next-line func-names
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

  console.log(iterator.next().value); // { value: 1, done: false }
  console.log(iterator.next().value); // { value: 2, done: false }
  console.log(iterator.next().value); // { value: 3, done: false }
  console.log(iterator.next().value); // { value: 4, done: false }
  console.log(iterator.next().value); // { done: true }
})();
