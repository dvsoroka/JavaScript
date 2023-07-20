// Example
var ourArray =["John", 23];

// Only change code below this line
var myArray = ["Quincy", 1];

var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Bulls", 23], ["White Sox", 45]];

var ourArray = [50, 60, 70];
var ourData = ourArray[0];  // equals 50

// Setup
var myArray = [50, 60, 70];
var myData = myArray[1];  // equals 60
console.log(myData);

var ourArray = [18, 64, 99];
ourArray[1] = 45; //  ourArray now equals [18, 45, 99]

var myArray = [18, 64, 99];
myArray[0] = 45;
//console.log(myArray); 

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[0][0]; // equals 1
let newData = myArray[2][1]; // equals 8

newData = myArray[3][0][2]; // equals 12

newData = myArray[3][2]; // equals 14

// push()

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); 
// myArray now equals [["John", 23], ["cat", 2], ["dog", 3]]

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();


// shift() removes first element of the array

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();  //  ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
 //  ourArray now equals ["Happy", "J", "cat"]
console.log(ourArray);


myArray = [["John", 23], ["dog", 3]]
myArray.shift();
myArray.unshift(["Paul", 35]);
// console.log(removedFromMyArray);
console.log(myArray);

