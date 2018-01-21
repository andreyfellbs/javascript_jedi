// function greet(name) {
//     return "Hello " + name;
// }

// var greet = function(name) {
//     console.log(arguments);
//     console.log(arguments[2]);
//     console.log(arguments.length);
//     return "Hello " + name;
// };

// console.log(greet("Sorax").toUpperCase());
// console.log(greet("Sorax", 34, 35, 6).toUpperCase());
// console.log(greet().toUpperCase());

// var func = function(callback) {
//     var name = "Sorax";
//     callback(name.toLocaleUpperCase());
// };

// func(function(params) {
//     console.log("Hello " + params);
// });

// var func = function() {
//     return function(arg) {
//         console.log(arg);
//     };
// };

// var fu = func();
// fu("Hi");

// func()("Hi you");

var greeting = (function(name) {
    return "Hello " + name;
}("Sorax"));

console.log(greeting);