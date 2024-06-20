// eslint-disable-next-line no-unused-expressions,quotes
`use strict`;
// eslint-disable-next-line func-names
(function () {
  // eslint-disable-next-line func-names
  const cacheFunction = function (func) {
    const cache = new Map();
    const maxCacheSize = 10;
    // eslint-disable-next-line func-names
    return function (...args) {
      const key = JSON.stringify(args);

      if (cache.has(key)) {
        return cache.get(key);
      }

      if (cache.size === maxCacheSize) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }

      const result = func(...args);
      cache.set(key, result);
      return result;
    };
  };

  // eslint-disable-next-line func-names
  const expensiveOperation = function (n) {
    return n * 2;
  };

  const cachedExpensiveOperation = cacheFunction(expensiveOperation);

  console.log(cachedExpensiveOperation(1));
  console.log(cachedExpensiveOperation(2));
  console.log(cachedExpensiveOperation(3));
  console.log(cachedExpensiveOperation(4));
  console.log(cachedExpensiveOperation(5));
  console.log(cachedExpensiveOperation(6));
  console.log(cachedExpensiveOperation(7));
  console.log(cachedExpensiveOperation(8));
  console.log(cachedExpensiveOperation(9));
  console.log(cachedExpensiveOperation(10));
  console.log(cachedExpensiveOperation(11));
  console.log(cachedExpensiveOperation(11));
  console.log(cachedExpensiveOperation(11));
  console.log(cachedExpensiveOperation(11));
  console.log(cachedExpensiveOperation(11));
})();
