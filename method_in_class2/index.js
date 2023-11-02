
let user = {
    name: 'Ivan',
    set birthYear(year) {
      const currentYear = new Date().getFullYear();
      this.age = currentYear - year;
    }
  };