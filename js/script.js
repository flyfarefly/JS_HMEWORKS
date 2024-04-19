// eslint-disable-next-line no-unused-expressions,quotes
`use strict`;
const ladder = {
  step: 0,
  up() {
    // eslint-disable-next-line no-plusplus
    this.step++;
    return this;
  },
  down() {
    // eslint-disable-next-line no-plusplus
    this.step--;
    return this;
  },
  showStep() {
    // eslint-disable-next-line no-alert
    alert(ladder.step);
    return this;
  },
};

ladder.up().up().down().showStep(); // 1
