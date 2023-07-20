// https://www.youtube.com/watch?v=-xqJo5VRP4A&t=68s
// let i = 1;

// const fun1 = () => {
//   console.log(i); 
// }

// fun1()      // 1

// if (true) {
//     let i = 1;

//     const f1 = () => {
//     console.log(i); 
//     }
// }

// f1()      //  Uncaught ReferenceError: f is not defined


// let f;
// if (true) {
//     let i = 1;
//     f = () => {
//         console.log(i);
//     }
// }
// console.dir(f);

// f();

let f = () => {
    let i = 1;                // so now this variable "i" is inside this block which is this function 
    let j = 2;
    return () => {             // return an anonymous function
        console.log(i);       // and this "return" returns a function that can use variable "i" from outer scope which is available for now,
//       console.log(j);
    }                         // however, what if i call f(), what would happen?
 };

 f();           // when I call this f() nothing happens but it returns the inner function; lets look at it with console.dir(f());
 console.dir(f());

 // closure inside a loop

 for (let i=0; i<3; i++) {
    const f = () => {
        console.log(i);
    }
    f();
 }

 /* Now let's try run it outside of this scope, 
    how do I do that? If I wrap this whole thing with setTimeout(), (setTimeout means whatever I'm passing in inside the function, - run it after
    a specified amount of time, so it won't execute immediately, only after given amount of time), - as the second argument I can say: run it 
    after  1000 milliseconds:
     */
for (let i=0; i<3; i++) {
    setTimeout( () => {
        console.log(i);
    }, 1000);
//    f();  // i don't need to execute it now because it runs it  after this 1 second  
}
console.log('after the loop');

// Now let's change this from "let" to "var":

for (var i=0; i<3; i++) {
    setTimeout( () => {
        console.log(i);
    }, 1500);
}
console.log('after the loop with "var" ');



// https://www.youtube.com/watch?v=71AtaJpJHw0&t=649s

var passed = 3;

var addTo = function () {
    var inner = 2;
    return passed + inner;
};

console.dir(addTo); 

// For-loop wuth "var" fixed with IIFE
for (var i=0; i<3; i++) {
  ((i) => { 
    setTimeout( () => {
        console.log(i);
    }, 2000);
  })(i);
}
console.log('after the loop with "var" in IIFE');

/*Here is another real-life example of closure "misbehaving", from one of my projects. Let's say you have 25 buttons, in an array, and you want to assign a click event on each one to call a function with the button's number as an argument. If you do it like this:
*/
for(var i = 0; i < 25; i++) {
    button[i].addEventListener('click', () => {
        buttonClick(i);
    });
}

/*all of the buttons call buttonClick(25) when clicked. If you change var to let, it works fine. And if you want to use var, you have to define another function and perform addEventListener inside of it. At first, this seems like a very odd behaviour - I lost a whole day before I figured it out... If only I saw your video earlier, it would have made everything clear! 

Thank you for explaining it in such clear terms!*/