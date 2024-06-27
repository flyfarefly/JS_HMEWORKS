// fetch('https://jsonplaceholder.typicode.com/albums')
//   .then((response) => response.json())
//   .then((albums) => {
//     // Створення списку елементів
//     const ul = document.createElement('ul');
//     albums.forEach((album) => {
//       const li = document.createElement('li');
//       const link = document.createElement('a');
//
//       link.href = 'album1.html'; // Замініть на відповідний URL
//       link.textContent = album.title;
//       li.textContent = album.title;
//       li.appendChild(link);
//       ul.appendChild(li);
//     });
//     // Додавання списку на сторінку
//     document.body.appendChild(ul);
//   })
//   .catch((error) => console.error('Помилка отримання даних:', error));

const getListAlbums = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums/');
  const listAlbums = await response.json();
  console.log(listAlbums);
  const ul = document.createElement('ul');
  listAlbums.forEach((album) => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    link.href = 'album1.html'; // Замініть на відповідний URL
    link.textContent = album.title;
    li.textContent = album.id;
    li.id = album.id;

    li.appendChild(link);
    ul.appendChild(li);
  });
  // Додавання списку на сторінку
  document.body.appendChild(ul);
};
getListAlbums();
