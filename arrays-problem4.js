
// Arrays: Problem 4
// Module 3: JavaScript
// Write a JavaScript program to remove duplicate items from 
// an array (consider case sensitivity).
// Example array: [1,2,2,4,5,4,7,8,7,3,6]
/*
-- 7 different ways.  
-- using indexOf() and filter()
-- create a function with the one param
-- use the .filter() method to grab value and index. 
-- use indexOf() to see which index is different from it's indexOf value.
*** consider case sensitivity?  as if it was a string?
*/
let array = [1,2,2,4,5,4,7,8,7,3,6];

function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
  
}
console.log(removeDuplicates(array));