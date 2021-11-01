/* You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. 
  If you think you're adding two numbers, but one is actually a string, the results can be unexpected.
  Type errors can lurk in calculations or function calls.
  
  JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. 
  Note that in JavaScript, arrays are technically a type of object.*/

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});

// Challenge

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);
