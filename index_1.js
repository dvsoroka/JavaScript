// Вначале идет ключевое слово "function", далее идет имя фунуции "myFn", в скобках могут указываться параметры, которые разделены запятой.
function myFn(a, b) {  // (a, b) - параметры функции - это названия переменных, которые находятся в скобказ при объявлении функции, они  ведут себя как переменные:
    let c              // в теле функции мы имеем доступ к этим переменным: мы выполняем операции с этими переменными и на самом деле
    a = a + 1          // значения этих переменных определяются в момент вызова функции. И когда мы вызываем функцию, мы говорим
    c = a + b          // какие значения мы хотим присвоить параметрам (переменным) внутри функции.
    return c           /* Но эти переменные действуют только внутри функции, - если вы попытаетесь получить доступ к таким переменным как a и b вне функции, - вы получите ошибку "переменная не определена" 
                        В этом примере функция, кроме выполнения определённых действий, также возвращает и результат:
                        для возвращения результата используется ключевое слово "return"; мы здесь возвращаем результат, который равен значению переменной "с", значение которой мы вычилили ранее.
                        После инструкции с ключевым словом "return" функция прекращает выполнение инструкций; т.е. если после этой строки "return ..." есть другие 
                        какие-то операции, они не будут выполнены, т.е. функция возвращает результат и заканчивает свою работу.
                        Если функция не имеет инструкции return, то она возвращает значение "undefined" - не определено*/
}

/* Значения параметров определяются в момент вызова функции, так вот, 10 и 3 в данном случае - это аргументы;
 аргументы - это те значения, которые вы передаёте в ВЫЗОВЕ функции*/ 
myFn(10, 3);    // 14           (10, 3) - Аргументы при вызове функции, т.е если я говорю: "аргументы функции", - я подразумеваю ВЫЗОВ функции; если я говорю "параметры функции", - я говорю о объявлении функции. 
/* function myFn(a, b) {        1. Параметрам "a" и "b" писваиваются значения 10 и 3
    let c                       2. Объявляется переменная "с"
    a = a + 1                   3. Значение "а" увеличивается на 1 т.е. мы меняем значение переменной "а"
    c = a + b                   4. Сумма значений "a" и "b" писваивается переменной "с"
    return c                    5. Возвращается значение  переменной "с" с помощью ключевого слова "return"       */
              

console.log(myFn);
console.dir(myFn);  /* - Увидим структуру этого объекта.  
                        У такого объекта есть свойства: arguments */
console.log(myFn(21, 30));      // Аргументы меняются каждый раз при вызове одной и той же функции, а названия параметров не меняются, - они как были (a и b) так и остаются a и b 
// console.log(`a = ${a}, b = ${b}`);      // Uncaught ReferenceError: a is not defined at  index.js:28:20


// Самая короткая функция

function shortestFn () {}
shortestFn()  // undefined


// Передача функции значения по ссылке

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1;        // Мы мутируем внешний объект
    return person;
} 

increasePersonAge(personOne);
console.log(personOne.age); // 22


// Создание копии объекта 

function pureIncreasePersonAge(person) {            
    const updatedPerson = Object.assign({}, person); // мы создали новый объект на основани объекта, который будет передан в качестве аргумента, чтобы не изменять исходный объект 
    updatedPerson.age += 1;                         // создана новая ссылка на новый объект и именно его мы меняем
    return updatedPerson;                           // в результате работы функции мы возвращаем новый объект - мы не мутируем оригинальный объект
}


const updatedPersonOne = pureIncreasePersonAge(personOne); // результат вызова функции мы присваиваем новой переменной
console.log(personOne.age);  
console.log(updatedPersonOne.age);

// КОЛБЭК ФУНКЦИИ -

function anotherFunction(n) {
    for (i = 0; i < n; i++) {
        console.log(`inside callback function - iteration with i = ${i} !!!`);
        
    }
}

function fnWithCallback(callbackFunction, num) {   // Один из параметров "callbackFunction" - это функция

    console.log(`inside outer function!`);
    callbackFunction(num);
    
}

fnWithCallback(anotherFunction, 5);


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;


let text1 = "";

for (let i = 0; i < 5; i++) {
  text1 += "The number is " + i + "<br>";
}

document.getElementById("demo1").innerHTML = text1;


// https://www.youtube.com/watch?v=RPuFz93Gvpk&list=RDCMUCIyfaiKil5oomY64XIRJEAA&index=2

// ЗАМЫКАНИЕ

var a = 12;

function f() {
    var b = 42;

    console.log(b);
    console.log(a); // Область видимости функции f() замкнута на переменную a - это называется
                    // взять переменную из лексического окружения, т.е. где функция объявлена, и, если внутри неё нет каких-то переменных,
                    // то она их берёт из того контекста, где она написана, не вызвана
}                   //                                                     ! 
                    //                                                     |     
f();  // - контекст вызова - это НЕ является лексическим окружением -- !! ОШИБКА!!
f();
f();
f();


// https://www.youtube.com/watch?v=pahO5XjnfLA&t=3s


/*
function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // 

  */

  // https://www.youtube.com/watch?v=GhNA0r10MmA
  // SCOPE - static
  // Visible
  // Evaluated at runtime
   let  myVariable = 'the best variable' // let remove this guy and find out that the error arize with a delay !!!

  let result = function() {
    setTimeout(function() {
        console.log(myVariable)
    }, 2000)
  }

//  console.log(result())         // final result comes with a delay of 2 seconds


// "let" is block scoped and "var" is function scoped
  

let resultNew = function() {
    if(true) {
        var  myNewVariable = 'great variable'     // This var will ignore the "if" block and just refer to the function block, so 
    }
    return myNewVariable
}

//console.log(resultNew())

// if i do "let" we get a reference error : index.js:180 Uncaught ReferenceError: myNewVariableLet is not defined
// that's because "let" is scoped to the "if"-block
/*
let resultNewLet = function() {
    if(true) {
        let  myNewVariableLet = 'great variable with \'let\' '     // This let is contained within "if" block. 
                                                    //     And it's the same with for-loops and any block 
                                                    //    that you can create with curly braces, "let" will respect that whhereas "var" does not. 
    }
    return myNewVariableLet
}

 console.log(resultNewLet())

*/
let resultGood = function(x = 0) {
    let myNewVariableLet 
    if(x  % 2) {
      myNewVariableLet = 'great variable with \'let\' '                                                  
    }
    else { myNewVariableLet = 'crappy variable with \'let\' '}
    return myNewVariableLet
}

console.log(resultGood(3))

var x11 = 5
var y11 = 5
console.log((x11) % 2)


/* "let" has such an intresting behavior what's called a "lexical deadzone" 
unlike "var" which will get what's referred to as hoisted to the top of a function or top of a scope like it's 
available everywhere in that scope? - let is not. So if 
*/
let resultGood1 = function() {
//    console.log(myNewVariableLet)  // - Uncaught ReferenceError: Cannot access 'myNewVariableLet' before initialization
    console.log(myNewVariableVar)    // - everything if fine, - it's just undefined at that point 
                                     // because it hasn't been assigned a value but because it exist within that scope


    let myNewVariableLet = 'default value'
    var myNewVariableVar = 'default value by \"var\"'
    if(false) {
      myNewVariableLet = 'great variable with \'let\' '                                                  
    }
    else { myNewVariableLet = 'crappy variable with \'let\' '}
    return myNewVariableLet
}

console.log(resultGood1())


// First fullName variable defined in the global scope:
const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile())