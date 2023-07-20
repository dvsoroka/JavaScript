var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x  // x = 3.6
var y = voxel.y  // y = 7.4
var z = voxel.z  // z = 6.54

const {x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTmrw1(avgTemperatures) {
    "use strict";
//    const tempOfTomorrow = undefined;   // change this line
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
    
}

console.log(getTempOfTmrw1(AVG_TEMPERATURES));   // should be 79

// 

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getTempOfTmrw(forecast) {
    "use strict";

//    const maxOfTomorrow = undefined;
    const {tomorrow: {max: maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(getTempOfTmrw(LOCAL_FORECAST));

// Use Destructuring Assignment to Assign Variables from Arrays

const [z1, x2] = [1, 2, 3, 4, 5, 6];
console.log(z1, x2);

const [ zz, xx, , x4] = [1, 2, 3, 4, 5, 6];
console.log(zz, xx, x4);        //  1 2 4

// to switch the places of variables

let aa = 8, bb = 6;
(() => {
    "use strict";
    [aa, bb] = [bb, aa];
})();

console.log('a = ', aa);
console.log('b = ', bb); 

// Use Destructuring Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

//    const arr = [, ,...list];       //   [empty × 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [ , , ...arr] = list;
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    m3dian: 34.54,
    mode: 23.84,
    min: -0.75,
    average: 35.85
};
const half = (function() {
//  return function half(stats) {
//      return (stats.max + stats.min) / 2;
    return function half({ max, min }) {
        return (max + min) / 2;
    };
})();
console.log(stats);
console.log(half(stats));

// Create Strings using Template Literals

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

// Challenge

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
//    const resultDisplayArray = null;
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray;
}

/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning>no-var</li>"`,
 *   `<li class="text-warning>var-on-top</li>"`,
 *   `<li class="text-warning>linebreak</li>"`,]
 **/
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

// Write Concise Object Literal Declarations Using Simple Fields

const createPerson = (name, age, gender) => {
    
    return {
        name: name,
        age: age,
        gender: gender
    };
};

console.log(createPerson("Zodiac Hasbro", 56, "male"));

const createPerson1 = (name, age, gender) => ({name, age, gender});

// Write Concise Declarative Functions

const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

const bicycl = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
  };
  
  bicycl.setGear(3);
  console.log(bicycl.gear);   

// Use class Syntax to Define a Constructor Function
// old way:
var SpaceShuttl = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus1 = new SpaceShuttl('Jupiter');

console.log(zeus1.targetPlanet);

// new way:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
};
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

// Vegetables

function makeClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// Use getters and setters to Control Access to an Object

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class Thermostat {
      constructor(temp) {
        this._temp = 5/9 * (temp - 32);
      }
      get temperature(){
        return this._temp;
      }
      set temperature(updatedTemp){
        this._temp = updatedTemp;
      }  
    }

    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature; 
console.log(temp);


// Understand the Difference Between impport and require
import { capitalizeString } from "./string_function";
const cap = capitalizeString("hello!");

console.log(cap);  


// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("Что вы хотите узнать о пользователе?", "name",);
  
//   // доступ к свойству через переменную
//   alert( user[key] ); // John (если ввели "name")


// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       // "this" - это "текущий объект".
//       alert(this.name);
//     }
  
//   };
  
//  user.sayHi(); // John

 // function sayHi() {
 ////    "use strict";
 //   console.log(this);
 // }
  
 // sayHi(); // Window or Global or, in case "use srict" - undefined

//   function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//  console.log("ref:this:", user.ref.name ); 
