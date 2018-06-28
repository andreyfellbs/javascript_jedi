var array = [ "Some string", "Another string",  "Third string", "Sorax"]; //"Js",

var numbers = [1, 2, 3, 4, 5, 5, 6, 7];

console.log("forEach :  \r\n");

array.forEach( (element, index, array) => array[index] = element.toUpperCase());
console.log("array[index] = element.toUpperCase() \r\n");
console.log(array);

console.log("map((element) => element.toLowerCase() \r\n");
var mapedArray = array.map((element) => element.toLowerCase());
console.log(mapedArray);

console.log("array.filter( predicate fn(element, index, array) ) \r\n");
var filterdArray = array.filter((element, index, array) => element.indexOf('O') === -1);
console.log(filterdArray);

console.log("array.every(predecate fn(element, index, array)) \r\n"); ;
console.log(array.every((element, index, array) => element.length > 4 ));

console.log("array.some(predecate fn(element, index, array)) \r\n"); ;
console.log(array.some((element, index, array) => element.indexOf('X') !== -1 ));

console.log("array.some(predecate fn(element, index, array)) \r\n"); 
console.log(array.some((element, index, array) => element.indexOf('Z') !== -1 ));

console.log("array.reduce or reduceRight(callBackFn(previousValue, element, index, array))  \r\n"); 
console.log(numbers.reduce((previousValue, element, index, array) => previousValue + element));

console.log("array.indexOf  array.lastIndexOf \r\n"); 
console.log(numbers.indexOf(5));
console.log(numbers.lastIndexOf(5));