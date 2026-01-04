function Person(firstName, lastName) {
  this.fname = firstName;
  this.lname = lastName;
}

const person1 = new Person("Shahrukh", "Khan");
const person2 = new Person("Amir", "Khan");

person1.getFullName = function () {
  console.log(`${this.fname} ${this.lname}`);
};

// Here we are adding a new function to the person1 object.
// Which is only available for the person1 object.
// So, here person2.getFullName() wont work

// If we want add something to the Person function which may be available to every instance of Person
// We would need prototype..

// every function has a prototype in which I can add many thing to that function...lets see........................

Person.prototype.getFullNameFromProto = function () {
  console.log(this.fname + " --- " + this.lname);
};

person1.getFullNameFromProto();
person2.getFullNameFromProto();

export default Person;
