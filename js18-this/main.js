//this, bind, call, apply

var greet = function(greeting) {
    return greeting + " My name is " + this.name; //person
};

var person = {
    name: "John!",
    greet: greet
};

var anotherPerson = {
    name: "Bob!",
    greet: greet
};


console.log(person.greet());
console.log(anotherPerson.greet());
console.log(greet());
console.log(this);

console.log(anotherPerson.greet.call(person, "Hi!"));
console.log(anotherPerson.greet.apply(person, ["Hi!"]));

var bound = greet.bind(anotherPerson);
console.log(bound("Hello there!"));