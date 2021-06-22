/*
Arrays: Problem 1
Module 3: JavaScript
Write a JavaScript function that takes in two parameters, an array and a number (n), and 
return the first n elements of that array.
Example: If I pass in an array and the number 2, your function returns the first
 2 elements in that arrays.
*/

/*
-- create a array variable
-- create a function that loops through the array.
-- return the function and grab the first 2 indexes.

*/
let array = [2, 4, 7, 9]

function myFunction(arr, n) {
    for (var i = 0; i < array.length; i++) {  // loop through the array.  incrementing by 1.
          return array.slice(0, 2) //use slice to grab the first 2 indexes
    }
  
    
}

console.log(myFunction(array))