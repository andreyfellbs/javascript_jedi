//object is a reference type

var a = { x: 10 },
    b = { x: 20 };
a = b;
b.x = 15;
console.log(a.x);

//Javascript has Prototype inheritance only

var objectProto = {
    name: "Sorax"
};

var newObject = Object.create(objectProto);
console.log(newObject.name);

var person = {
    name: "Andre",
    gender: "male",
    age: 46,
    greet: function() {
        console.log("Hi my name is " + this.name);
    }
};

var Person = {
    constructor: function(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        return this;
    },
    greet: function() {
        console.log("Hi my name is " + this.name);
    }
};

var nextPerson = Object.create(Person).constructor("Sveta", "female", 44);
console.log(nextPerson.name);
nextPerson.greet();

//Class this is Prototype
//Method create is new method, using is cool

//determine if prototype of

console.log(Person.isPrototypeOf(nextPerson));