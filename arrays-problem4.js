
// Arrays: Problem 4
// Module 3: JavaScript
// Write a JavaScript program to remove duplicate items from 
// an array (consider case sensitivity).
// Example array: [1,2,2,4,5,4,7,8,7,3,6]

let array = [1,2,2,4,5,4,7,8,7,3,6];

function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
  
}
console.log(removeDuplicates(array));