// Функция - блок кода, который можно выполнять многократно
/*
let a = 5;
let b = 3;

c = a + b;
console.log(c) // 8

a = 8;
b = 12;

c = a + b;
console.log(c) // 20         

*/

let a = 5;
let b = 3;

function sum(a, b) {
    const c = a + b     // Переменную "с" мы теперь объявляем внутри функции и мы используем "const" так как внутри функции мы не меняем её значение, а только вычисляем один раз
    console.log(c)
}

sum(a, b)   //  - вызов функции 

a = 8;
b = 12;

sum(a, b)   // 20  - вызов функции выглядит точно также, однако, вводные значения - параметры (a, b) поменялись
            // Функция позволяет выполнять одни и те же действия многократно с разными вводными значениями 
            // Для этого в функции и предусмотрены параметры; и значения этих параметров меняюся при каждом новом вызове функции.


            /* ФУНКЦИЯ МОЖЕТ БЫТЬ...

...именованной              ...присвоена переменной

...анонимной                ...аргументом при вызове 
                                 другой функции (call-back functions)
          
            ...значением свойства
                (метода) объекта

ФУНКЦИЯ - ЭТО ОБЪЕКТ
И, соответственно, как у любого объекта у функции есть свойства

*/

function myFn(a, b) {  // a b - параметры функции - ведут себя как переменные:
    let c              // в теле функции мы имеем доступ к этим переменным: мы выполняем операции с этими переменными и на самом деле
    a = a + 1          // значения этих переменных определяются в момент вызова функции. И когда мы вызываем функцию, мы говорим
    c = a + b          // какие значения мы хотим присвоить параметрам (переменным) внутри функции.
    return c           /* Но эти переменные действуют только внутри функции, - если вы попытаетесь получить доступ к 
                        таким переменным как a и b вне функции, - вы получите ошибку "переменная не определена" */
}

console.log(`a = ${a}, b = ${b}`);
console.log(myFn);
console.dir(myFn);  /* - Увидим структуру этого объекта.  
                        У такого объекта есть свойства: arguments 
ƒ myFn(a, b)
arguments: null
caller: null
length: 2               // - показывает количество параметров функции
name: "myFn"
prototype: {constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: bogdan_stashchuk2.js:47
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[2]

                */