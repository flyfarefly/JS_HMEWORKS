import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';

const selectors = {
  form: '#todoForm',
  todoContainer: '#todoItems',
};
View.init(selectors);
Model.init();
Controller.init(selectors);
