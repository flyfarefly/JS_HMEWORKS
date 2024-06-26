fetch('https://jsonplaceholder.typicode.com/albums')
  .then((response) => response.json())
  .then((albums) => {
    // Створення списку елементів
    const ul = document.createElement('ul');
    albums.forEach((album) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = 'album1.html'; // Замініть на відповідний URL
      console.log(link);
      link.textContent = album.title;

      li.textContent = album.title;
      li.appendChild(link);
      ul.appendChild(li);
    });
    // Додавання списку на сторінку
    document.body.appendChild(ul);
  })
  .catch((error) => console.error('Помилка отримання даних:', error));
