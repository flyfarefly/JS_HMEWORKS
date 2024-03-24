`use strict`;


//Task#9
const reverse = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        // const lastElement = arr[arr.length - (1 + i)];
        // arr[i] = lastElement;

        arr [i] = arr[arr.length - (1 + i)];
        arr[arr.length - (1 + i)] = currentElement;

        if (i + 1 === Math.floor(arr.length / 2)) break;
    }
    return arr;
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13]))