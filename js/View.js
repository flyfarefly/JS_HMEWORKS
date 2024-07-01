class View {
  postContainerSelector = null;

  postContainerElement = null;

  commentsContainerSelector = null;

  commentsContainerElement = null;

  constructor(postContainerSelector, commentsContainer) {
    this.postContainer = postContainerSelector;
    this.commentsContainer = commentsContainer;
  }

  // eslint-disable-next-line class-methods-use-this
  createPost({ title, body, id }) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card');
    wrapper.innerHTML = `<div class="card-body" data-post-id="${id}">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${body}</p>
                            <button data-load-comments class="btn btn-success">Load Comments...</button>
                        </div>`;
    return wrapper;
  }

  // eslint-disable-next-line class-methods-use-this
  createComment({ name, body, id, email }) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card');
    wrapper.classList.add('mb-4');
    wrapper.innerHTML = `<div class="card-body" data-comment-id="${id}">
                            <h5 class="card-title">${name}</h5>
                            <hr>
                            <p class="card-text">${body}</p>
                            <hr>
                            <p class="card-text">${email}</p> 
                        </div>`;
    return wrapper;
  }

  clearComments() {
    this.commentsContainerElement.innerHTML = '';
  }

  showError(error) {
    // eslint-disable-next-line no-alert
    alert(error);
  }

  disableLoadComment(element) {
    element.setAttribute('disabled', 'disabled');
  }

  async renderPost(post) {
    this.postContainerElement.innerHTML = '';
    this.postContainerElement.append(this.createPost(post));
  }

  async renderComment(data) {
    this.commentsContainerElement.append(this.createComment(data));
  }

  // eslint-disable-next-line accessor-pairs
  set postContainer(val) {
    this.postContainerSelector = val;
    this.postContainerElement = document.querySelector(val);
  }

  // eslint-disable-next-line accessor-pairs
  set commentsContainer(val) {
    this.commentsContainerSelector = val;
    this.commentsContainerElement = document.querySelector(val);
  }
}

export default View;
