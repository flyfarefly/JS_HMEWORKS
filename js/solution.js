`use strict`;

(function () {
  const listItems = document.querySelectorAll('li'); // Вибираємо всі елементи li

  // Виводимо кожен елемент списку в консоль
  for (const item of listItems) {
    console.log(item.textContent);
  }

  // Виводимо загальну кількість елементів в консоль
  console.log(`Загальна кількість елементів: ${listItems.length}`);

  // Витягуємо текст із тегів li та записуємо в масив
  const textArray = Array.from(listItems, (item) => item.textContent.trim());

  // Виводимо масив текстів у консоль
  console.log('Масив текстів з елементів li:');
  console.log(textArray);
})();
