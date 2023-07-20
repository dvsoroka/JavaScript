// Iterate with While Loops
var myArray = [];
var i = 0;

while (i < 5) {
     myArray.push(i);
     i++;
}
console.log(myArray);

// Iterate with For Loops

var ourArray = [];

for (var i = 1; i < 6; i++) {
    ourArray.push(i);
}
console.log(ourArray);
console.log('i = ', i); // i =  6   variable "i" penetrated to the global scope with the boundary value!

// Only change code below this line

var myArray = [];

for (let k = 11; k < 27; k++) {         
    if (k === 14) {
        continue;
    } else if ( k == 25) {
        break;
    } else if ( k == 21 ) {
        continue;
    }

    myArray.push(k);
}

console.log(`myArray: `, myArray);  // [10, 11, 12, 13, 14]
//console.log(k);             // script.js:30 Uncaught ReferenceError: k is not defined  - variables declared with "let" keyword does not escape the loop scope.


// Iterate Odd Numbers with a For Loop 
// For Even Numbers:
var arrayOfEven = [];
for (var i = 0; i < 10 ; i += 2) {
    arrayOfEven.push(i);
}

console.log('Array of even numbers: ', arrayOfEven, 'final value of the for-variable = ', i);

// For Odd numbers:

var arrayOfOdds = [];
for (var i = 1; i < 10; i += 2) {
    arrayOfOdds.push(i);
}

console.log(arrayOfOdds);

// Count Backwards with a For Loop
var ourBackwardAray = [];

for (var i = 10; i > 0; i -= 2) {
    ourBackwardAray.push(i);
}
console.log("Backward array: ", ourBackwardAray);

var backwardOdds = [];
for (let i = 9; i > 0; i -= 2) {
    backwardOdds.push(i);
}
console.log("Backward array of odd nymbers ", backwardOdds);

// Iterate Through an Array with a For Loop
var ourArr=[9, 10, 11, 12];
var ourTotal = 0;

for (i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log("Total sum of the array elements: ", ourTotal);

// Nesting For Loops 

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
//            product = product * arr[i][j];
            product *=  arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log("Product of multiplication of all array elements: ", product)   // 5040

// Iterate with Do...While Loops 
var myArray = [];
var i = 10;

// While Loop

while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(i, myArray);    // 10 []


// Do... While Loop
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(i, "with Do..While loop: ", myArray);   // 11 [10]