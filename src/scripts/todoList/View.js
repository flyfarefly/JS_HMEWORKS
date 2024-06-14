const View = {
  _formSelector: null,
  _todoContainerSelector: null,
  _formElement: null,
  _todoContainerElement: null,
  offCanvas: null,

  showInfo({ id, title, description }) {
    this.offCanvas._element.querySelector('.title').innerHTML =
      `${title} #${id}`;

    this.offCanvas._element.querySelector('.description').innerHTML =
      description;
    this.offCanvas.show();
  },

  removeItem(id) {
    this.todoContainerElement.querySelector(`[data-id="${id}"]`).remove();
  },

  renderItem(data) {
    const layout = this.createTemplate(data);
    this.todoContainerElement.prepend(layout);
  },

  resetForm() {
    this.formElement.reset();
  },

  createTemplate({ title, description, id }) {
    const wrap = document.createElement('div');
    wrap.classList.add('col-4');
    wrap.setAttribute('data-id', id);
    wrap.innerHTML = `<div class="taskWrapper">
        <div class="taskHeading">${title}</div>
        <div class="taskDescription">${description}</div>
        <hr>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button data-btn= "delete" type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
            <button data-btn= "info" type="button" class="btn btn-success btn-sm"><i class="bi bi-eye"></i></button>
           </div>
    </div>`;
    return wrap;
  },

  init({ form, todoContainer }) {
    this.formSelector = form;
    this.todoContainerSelector = todoContainer;

    const infoWindow = document.querySelector('#offcanvasExample');
    // eslint-disable-next-line no-undef
    this.offCanvas = new bootstrap.Offcanvas(infoWindow);
  },

  validateSelector(selector) {
    if (typeof selector !== 'string') {
      throw new Error('selector should be a string');
    }
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
export default View;
