`use strict`;
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const keyLength = 16;

const generateKey = function (length, characters) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);

        result += characters[randomIndex];

    }
    return result;
}

const generatedKey = generateKey(keyLength, characters);
console.log(`Згенерований ключ: ${generatedKey}`);