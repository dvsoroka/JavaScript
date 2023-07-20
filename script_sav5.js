// Constructing Strings with variables
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

console.log(ourStr);

var myName = "Dima";
var myStr = "My name is " + myName + " and I am well!"
console.log(myStr);

// Appending Variables to Strings

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

console.log(ourStr);

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

//  Find Length of String
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(`length of ${firstName} is `, firstNameLength);

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(`lenght of string "${lastName}" is `, lastNameLength);

// Bracket Notation to Find First Character in String

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
console.log(`First letter of string "${firstName}" is `, firstLetterOfFirstName);

var lastLetterOfLastName = "";
var lastName = "Lovelace";

lastLetterOfLastName = lastName[lastNameLength - 1];
console.log(`Last letter of string "${lastName}" is `, lastLetterOfLastName);

// String Immutality

var myStr = "Jello World";

myStr[0] = "H";   //  Fix Me 
console.log(myStr);
myStr = "Hello World"; 
console.log(myStr);

// Bracket Notation to Find N-th Character in String
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

console.log(secondLetterOfFirstName);

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

// last character

var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

var thirdToLastLetterOfLastName = lastName[lastName.length - 3];
console.log(thirdToLastLetterOfLastName);

// Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result ="";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  console.log(wordBlanks("dog", "big", "ran", "quickly"));
  console.log(wordBlanks("bike", "slow", "flew", "slowly"));
