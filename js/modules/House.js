class House {
  constructor(maxNumberFlats) {
    this.flats = []; // Пустий масив квартир при створенні будинку
    this.maxNumberFlats = maxNumberFlats; // Максимальна кількість квартир в будинку
  }

  addNewFlat(flat) {
    if (this.flats.length < this.maxNumberFlats) {
      this.flats.push(flat);
    } else {
      console.log('Досягнуто максимальної кількості квартир у будинку.');
    }
  }
}

export default House;
