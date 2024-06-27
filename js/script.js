// eslint-disable-next-line quotes,no-unused-expressions
`use strict`;
// eslint-disable-next-line func-names
(function () {
  // eslint-disable-next-line func-names
  const customFlat = function (arr) {
    if (!Array.isArray(arr)) {
      throw new Error(
        "Function accepts only 1 argument, too much arguments provided",
      );
    }

    const flattened = [];

    function flatten(array) {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of array) {
        if (Array.isArray(item)) {
          flatten(item);
        } else {
          flattened.push(item);
        }
      }
    }

    flatten(arr);
    return flattened;
  };

  const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13],
  ];
  const secondResult = customFlat(complexArray);
  console.log(secondResult);
})();
