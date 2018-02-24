var Person, person, anotherPerson;

Person = function(name) {
    this.name = name;
};
//In previous lesson wi create constructor on prototype, here vice versa
Person.prototype.greet = function() {
    console.log("Hallo my name is " + this.name);
};

person = new Person("Jack");
console.log(person.name);
person.greet();

anotherPerson = new Person("Bruce");
console.log(anotherPerson.name);

console.log(Person.prototype);

//check if Prototype
console.log(anotherPerson instanceof Person);