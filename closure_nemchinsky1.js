//  'use strict'

//  Shopping List






    // https://www.youtube.com/watch?v=zL9Q4WaJIBo&t=1522s

    let a = 10;

    function f1() {
        console.log(`(global) a = `+a);
    }
 //   f1();
 //    a = 99;
 //    f1();
 //    a = 10;

    // **** Example 2 ****

    function f2() {
        let a = 33;
        console.log(`(local) a = `+ a);
    }
    

// f1();
// f2();
// f1();

    // **** Example 3 ****

    function f3() {
        a = 44;             //  если убрать let, -  в данном случае я не создаю новую локальную переменную
                            // а обращаюсь к глобальной переменной и присваиваю ей новое значение
        console.log(`(local) a = `+a);
    }
// f2();
// f1();
// f3();
// f1();


// **** Иногда переменные нужны снаружи ****

// let count = 0;
// function step() {
//     count++;
//     console.log(count);
// }

// step();
// step();

// Можно возвращать функцию как результат работы другой функции
/* теперь я возьму функцию и помещу весь код внутрь неё
 И теперь у меня есть функция внутри которой есть переменная, и есть другая функция
*/
function fun() {
    let count = 0;
    function step() {
        count++;
        console.log(count);
    }
    return step;
}

let z = fun();
console.log(z);  //  В данном случае функция step() не выполнилась, а просто попала в "return"
z();    // А теперь мы её вызвали и унас создался счетчик "count", 
        // этот счетчик count ни от чего не зависит поскольку он был внутри функции, 
        // к нему никто кроме внутренней функции step() получить доступ не может и по сути 
        // мы сделали "хороший" счётчик, который не "засоряет" общую область видимости, - не создаёт глобалные переменные
        // и ни от кого не зависит
z();
y = fun();
y();

z();
z();
y();

function createStep() {
    let count = 0;
//    return function step() {    // можно сделать эту функцию анонимной : 
      return function () {  

        count++;
        console.log(count);
    }
}       /*    Это замыкание: мы внутри области видимости функции createStep() 
            скрыли (замкнули) наши данные и наши действия над данными таким образом, 
            что к ним больше никто не может получить доступ.
            Когда я выполняю функцию 
                let step1 = createStep(); 
            у меня создался один блок видимости, где лежит какая-то функция и count = 0 
            когда я выполнил второй раз
                let step2 = createStep();
            у меня создался ещё один блок видимости, где снова лежит какая-то функция и еще один счётчик count = 0 
            т.е. я "штампую" блоки видимости, которые не зависят друг от друга, внутри которых есть 
            и "count" свой и своя функция и я могу эти блоки запускать в любой последовательности, - они 
            абсолютно не зависят друг от друга, они изолировны .

https://www.youtube.com/watch?v=71AtaJpJHw0&t=649s       
comment from
Mazdy Soraya
4 года назад (изменено)
It is much simpler, and very easy to understand. 
I've realized that people are confused about closures because they want to understand HOW CLOSURES 
WORK by applying NORMAL function BEHAVIOR MODEL (Many tutorials does 
not help with their explanations and examples, so its not that you are not 
smart ). But closures does not work like normal functions. Why not learn how 
do they work instead? We've all learned NORMAL function behavior, that is 
when you executing normal function, all variables inside are first initialized, 
used, then when function has finished its execution VARIABLES are DESTROYED. 
So that is normal function behavior.Simple,right? We all know that, but - Closures does not work like that. 
So what is closure then? When you have function inside a function it is AUTOMATICALLY a CLOSURE. 
What is the property of the closures?There is only one that you need to take home and understand! 
Again, in NORMAL FUNCTION BEHAVIOR: After function has finished its execution, variables are destroyed. 
Instead, When you have FUNCTION inside a FUNCTION, we now know it is automatically a CLOSURE.  
CLOSURE has this PROPERTY: When Your engine sees function inside a function, it WILL NOT DESTROY data, 
data will remain in memory. Imagine like your engine thinks oh wait, i have function inside a function, 
so this nice dude wants me NOT TO DESTROY variables. So we can access them even after function has finished 
execution. What is use of that property? Consider following  
EXAMPLE:  imagine you have function inside function ( closure ). 
You have OUTER FUNCTION with COUNTER set to 0. 
Then in inner function, because we can access outer function variables 
we want to do the following: Clicking on a button we will increment counter. 
What would happen without closure properties, i.e. if they would behave like normal function? 
Without closure behavior, when we click on a button, 
it will increment counter to 1 and it will remain 1 no matter how many times we click button. 
Why? Because, counter value is lost, 
it is lost because this will be WORKFLOW: 1. OUTER FUNCTION sets counter to 0. 
2. Inner function increments counter so now counter is 1. 
3. We come to the end of the outer function, so basically we finished with executing a function,  
so in that regard variables are destroyed in our case counter = 1 is destroyed. 
Then we click again, it will repeat process, so set to 0, then inner increments to 1, 
again we come to the end of the function, puf counter is again destroyed from memory. 
so that is why we always see 1. 
Then remember, this would be normal behavior without closures. 
But when engine see function inside function it is automatically a closure, 
and again to carve in your brains, variables would not be destroyed after function has finished its execution.  
So counter set to 1 will not be destroyed it will be stored in memory even after outer function has finished its execution. 
SO REAL WORKFLOW with CLOSURES is this: 
1. OUTER FUNCTION sets variable counter to "0". 
2. Inner function access that variable and increments it so in memory is COUNTER = 1. 
3. Function has finished its execution, BUT being a closure variable is still in memory so not destroyed. 
Now we  have in memory COUNTER =1, now upon clicking the button second time, 
button engine will know it is closure and will use existing variable in memory ( counter = 1 ), 
so next time will increment to COUNTER=2, 
3, ..NOTE ALSO, all callback functions are automatically closures as well!


-- Virtual Machine
2 года назад (изменено)
Incorrect statement: Function inside a Function is AUTOMATICALLY a closure. 

It needs a variable reference somewhere to make it one.

A Function that preserves DATA is a closure or A Function that references a PRIVATE variable (to be precise)
Check it out yourself with an outer function that doesn’t pass data and only returns an inner function. 
The console.dir will not the closure property. 
Only when you pass data and the inner references it, the closure property is created.

*/

let step1 = createStep();
let step2 = createStep();
step1();
step1();
step1();
step2();  // здесь я запустил второй счётчик, - у него своя область видимости, свои переменные  и он независимо начал работать 
step1();  // когда я снова запустил step1 дальше, то он спокойно продолжил свой счёт 
step2();
step2();
step2();
step2();
step1();



