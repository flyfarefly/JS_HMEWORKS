// eslint-disable-next-line import/extensions
import Model from './Model.js';
// eslint-disable-next-line import/extensions
import View from './View.js';
// eslint-disable-next-line import/extensions
import Controller from './Controller.js';
import {
  api,
  endPoints,
  // eslint-disable-next-line import/extensions
} from './utils/constants.js';

const modelInstance = new Model(api, endPoints);
const viewInstance = new View(
  '[data-post-container]',
  '[data-comments-container]'
);

// eslint-disable-next-line no-new
new Controller('[data-input]', '[data-load-comments]', {
  model: modelInstance,
  view: viewInstance,
});
