// run `node index.js` in the terminal
const person = {
  fullName: function (city, country) {
    console.log(
      this.firstName + ' ' + this.lastName + ',' + city + ',' + country
    );
  },
};

const person2 = {
  firstName: 'John',
  lastName: 'Dave',
};

person.fullName.call(person2, ['Oslo', 'Norway']);
