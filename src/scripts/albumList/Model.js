fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((photos) => {
    // Створення списку елементів
    const div = document.getElementById('album-list');

    photos.forEach((albumId) => {
      // Створення елементів списку

      const div = document.createElement('div');
      const img = document.createElement('img');
      const a = document.createElement('a');

      img.src = albumId.thumbnailUrl;
      img.alt = `Обкладинка альбому ${albumId.id}`;
      a.href = albumId.url;
      a.textContent = albumId.title;

      div.appendChild(img);
      div.appendChild(a);
    });
    // Додавання списку на сторінку
    document.body.appendChild(div);
  })
  .catch((error) => console.error('Помилка отримання даних:', error));
