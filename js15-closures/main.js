// //lexical scoping

// var func = function() {
//     var i = 10;
//     return function() {
//         return i;
//     };
// };

// var myFunc = func();

// var anotherFunc = function() {
//     var i = 20;
//     console.log(myFunc()); //or call func()()
// };

// anotherFunc();

// var counter = (function() {
//     var counter = 0;
//     return function(num) {
//         counter = num !== undefined ? num : counter;
//         return counter++;
//     };
// }());

//function is object realization

var counter = function(num) {
    counter.count = num !== undefined ? num : counter.count;
    return counter.count++;
};

counter.count = 0;


console.log(counter());
console.log(counter());
console.log(counter(23));
console.log(counter());
console.log(counter());
console.log(counter(54));
console.log(counter());
console.log(counter());