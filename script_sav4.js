// Strings

var firstName = "Alan";
var lastName = "Turing";

var fullName = `${firstName} ${lastName}`; // using a template string
console.log(fullName);

let myStr1 = "I am a \"double quoted\" string inside \"double quotes\"";     // Eacaping Literal quotes in Strings
console.log(myStr);

myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>'; 
console.log(myStr);

myStr1 = `'<a href="https://www.freecodecamp.org/ target="_blank">Link</a>'`;
console.log(myStr);

/*****
 CODE   OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
 *****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr);

var ourStr = "I come first " + "I come second.";
console.log(ourStr);

var ourStr = "I come first ";
ourStr += "I come second";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."
console.log(myStr);