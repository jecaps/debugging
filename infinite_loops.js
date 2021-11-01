/* The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. 
  Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants. */

/* 
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
*/

// Challenge

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
myFunc();
