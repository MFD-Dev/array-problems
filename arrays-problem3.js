// Arrays: Problem 3
// Module 3: JavaScript
// Write a JavaScript program to sort the items of an array.
// Example array: var myArray = [-3,8,7,6,5,-4,3,2,1];
/*
-- create a function 
-- use the sort() method
*/
var myArray = [-3,8,7,6,5,-4,3,2,1];

myArray.sort(function(a, b){return a - b});

console.log(myArray)
// console.log(myArray.sort());