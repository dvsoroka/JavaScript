// Shopping List



var a = 12;

function f() {
    var b = 42;
//    console.log(b);
    console.log(`inner variable b from inner context = ${b}`);
    console.log(`outer variable a from inner context = ${a}`);
}

f();

console.log(`outer variable form outer context a = ${a}`);
//console.log(`inner variable b from outer context = ${b}`);
// https://www.youtube.com/watch?v=RPuFz93Gvpk
//  СЧЁТЧИК - функция, которая с каждым новым вызовом будет возвращать новое значение, которое на единицу больше чем предидущее

var count = 0;

function countr() {
    count++;

    return count;
}

countr();
console.log(count);
countr();
console.log(count);

/* Замыкание возникает, когда мы из одной функции возвращаем новую функцию. Тогда мы говорим, что 
новая функция замкнута на область видимости родительской фунции.

*/

function Counter() {
    var count = 0;

    return function() {    // Эта функция замкнута на область видимости родителя (функции Counter())
        count++;

        return count;
    }
}

var counter = Counter();      // Мы вызываем родительскую функцию и создаётся наш счётчик, сто это значит? - функция, которую возвращает
                            //  Counter(), она сохраняется в переменную и она замкнута на ту область видимости 
                            // которая возникла. Теперь когда мы вот эту вернувшуюся функцию будем вызывать много раз 
                            // она будет обращаться к той переменной (var count = 0;) которая видна только ей и оттуда считывает значение и туда же его записывает.
console.log(counter());     // 1
console.log(counter());     // 2
console.log(counter());     // 3

                            // При этом если нам нужно создать новый параллельный счетчик, который будет независим от предыдущего, 
                            // - нам достаточно просто еще раз вызвать  Counter() и вот мы получили новый счетчик  
var anotherCounter = Counter();   
                    
console.log(anotherCounter()); 
console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());

/* Каждый раз, при вызове Counter()-а создаётся своя область видимости, 
    в ней есть переменная count но каждый раз она своя. 
    И каждый раз из них возвращается новые функции, которые мы и сохраняем в переменную,
    которую мы вызываем неоднократно. И каждая из этих функций она замкнута на свою область видимости
 */


    function myCounter() {
        var count = 0;
    
        function f1() {    // Эта функция замкнута на область видимости родителя (функции Counter())
            count++;
    
            return count;
        }

        return f1;
    }
    
    var mycounter = myCounter();  
    
    console.log(mycounter());
    console.log(mycounter());
    
    var myOtherCounter = myCounter();
    console.log(myOtherCounter());

    console.log(mycounter());
    console.log(mycounter());
    console.log(mycounter());

    console.log(`my otherCounter = ${myOtherCounter()}`);

    console.log(`my otherCounter = ${myOtherCounter()}`);
    console.log(`my otherCounter = ${myOtherCounter()}`);
    console.log(`my otherCounter = ${myOtherCounter()}`);
    console.log(`my otherCounter = ${myOtherCounter()}`);


    // https://www.youtube.com/watch?v=zL9Q4WaJIBo&t=1522s

    let a1 = 10;

    function f1() {
        console.log(`(global) a1 =`+a1);
    }
    f1();
    a1 = 99;
    f1();

    // **** Example 2 ****

    function f2() {
        let a2 = 33;
        console.log(a2);
    }
    f2();
