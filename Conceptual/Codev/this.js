// 4 rules...

// 1. Implicit binding...

const person = {
  name: "Someonee...",
  printTheName: function () {
    console.log(`This is ${this.name}`);
  },
};

person.printTheName(); //

//2. implicit binding

function printSomething(name) {
  console.log(`This is ${this.name}`);
}

printSomething.call(person);

function printSomethingMore(somethingMore) {
  this.something = somethingMore;
  console.log(this.something);
}

const somethingMore1 = new printSomethingMore("Blah Bkah,,,");

console.log(somethingMore1);
