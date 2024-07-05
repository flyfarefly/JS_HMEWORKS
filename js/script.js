// eslint-disable-next-line no-unused-expressions,quotes
`use strict`;

//  Метод arr.indexOf

function customIndexOf(arr, searchElement, fromIndex = 0) {
  if (!Array.isArray(arr)) {
    throw new Error('Вхідний параметр повинен бути масивом.');
  }
  // Обмежуємо пошук відповідно до fromIndex
  const startIndex = Math.max(
    fromIndex >= 0 ? fromIndex : arr.length + fromIndex,
    0
  );

  // eslint-disable-next-line no-plusplus
  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

// Приклад використання:
const myArray = [1, 10, 20, 30, 40, 50];
const searchElement = 30;
const indexElement = customIndexOf(myArray, searchElement);
console.log(`Індекс елемента ${searchElement} у масиві: ${indexElement}`);

//   Метод arr.lastindexOf

// eslint-disable-next-line no-shadow
function customLastIndexOf(arr, searchElement, fromIndex = arr.length - 1) {
  if (!Array.isArray(arr)) {
    throw new Error('Вхідний параметр повинен бути масивом.');
  }

  // Обмежуємо пошук відповідно до fromIndex
  const endIndex = Math.min(
    fromIndex >= 0 ? fromIndex : arr.length + fromIndex,
    arr.length - 1
  );

  // eslint-disable-next-line no-plusplus
  for (let i = endIndex; i >= 0; i--) {
    if (arr[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

// Приклад використання:

const lastIndex = customLastIndexOf(myArray, searchElement);
console.log(`Останній індекс елемента ${searchElement} у масиві: ${lastIndex}`);

// Метод arr.find

function customFind(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error('Вхідний параметр повинен бути масивом.');
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const item of arr) {
    if (callback(item)) {
      return item;
    }
  }

  return undefined;
}

// Приклад використання:

const foundElement = customFind(myArray, (item) => item > 25);
console.log(`Перший елемент більше 25: ${foundElement}`); // 30

// Метод arr.findindex

function customFindIndex(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error('Вхідний параметр повинен бути масивом.');
  }

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }

  return -1;
}

// Приклад використання:

const index = customFindIndex(myArray, (item) => item > 25);
console.log(`Індекс першого елемента більше 25: ${index}`); // 2

// Метод arr.includes

// eslint-disable-next-line no-shadow
function customIncludes(arr, searchElement) {
  if (!Array.isArray(arr)) {
    throw new Error('Вхідний параметр повинен бути масивом.');
  }
  return arr.some((item) => item === searchElement);
}

// Приклад використання:

const hasElement = customIncludes(myArray, 30);
console.log(`Чи містить масив елемент 30? ${hasElement}`); // true

// Метод arr.some

function customSome(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error('Вхідний параметр повинен бути масивом.');
  }

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }

  return false;
}

// Приклад використання:
const hasEvenNumber = customSome(myArray, (item) => item % 2 === 0);
console.log(`Чи є хоча б один парний елемент? ${hasEvenNumber}`); // true

// Метод arr.every

function customEvery(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error('Вхідний параметр повинен бути масивом.');
  }

  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }

  return true;
}

// Приклад використання:

const isAllEven = customEvery(myArray, (item) => item % 2 === 0);
console.log(`Чи всі елементи парні? ${isAllEven}`); // true

//  Метод arr.reduce

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];

// eslint-disable-next-line func-names
const reduce = function (arr, callback, accumulator) {
  let result = accumulator;
  for (let i = 0; i < arr.length; i++) {
    result = callback(accumulator, arr[i], i, arr);
  }
  return result;
};

console.log(
  reduce(
    users,
    (accum, item) => {
      // eslint-disable-next-line no-param-reassign
      accum[`${item.id}_${item.username}`] = item.address;
      return accum;
    },
    {}
  )
);
