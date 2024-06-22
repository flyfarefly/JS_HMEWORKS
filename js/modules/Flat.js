class Flat {
  constructor() {
    this.residents = []; // Пустий масив жителів при створенні квартири
  }

  addNewResident(person) {
    this.residents.push(person); // Додаємо жителя до масиву
  }
}
export default Flat;
