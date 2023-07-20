var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());    // "sweater"
console.log(outerWear);     // T-Shirt"

// You can return a value from a function with this "return" statement
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));    // 3

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));      // 25

// Understanding Undefined Value Returned from a Function

var sum = 0;
function addThree() {
    sum = sum + 3;
}

console.log(addThree(4));       // undefined

function addFive() {
//   sum = sum + 5;
     sum += 5;
}

console.log(addFive(3)); //        undefined 

// Assignment with a Returned Value

var changed = 0;

function change(num) {
    return (num + 5) / 3
}

changed = change(10);
console.log(changed);

var processed = 0;

    function processArg(num) {
        return (num + 3) / 5
    }
    
processed = processArg(7);
console.log(processed);

//  Stand in Line  (Queue) 
function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
//    return item;
    return(arr.shift());
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log(`After: ${JSON.stringify(testArr)}`);
console.log(nextInLine(testArr, 7));
console.log(`After: ${JSON.stringify(testArr)}`);

// Booleans

function welcomeToBooleans() {
    return false;
}

welcomeToBooleans(); 

// Use Conditional Logic with If Statements

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
eval = ourTrueOrFalse(true);
console.log(eval);

//  Comparison with the Equality Operator
//val = prompt("enter  the value"); 
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal"
}
//alert(testEqual(val));
console.log(testEqual(10));
3 == 3;     // true
3 == '3';   // true

3 === 3;    // true
3 === '3';   // false

//Practice Comparing Different Value
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal;";
    }
    return "Not Equal;";
}
// Change this value to test
console.log(compareEquality(10, "10"));


// Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 12) {
        return "Not Equal!";
    }
    return "Equal"
}
console.log(testNotEqual(10));

// Comparison with the strict inequality Operator

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Strict Not Equal!";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "over 10";
    }

    return "10 or Under"
}

console.log(testGreaterThan(10));

// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10"; 
}

console.log(testGreaterOrEqual(10));

// Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over"; 
}

console.log(testLessThan(10));

// Comparison with the Less Than Or Equal to Operator

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller or Equal to 24";
    }
    return "More Than 24"; 
}

console.log(testLessOrEqual(10));

// omparisons with the Logical "and" (&&) and Logical "or" (||) Operators
/*
function tesrLogicalAnd(val) {
  
  if (val <= 50) {
    if (val >= 25) {
        return "Yes !";
    }
  }

  return "No";
}

console.log(tesrLogicalAnd(33));
*/

function tesrLogicalAnd(val) {
  
    if (val <= 50 && val >= 25){
        return "Yes !";
    }
  
    return "No !";
  }
  
  console.log(tesrLogicalAnd(37));

  // Comparisons with the Logical "or" (||) Operator
/*
  function tesrLogicalOr(val) {
    if (val < 10) {
        return "Outside";
    }

    if (val > 20) {
        return "Outside";
    }

    return "Inside"
}
*/
function tesrLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside"
}
console.log(tesrLogicalOr(35));

// Else statement
/*
function testElse(val) {
    var result = "";

    if (val > 5) {
      result = "Bigger than 5";
    }

    if (val <= 5) {
      result = "5 or Smaller"  
    }

    return result;
}
*/
function testElse(val) {
    var result = "";

    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller"  
    }

    return result;
}

console.log(testElse(13));

// Else If Statements
/*
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    if (val < 5) {
        return "Smaller than 5";
    }

    return "Between 5 and 10";
}
*/
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

// Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater or equal to 10";
  }
}
// Change this value to test
console.log(orderMyLogic(3));       // Less than 5

// Chaining If Else Statements

function testSize(num) {

    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } 
    return "Huge"
}

console.log(testSize(5));
/* 
Write chained if/else if statements to fulfil the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 25 - return "Huge"
*/

//  Golf Code

var names = ["Hole-in-one!", "Eagle", "Bridie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par -1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {return names [6]}
}

console.log(golfScore(5, 4));    // "Bridie

/* 
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Bridie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"

*/

// Switch Statements
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
          answer = "alpha";
          break;
        case 2:
          answer = "beta";
          break;
        case 3:
          answer = "gamma";
          break;
        case 4:
          answer = "delta";
          break;
    }

    return answer
}

console.log(caseInSwitch(1));

/*
Write a "switch" statement wich tests val and sets the answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

// Change this value to test
console.log(switchOfStuff("5"));

// Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "Hight";
            break;
    }
    return answer;
}

console.log(sequentialSizes(5));

// Replacing If Else Chains with Switch 
/*
function chainToSwitch(val) {
    var answer = "";
    // Only change cosde below this line

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me bu this much!";
    } else if (val === 7) {
        answer = "Ate Nine"
    }

   // Only change code above this line
   return answer;
}
*/
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case "bob": 
          answer = "Marley";
          break;
        case 42: 
          answer = "The Answer";
          break;
        case 1: 
          answer = "There is no #1";
          break;
        case 99: 
          answer = "Missed me by this much!";
          break; 
        case 7: 
          answer = "Ate Nine";
          break;
        }
    

   // Only change code above this line
   return answer;
   
}

console.log(chainToSwitch(99));

// Returning Boolean Values from Functions
/*
function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  }  else {
    return false;
  } 
}
*/
function isLess(a, b) {
    // Fix this code
    return (a < b); 
  }
  
// Change these values to test
console.log(isLess(20, 15));
console.log(isLess(10, 15));

// Returning Early Pattern from Functions

// Setup
function abTest(a, b) {
  // Only change code below this line

  if (a < 0 || b < 0) {
    return undefined;
  } 

  // Only change code above this line
// return Math.pow(Math.sqrt(a) + Math.sqrt(b), 3);     //В JS, для отрицательных чисел квадратный корень вычислить нельзя, поэтому Math.sqrt возвращает NaN. 
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-12, 62));
console.log(abTest(142.5, 360.16));

// Counting Cards

var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":  
    case "Q":
    case "K":
    case "A":  
      count--;
      break;
  }

  var holdbet = 'Hold';
  if (count > 0) {
    holdbet = 'Bet';
  }
 
// return "Change Me"
  return count + " " + holdbet;
 }

 cc(2); cc(3); cc(7); cc('K'); cc('A');
 console.log(cc(4));        // 1 Bet

 count = 0;

 cc(2); cc('K'); cc(10); cc('K'); cc('A');
 console.log(cc(4));        // -2 Hold




function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
//    function() { alert("Вы согласились."); },
//    function() { alert("Вы отменили выполнение."); }
() => alert("Вы согласились."),
() => alert("Вы отменили выполнение.")

  );
// JavaScript the Hard Parts: Closure, Scope & Execution Context 
// https://www.youtube.com/watch?v=XTAzsODSCsM

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

const myNewFunction = outer()   //  myNewFunction = incrementCounter
myNewFunction();
myNewFunction();
myNewFunction();
