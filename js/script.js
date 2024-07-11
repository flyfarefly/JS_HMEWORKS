// eslint-disable-next-line func-names
(function () {
  // eslint-disable-next-line no-unused-expressions,quotes
  `use strict`;
  const user = {
    firstName: "Vova",
    lastName: "Daniel",
    age: 5,
  };
  // user.foo();
  const call = function (func, ctx, arrayOfArgs) {
    ctx.func = func;
    ctx.func(arrayOfArgs);
    delete ctx.func;
  };

  const bind = function (func, ctx, arrayOfArgs) {
    return function () {
      call(func, ctx, arrayOfArgs);
    };
  };

  const display = function () {
    console.log(this.lastName);
  };

  call(display, user);
  const d = bind(display, user);
  console.log(this.lastName);
  d();
})();
