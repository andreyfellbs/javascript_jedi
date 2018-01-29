//object literal
var person = {
    name: "Sorax",
    age: 20,
    gender: "male",
    sayHi: function() {
        return "Hello!!!";
    }
};

// person.age = 45;
// person.userId = 573654;

// //Property Access Expression
// console.log(person.name);
// console.log(person.gender);

// console.log(person['age']);

// console.log(person);

// console.log(person.sayHi());

//Constructor

// var obj = new Object();
// obj.property = "value";

//static method create of class object

var obj = Object.create({ x: 4, y: 5 }); //null

console.log(obj);

//x and y are property of prototype

//if we add property to obj 

obj.x = 20;

console.log(obj.hasOwnProperty("x"));
console.log(obj.y);
console.log(obj.x);

//for deleting property from object there is unary operator delete

delete obj.x;
console.log(obj);