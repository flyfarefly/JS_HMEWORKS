// eslint-disable-next-line import/extensions
import Model from './Model.js';
// eslint-disable-next-line import/extensions
import View from './View.js';

const Controller = {
  _formSelector: null,
  _todoContainerSelector: null,
  _formElement: null,
  _todoContainerElement: null,

  init({ form, todoContainer }) {
    this.formSelector = form;
    this.todoContainerSelector = todoContainer;
    this.formHandler = this.formHandler.bind(this);
    this.loadedHandler = this.loadedHandler.bind(this);
    this.viewHandler = this.viewHandler.bind(this);
    this.setEvents();
  },

  setEvents() {
    this.formElement.addEventListener('submit', this.formHandler);
    document.addEventListener('DOMContentLoaded', this.loadedHandler);
    this.todoContainerElement.addEventListener('click', this.removeHandler);
    this.todoContainerElement.addEventListener('click', this.viewHandler);
  },

  formHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    let data = Array.from(
      event.target.querySelectorAll('input, textarea, select')
    ).reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});

    try {
      data = Model.setData(data);
      View.renderItem(data);
      View.resetForm();
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Cannot save data - DB is full!');
    }
  },
  loadedHandler() {
    const data = Model.getData();
    data.forEach((item) => {
      View.renderItem(item);
    });
  },
  removeHandler(event) {
    event.stopPropagation();
    const { target } = event;
    const btn = target.closest('[data-btn="delete"]');
    if (!btn) return;
    const todoItemId = Number(btn.closest('[data-id]').getAttribute('data-id'));
    const isRemoved = Model.removeData(todoItemId);

    if (isRemoved) {
      View.removeItem(todoItemId);
    } else {
      // eslint-disable-next-line no-alert
      alert('Cannot delete todo item');
    }
  },
  viewHandler(event) {
    event.stopPropagation();
    const { target } = event;
    const btn = target.closest('[data-btn="info"]');
    if (!btn) return;
    const todoItemId = Number(btn.closest('[data-id]').getAttribute('data-id'));
    const todoItemData = Model.getById(todoItemId);
    View.showInfo(todoItemData);
  },

  validateSelector(selector) {
    if (typeof selector !== 'string')
      throw new Error('selector should be a string');
    if (selector.trim() === '') throw new Error('selector not should be empty');
    const element = document.querySelector(selector);

    if (element === null) throw new Error('selector is not found in DOM');
  },
  set formSelector(selector) {
    this.validateSelector(selector);
    this._formSelector = selector;
    this._formElement = document.querySelector(selector);
  },
  set todoContainerSelector(selector) {
    this.validateSelector(selector);
    this._todoContainerSelector = selector;
    this._todoContainerElement = document.querySelector(selector);
  },
  // eslint-disable-next-line grouped-accessor-pairs
  get formSelector() {
    return this._formSelector;
  },
  // eslint-disable-next-line grouped-accessor-pairs
  get todoContainerSelector() {
    return this._todoContainerSelector;
  },
  get formElement() {
    return this._formElement;
  },
  get todoContainerElement() {
    return this._todoContainerElement;
  },
};
export default Controller;
