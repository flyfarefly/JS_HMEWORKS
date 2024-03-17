`use strict`;
const n = + prompt(`Введіть число`);
let k = 0; // Кількість дільників
let i = 0; // Дільники
let s = 0; // Сума дільників

if (Number.isInteger(n)) {
    for (; i <= n; i++) {
        if (n % i < 1) {
            console.log (`Nan`);

            if (n % i === 0) {
                console.log (`Nan`);

            }else {
                console.log (i)
            }
        }
    }
    console.log(`Парних дільників ${k}, а їх сума дорівнює ${s}`);
}