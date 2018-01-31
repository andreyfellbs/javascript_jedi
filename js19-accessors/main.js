var person = {
    name: "John",
    _age: 20,
    get age() {
        return this._age;
    },
    set age(value) {
        this._age = value < 0 ? 0 : value > 122 ? 122 : value;
    }
};

person.age = 180;
console.log(person.age);
person.age = -10;
console.log(person.age);
person.age = 34;
console.log(person.age);

// each property has attributes: writable, enumerable, configurable
// here is property descriptor object

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

//for definition or redefinition property attributes

Object.defineProperty(person, "gender", {
    value: "male",
    writable: false,
    enumerable: true,
    configurable: true
});

console.log("");

console.log(person.gender);
person.gender = "female";
console.log(person.gender);

console.log("");

for (var property in person) {
    console.log(property);
}

//same

console.log(Object.keys(person));

//there is method:

console.log(person.propertyIsEnumerable("gender"));

//try to redefine property

Object.defineProperty(person, "gender", {
    writable: true
}); //get error Uncaught TypeError: Cannot redefine property: gender

var o = {};

Object.defineProperties(o, {
    x: {
        value: 10,
        writable: false
    },
    y: {
        value: 20,
        writable: false
    },
    r: {
        get: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);

        }
    }
});

o.x = 20; //not changes
console.log(o.r);
console.log("");
//Object extensibility

var obj = {};
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));

obj.x = 2323;
console.log(obj.x);
//but you can add properties to prototype

//same but set attribute configurable of all properties to false
Object.seal(obj);
console.log(Object.isSealed(obj));

//same but also set all properties to read only
Object.freeze(obj);
console.log(Object.isFrozen(obj));