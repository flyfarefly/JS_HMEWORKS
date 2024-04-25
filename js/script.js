(function () {
  // eslint-disable-next-line no-unused-expressions
  `use strict`;
  const user = {
    firstName: "Vova",
    lastName: "Daniel",
    age: 5,
    foo() {
      console.log(this.lastName);
    },
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
  d();
})();
