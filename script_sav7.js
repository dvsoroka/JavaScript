//  'use strict'

//  Shopping List

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// Functions https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V (51:41)

function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

// Parameters are variables that act as a placeholders for the values that are to be input to a function when it is called.
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

ourFunctionWithArgs(10, 5); // Outputs 5

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5); // Outputs 15

// Global Scope and Functions. Scope refers to the visibility of variables.
// Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;  // It is possible to set a variable without using the "var" keyword;  If we have the "var" heyword here, this would be scoped to this function
}                    

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();  // myGlobal: 10 oopsGlobal: 5

// Local Scope and Functions. Variables which are declared within functions as well as the function parameters have local scope.
function myLocalScope() {
    var myVar =  5;     // we've declared this variable inside a function. 
    console.log(myVar); // So, this variable, myVar is only visible inside the function.
}
myLocalScope();

console.log(myVar); // script.js:59 Uncaught ReferenceError: myVar is not defined
