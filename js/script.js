// eslint-disable-next-line import/extensions
import Student from './Student.js';

const s = new Student('John', 'Smith', 1975);
const b = new Student('Jane', 'Smith', 1976);
s.absent();
s.absent();
s.present();
s.setGrade(81);
s.present();
s.setGrade(96);
s.present();
s.setGrade(82);

b.absent();
b.absent();
b.present();
b.setGrade(82);
b.present();
b.setGrade(94);
b.present();
b.setGrade(83);

console.log(s.avgGrade);
console.log(s.avgAttendance);
console.log(s.summary());
console.log(s.age);
console.log(s);

console.log(b.avgGrade);
console.log(b.avgAttendance);
console.log(b.summary());
console.log(b.age);
console.log(b);
