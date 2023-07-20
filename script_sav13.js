// Declare a Read-only Variables with the "const" Keyword 
function printManyTimes(str) {
    "use strict";

    var sentence = str + " is cool!";
 //   const sentence = str + " is cool!";

    sentence = str + " is amazing!";
    
    for (var i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }

}
printManyTimes("freeCodeCamp")

// Mutate an Array Seclared with "const"
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

//  s = [2, 5, 7];  // script.js:22 Uncaught TypeError: Assignment to constant variable. at editInPlace (script.js:22:7)  at script.js:25:1
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace(); 
console.log(s);  //  [2, 5, 7]

// Prevent Object Mutation with object.freeze

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);
  
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

// Use Arrow Functions to Write Concise Anonymous Functions
//  var magic = function() {
//   return new Date();
//  };

//  console.log(magic());

// Shorter version : 
// var magic = () => {
//  return new Date();
// };


// Even more shortened:
let magic = () => new Date();
console.log(magic());

// Write Arrow Functions with Parameters
// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };



const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); // [16, 1764, 36]

// Default Parameters (with Immediately Ivoced Function Expression example)

const increment = (function() {
// return function increment(number, value) {   
  return function increment(number, value = 1) {  // here we are adding the default value for the second argument
    return number + value;
  };
}) ();

console.log(increment(5, 2));
console.log(increment(5));          // here the default value of the second argument will be used

// Use the Rest Operator with Function Parameters

//  IIFE - immediately invocatin fumction expression

const sum3 = (function() {
    return function sum(x, y, z) {
      const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum3(1, 2, 3));

// IIFE with varios number of parameters

const sum = (function() {
//  return function sum(x, y, z) {
  return function sum(...args) {
//      const args = [x, y, z];
      return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4, 5, 6, 7));


// Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = arr1; // change this line
  arr1[0] = 'potato';
})();
console.log(arr2);

// with ... it will be another object in memory but with the same values of items:

const array1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let array2;
(function() {
  array2 = [...array1]; // change this line
  array1[0] = 'potato';
})();
console.log("array1: ", array1);
console.log("array2 made with spread operator: ", array2);