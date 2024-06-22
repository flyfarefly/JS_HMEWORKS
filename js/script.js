// eslint-disable-next-line import/extensions
import Person from './modules/Person.js';
// eslint-disable-next-line import/extensions
import Flat from './modules/Flat.js';
// eslint-disable-next-line import/extensions
import House from './modules/House.js';

const person1 = new Person('James Smith', 'male');
const person2 = new Person('Julia Smith', 'female');
const person3 = new Person('Vincent Smith', 'male');
const person4 = new Person('James Roberts', 'male');
const person5 = new Person('Julia Roberts', 'female');
const person6 = new Person('Vincent Roberts', 'male');
const person7 = new Person('James Hitchcock', 'male');
const person8 = new Person('Julia Hitchcock', 'female');
const person9 = new Person('Vincent Hitchcock', 'male');

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();
const flat5 = new Flat();
const flat6 = new Flat();

flat1.addNewResident(person1);
flat1.addNewResident(person2);
flat2.addNewResident(person3);
flat3.addNewResident(person4);
flat3.addNewResident(person5);
flat4.addNewResident(person6);
flat4.addNewResident(person7);
flat5.addNewResident(person8);
flat6.addNewResident(person9);

const house = new House(4); // Максимальна кількість квартир

house.addNewFlat(flat1);
house.addNewFlat(flat2);
house.addNewFlat(flat3);
house.addNewFlat(flat4);
house.addNewFlat(flat5);
house.addNewFlat(flat6);

console.log(house.flats);
console.log(house);
