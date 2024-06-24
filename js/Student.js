class Student {
  #firstName = null;

  #lastName = null;

  #birthYear = null;

  #grades = [];

  #attendance = [];

  #currentLessonIndex = 0;

  constructor(firstName, lastName, yearOfBirth, lessonsCount = 25) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = yearOfBirth;
    this.#lessonsCount = lessonsCount;
  }

  #setAttendance(bull) {
    if (typeof bull !== 'boolean') throw 'Bull does not exist!';
    this.#attendance[this.#currentLessonIndex] = bull;
    this.#currentLessonIndex += 1;
  }

  present() {
    this.#setAttendance(true);
  }

  absent() {
    this.#setAttendance(false);
  }

  summary() {
    return {
      avgGrade: this.avgGrade,
      avgAttendance: this.avgAttendance,
    };
  }

  get avgGrade() {
    let sum = 0;
    let lessonsWithGrades = 0;
    for (let i = 0; i < this.#currentLessonIndex; i++) {
      if (this.#grades[i] !== null) lessonsWithGrades += 1;
      sum += this.#grades[i];
    }
    return Number(sum / lessonsWithGrades).toFixed(2);
  }

  get avgAttendance() {
    let visitedLessons = 0;
    for (let i = 0; i < this.#currentLessonIndex; i++) {
      if (!this.#attendance[i]) continue;
      visitedLessons += 1;
    }
    return Number(visitedLessons / this.#currentLessonIndex).toFixed(2);
  }

  setGrade(grade) {
    if (typeof grade !== 'number') throw new Error('LessonsCount is invalid');
    if (grade < 0 || grade > 100) throw new Error(`Grade cannot be ${grade}`);
    if (!this.#attendance[this.#currentLessonIndex - 1]) {
      throw new Error(
        `Student ${this.firstName}  ${this.lastName} was absent!`
      );
    }
    this.#grades[this.#currentLessonIndex - 1] = grade;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(str) {
    if (typeof str !== 'string' || str.trim().length < 2)
      throw new Error(`First name ${str} must be at least 2 characters`);
    this.#firstName = str;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(str) {
    if (typeof str !== 'string' || str.trim().length < 2)
      throw new Error(`Last name ${str} must be at least 2 characters`);
    this.#lastName = str;
  }

  set birthYear(year) {
    if (typeof year !== 'number' || year.toString().length < 4)
      throw new Error(`Invalid year ${year} must be at least 4 characters`);
    this.#birthYear = year;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.#birthYear;
  }

  set #lessonsCount(count) {
    if (typeof count !== 'number' || count < 1)
      throw new Error(`Count ${count} must be at least ${count}`);
    this.#grades = new Array(25).fill(null);
    this.#attendance = new Array(count).fill(null);
  }
}

export default Student;
