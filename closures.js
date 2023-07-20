// https://www.youtube.com/watch?v=1S8SBDhA7HA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd

// Lexical Scope defines how variables are resolved in nested functions.

// Nested (child) functions have access to the scope of their parent functions

// This is often confused with closure, but lexical scope is only an important part of closure.

// w3schools: "A closure is a function having access to the parent scope, even after the parent function has closed"

// A clorure is created when we define a function, not when a function is executed.

// global scope
let x = 1;

const parentFunction = () =>  {
    // local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

//    childFunction();
    return childFunction;
}

const result = parentFunction();
console.log(result); 

result();
result();
result();
console.log(x);
// console.log(myValue); // reference error, private variable // Uncaught ReferenceError: myValue is not defined

//console.log(parentFunction());

// IIFE (Immediately Invoked Function Expression)
const privateCounter = (() => {       // I'm going to set it equal to an arrow function but I'm going to put that arrow function inside parantheses 
    let count = 0;                    // and then after I have this initial definition inside here I'm going to   
    console.log(`Initial value: ${count}`);
    return () => { count += 1; console.log(count) };
})();                               // and then after I have this initial definition inside here I'm going to call it into action immediately by putting the parenthesis operators right after it and so  
                                    // this will call this function into action immmediately and that is an immediately invoked function expression.
                                    // I'm going to set count equal to 0; and then I'm going to log to console a template literal that says `Initial value: ${count}`
                                    // and after that I'm going to return an anonymous function and here I'm going to set the { count += 1; console.log(count) }
                                    // so we'll increment it by one and then I'm going to log the value of "count" 
                                    // and after that I'll go ahead and save the function
                                    // and we see in the console I have initial value equal to 0.
                                    // Why did that happen, - because this function was already invoked. 
                                    // It's an immediately invoked function 
privateCounter();
privateCounter();
privateCounter();
/* https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures */