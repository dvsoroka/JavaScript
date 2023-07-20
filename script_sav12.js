//Difference between the "var" and "let" Keywords
// var catName = "Quincy";
// var quote;

// var catName = "Beau";

// function catTalk() {
//     "use strict";
//     catName = "Oliver";
//     quote = catName + " says Meow!";
// }
// catTalk();

let catName = "Quincy";
var quote;
// let catName = "Beau";
catName = "Beau";
function catTalk() {
    "use strict";
    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk();

// Compare Scopes of "var" and "let" Keywords
// function checkScope() {
//   "use strict";
//   var i = "function scope";
//   if (true) {
//     var i = "block scope";
//     console.log("Block scope i is: ", i);   // Block scope i is:  block scope
//   }
//   console.log("Function scope i is: ", i);  // Function scope i is:  block scope
// }
// checkScope();

// with "let":
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);   // Block scope i is:  block scope
    }
    console.log("Function scope i is: ", i);  // Function scope i is:  function scope
  }
  checkScope();

  // Hoisting with 

  function checkScope() {
    "use strict";
    //let i = "function scope";
    if (true) {
      var i = "block scope";
      console.log("Block scope i is: ", i);   // Block scope i is:  block scope
    }
    console.log("Function scope i is: ", i);  // Function scope i is:  block scope
  }
  checkScope();

   // No hoisting with "let"

   function checkScope() {
    "use strict";
    //let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);   // Block scope i is:  block scope
    }
    console.log("Function scope i is: ", i);  // Uncaught ReferenceError: i is not defined at checkScope (script.js:58:42)
  }
  checkScope();