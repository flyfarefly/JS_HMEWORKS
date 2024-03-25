`use strict`;
// Task#01
const arrFirst = [1, 2, 3];
const arrSecond = [4, 5, 6];
const arrConcat = arrFirst.concat(arrSecond);
console.log(arrConcat);

// Task#02
const arr = [1, 2, 3];
const arrReverse = arr.reverse();
console.log(arrReverse);

// Task#03
const arrNew = [1, 2, 3];
arrNew.push(4, 5, 6);
console.log(arrNew);

// Task#04
const arr1 = [1, 2, 3];
arr1.unshift(4, 5, 6);
console.log(arr1);

// Task#05

const arr2 = ['js', 'css', 'jq'];
console.log(`Перший елемент масиву: ${arr2[0]}`);

// Task#06
const arr3 = ['js', 'css', 'jq'];
console.log(`Останній елемент масиву: ${arr3[arr3.length - 1]}`);

// Task#07
const dadArray = [1, 2, 3, 4, 5];
const newArray = dadArray.slice(0, 3);
console.log(`Новий масив з елементами: ${newArray}`);


// Task#08
const originalArray = [1, 2, 3, 4, 5];
const cutArray = originalArray.splice(3, 2);
console.log(`Новий масив з елементами: ${cutArray}`);

// Task#09
const momArray = [1, 2, 3, 4, 5];
const sliceArray = momArray.slice(1, 3);
console.log(`${sliceArray}`);

// Task#10
const familyArray = [1, 2, 3, 4, 5];
const childArray = familyArray.slice(1, 4);
console.log(`${childArray}`);

// Task#11
const friendsArray = [1, 2, 3, 4, 5];
friendsArray.splice(1, 3);
friendsArray.push('a', 'b', 2, 'c', 5, 'e');
console.log(`Оновлений масив: ${friendsArray}`);

// Task#12
const badArray = [1, 2, 3, 4, 5];
const goodArray = badArray.splice(3, 2);
badArray.push('a', 'b', 'c');
const maybeArray = badArray.concat(goodArray);
console.log(`Оновлений масив: ${maybeArray}`);

// Task#13
const arrSort = [3, 4, 1, 2, 7];
arrSort.sort();
console.log(`Відсортований масив: ${arrSort}`);

// Task#14

const arr4 = [5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
}
console.log(`Сума елементів масиву: ${sum}`);

// Task14.1
let sum2 = arr4.reduce(function (acc, item) {
    return acc + item;
}, 0)
console.log(`Сума елементів масиву: ${sum2}`);

// Task14.2
let sum3 = arr4.reduceRight(function (acc, item) {
    return acc + item;
}, 0)
console.log(`Сума елементів масиву: ${sum3}`);


// Task#15
const arr5 = [5, 6, 7, 8, 9];
const arrDegree = [];
for (let i = 0; i < arr5.length; i++) {
    arrDegree.push(arr4[i] * arr4[i]);
}
console.log(`Масив елементів масиву ${arr5} у 2 ступені: ${arrDegree}`);

// Task#16
const arr6 = [1, -3, 5, 6, -7, 8, 9, -11];
const positiveNumbers = arr5.filter((item) => item > 0);
console.log(`Новий масив позитивних чисел ${positiveNumbers} з масиву  ${arr6}`);

// Task#17
const arr7 = [1, -3, 5, 6, -7, 8, 9, -11];
const evenNumbers = arr7.filter((item) => item % 2 === 0);
console.log(`Новий масив парних чисел ${evenNumbers} з масиву  ${arr6}`);

// Task#18
const arr8 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const newString = arr8.filter((item) => item.length > 5);
console.log(`Новий масив з строк ${newString} з масиву  ${arr8}`);

// Task#19
const arr9 = [1, 2, [3, 4], 5, [6, 7]];
const arrayOnly = arr9.filter(element => Array.isArray(element));
console.log(`${arrayOnly}`);

// Task#20
const arr10 = [5, -3, 6, -5, 0, -7, 8, 9];
const negativeNumbers = arr10.filter((item) => item < 0);
console.log(`В масиві ${arr10} негативних чисел ${negativeNumbers.length} штук`);