`use strict`;

 // #Part1
 const user= {} ;
 user.year = prompt(`Введіть ваш рік народження`);
 console.log( user.year, typeof user.year)
   if ( user.year === null) {
    alert(`Шкода, що ви не ввели свій рік народження!`);
    } else {
            if (isNaN(Number(user.year))) {
    alert('Напишіть число, будь ласка!');
            } else if (user.year > 2024 || user.year < 1900){
                console.log ( `Ви ввели не коректне значення`);
                    } else {

                user.hobby = prompt(`Введіть ваш улюблений вид спорту`);

                if ( user.hobby === null) {
                    alert(`Шкода, що ви не ввели ваш улюблений вид спорту`);
                } else if (typeof user.hobby !== `string`) {
                    alert('Введіть вид спорту, будь ласка!');
                } else {

                user.age = 2024 - Number(user.year);
                    console.log (user.age, typeof (user.age));

                    user.city = prompt(`Місто, в якому ви живете?`);
                        if ( user.city === null) {
                          alert(`Шкода, що ви не ввели міста в якому живете!`);
                                 } else if (typeof user.city !== `string`){
                            alert('Напишіть назву міста, будь ласка!');
                                       } else if (user.city === "Київ" ) {
                                     user.country = 'Україна';
                                      console.log(`Тобі ${user.age} років. Ти живеш у місті ${user.city} столиці ${user.country} `);
                                    } else if ( user.city === "Вашингтон") {
                                      user.country = 'Сполучені Штати Америки';
                                      console.log(`Тобі ${user.age} років. Ти живеш у місті ${user.city} столиці ${user.country} `);
                                    }  else if ( user.city === "Лондон") {
                                        user.country = 'Великобританія';
                                        console.log(`Тобі ${user.age} років. Ти живеш у місті ${user.city} столиці ${user.country} `);
   } else {

         console.log(`Тобі ${user.age} років.Ти живеш у місті ${user.city}`);

     }
     console.log (user);
            }}
       alert(`Cпробуй ще!`);
   }



