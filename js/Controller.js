class Controller {
  inputSelector = null;

  inputElement = null;

  loadCommentsSelector = null;

  loadCommentsElement = null;

  currentPost = null;

  #model = null;

  #view = null;

  constructor(inputSelector, loadCommentsSelector, { model, view }) {
    this.input = inputSelector;
    this.loadComments = loadCommentsSelector;
    this.#model = model;
    this.#view = view;
    this.setEvents();
  }

  setEvents() {
    this.inputElement = document.addEventListener('input', this.handleInput);
  }

  handleInput = async ({ target }) => {
    if (this.loadCommentsElement) {
      this.loadCommentsElement.removeEventListener(
        'click',
        this.loadCommentsHandler
      );
      this.loadCommentsElement = null;
    }
    try {
      this.currentPost = await this.#model.getPostById(target.value);
      this.#view.clearComments();
      await this.#view.renderPost(this.currentPost);
      this.loadCommentsElement = document.querySelector(
        this.loadCommentsSelector
      );
      this.loadCommentsElement.addEventListener(
        'click',
        this.loadCommentsHandler,
        {
          once: true,
        }
      );
    } catch (e) {
      this.#view.showError(e);
    }
  };

  loadCommentsHandler = async ({ target }) => {
    try {
      const data = await this.#model.getCommentsByPostId(this.currentPost.id);
      for (const comment of data) {
        await this.#view.renderComment(comment);
      }

      this.#view.disableLoadComment(target);
    } catch (e) {
      this.#view.showError(e);
    }
  };

  set input(val) {
    this.inputSelector = val;
    this.inputElement = document.querySelector(val);
  }

  set loadComments(val) {
    this.loadCommentsSelector = val;
  }
}

export default Controller;
