// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then((response) => response.json())
//   .then((photos) => {
//     // Створення списку елементів
//     const ul = document.getElementById('album-list');
//
//     photos.forEach((albumId) => {
//       // Створення елементів списку
//
//       const li = document.createElement('li');
//       const img = document.createElement('img');
//       const a = document.createElement('a');
//
//       img.src = albumId.thumbnailUrl;
//       img.alt = `Обкладинка альбому ${albumId.id}`;
//       a.href = albumId.url;
//       a.textContent = albumId.title;
//
//       li.appendChild(img);
//       li.appendChild(a);
//       ul.appendChild(li);
//     });
//     // Додавання списку на сторінку
//     document.body.appendChild(ul);
//   })
//   .catch((error) => console.error('Помилка отримання даних:', error));
