// eslint-disable-next-line no-unused-expressions,quotes
`use strict`;
// eslint-disable-next-line func-names
(function () {
  function generateList(array) {
    const ul = document.createElement('ul');

    // eslint-disable-next-line no-restricted-syntax
    for (const item of array) {
      const li = document.createElement('li');

      if (Array.isArray(item)) {
        li.appendChild(generateList(item));
      } else {
        li.textContent = item;
      }

      ul.appendChild(li);
    }

    return ul;
  }

  // Приклад використання:
  const myList = generateList([1, 2, [1.1, 1.2, 1.3], 3]);
  document.body.appendChild(myList);
})();
