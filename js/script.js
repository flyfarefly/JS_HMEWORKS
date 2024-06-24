// eslint-disable-next-line import/extensions
import Student from './Student.js';

const s = new Student('John', 'Smith', 1975);
s.absent();
s.absent();
s.present();
s.setGrade(81);
s.present();
s.setGrade(96);
s.present();
s.setGrade(82);

console.log(s.avgGrade);
console.log(s.avgAttendance);
console.log(s.summary());
console.log(s.age);
console.log(s);
