var Person, person, anotherPerson, Developer, developer;

Person = function(name) {
    this.name = name;
};

console.log("Person.prototype : \r\n");
console.log(Person.prototype);

console.log("Person.prototype.constructor : \r\n" );
console.log(Person.prototype.constructor);

//In previous lesson wi create constructor on prototype, here vice versa
Person.prototype.greet = function() {
    console.log("Hallo my name is " + this.name);
};

person = new Person("Jack");
console.log(person.name);
person.greet();

anotherPerson = new Person("Bruce");
console.log(anotherPerson.name);
anotherPerson.greet();




//check if Prototype
console.log("anotherPerson instanceof Person : \r\n");
console.log(anotherPerson instanceof Person);

console.log("Person.prototype.isPrototypeOf(anotherPerson) : \r\n");
console.log(Person.prototype.isPrototypeOf(anotherPerson)); 

console.log("anotherPerson.__proto__ : (Not Stabile) \r\n" + anotherPerson.__proto__);

//inharitance

Developer = function (name, skills) {
   Person.apply(this, arguments);
   this.skills = skills || []; 
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

console.log("Developer.prototype : \r\n");
console.log(Developer.prototype);

console.log("Developer.prototype.constructor : \r\n" );
console.log(Developer.prototype.constructor);

developer = new Developer("John", ["C#", "Java", "HTML"]);

developer.greet();

console.log("developer.skills : \r\n");
console.log(developer.skills);

// own methods

Person.prototype.toString = function() {
    return this.name;
};

Person.prototype.toString = function() {
    return this.name;
};


console.log("developer.toString : \r\n");
console.log(developer.toString());

console.log("developer.valueOf : \r\n");
console.log(developer.valueOf());
console.log(+developer);

var classOf = function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

console.log(classOf(""));
console.log(classOf(5467765));
console.log(classOf({}));
console.log(classOf(function () {}));    
console.log(classOf(true));
console.log(classOf(/\d/));
