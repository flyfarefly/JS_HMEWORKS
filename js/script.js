// eslint-disable-next-line no-unused-expressions,quotes
`use strict`;
// eslint-disable-next-line func-names
(function () {
  function createSumFunction() {
    let total = 0;

    function sum(n) {
      total += n;
      return total;
    }

    // eslint-disable-next-line func-names
    sum.valueOf = function () {
      return total;
    };

    return sum;
  }

  const sum = createSumFunction();

  console.log(sum(3)); // 3
  console.log(sum(5)); // 8
  console.log(sum(20)); // 28
})();
