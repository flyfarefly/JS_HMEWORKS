`use strict`;

(function () {
  // Знаходимо тег ul
  const ulElement = document.querySelector('ul');

  // Витягуємо всі атрибути тегу ul та записуємо їх значення в масив
  // eslint-disable-next-line max-len
  const attributesValues = Array.from(ulElement.getAttributeNames(), (attr) =>
    ulElement.getAttribute(attr)
  );

  // Витягуємо імена атрибутів тегу ul та записуємо їх в окремий масив
  const attributeNames = Array.from(ulElement.getAttributeNames());

  // Змінюємо текст останнього тегу li
  const lastLiElement = ulElement.querySelector('li:last-child');
  lastLiElement.textContent = `Привіт мене звуть Ваше_ім'я`;

  // Додаємо атрибут до першого тегу li
  const firstLiElement = ulElement.querySelector('li:first-child');
  firstLiElement.setAttribute('data-my-name', 'Ваше_імя');

  // Видаляємо атрибут 'data-dog-tail' у тега ul
  ulElement.removeAttribute('data-dog-tail');

  // Виводимо результати в консоль
  console.log('Значення атрибутів тегу ul:', attributesValues);
  console.log('Імена атрибутів тегу ul:', attributeNames);
})();
