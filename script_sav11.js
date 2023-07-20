// Profile Lookup 
var contacts = [
    {
        "firstName": "Akira",
        "lastname": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Bronwnie Points"]
    },
    {
        "firstName": "Harry",
        "lastname": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastname": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastname": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
]


function lookUpProfile(name, prop) {
    for (var i=0; i < contacts.length; i++) {
          if (contacts[i].firstName === name) {
             return contacts[i][prop] || "No such property";
             
//          if (contacts[i][prop]) {
//            return contacts[i][prop];
//           } else return "No such property";
          }
    }
         return "No such contact";
}


// Change these values to test your function
var data = lookUpProfile("Sherlock", "likes");

console.log(data);

// Generate Random Fractions 
function randomFraction() {

    return Math.random();
}
console.log("Random decimal fraction:", randomFraction());


// Generate Random Whole Numbers 
var randomNumberBetween0and19 = Math.floor(Math.random() * 20); 

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
console.log("Random whole number:", randomWholeNum());

// Generate Random Whole Number within a Range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

let rand = ourRandomRange(5, 15);
console.log(rand);

// Use the parseInt Function 
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));    // 56 
console.log(typeof(convertToInteger("111010")));    // number

// Use the parseInt Function with Radix

function convertToInteger(str) {
    return(parseInt(str, 2))        // 2 is a radix
     
}
console.log(convertToInteger("10011"));  // 19

// Use the Conditional (Ternary) Operator
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
 //   if (a === b) {
 //       return true;
 //   }
 //   else {
 //       return false;
 //   }
    return a === b ?  true :  false;   // equals to "return a === b;"
}
console.log(checkEqual(1, 2));

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10)); 
console.log(checkSign(-7));
console.log(checkSign(0.0));