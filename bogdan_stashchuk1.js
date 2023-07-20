// https://www.youtube.com/watch?v=CxgOKJh4zWE&t=2631s
// Метод - свойство объекта, значение которого - функция

const myCity = {
    city: 'New York',
    cityGreeting: function () {     // Методы - свойствва объекта, которые содержат функции
        console.log('Greetings!!')
    }
}
myCity.cityGreeting()       // 'Greetings!!'

// в следующем примере нет ключевого слова 'function'

const myCit = {
    city: 'New York',
    cityGreeting() {     // Cокращенный формат записи метода
        console.log('Greetings!!! из сокращенно записанного метода')
    }
}
myCit.cityGreeting() 

// JSON - JAVASCRIPT OBJECT NOTATION - формат обмена данными между компьютерами в интернете
// все свойства взяты в двойных кавычках!
/* 
{
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}
JSON передается в виде строки

{"userId": 1,"id": 1,"title":"Test title","status":{"completed":false}}

Конвертация JSON в ОБЪЕКТ 
c помощью встроенного  метода 
JSON.parse()
Получив JSON ответ от сервера, вы можете передать его как аргумент в вызове метода parse() 
и в результате получите JavaScript объект */

const myParsedObject = {
    userId: 1,
    id: 1,
    title: 'Test title',
    status:
        {completed:false
    }
}
console.log(myParsedObject);
// Если есть объект и вы хотите конвертировать его в JSON строку, для этого есть обратная функция (метод)  JSON.stringify()

const post = {
    title: 'My post',
    likesQty: 5
}

post;
JSON.stringify(post);
const postStringified = JSON.stringify(post);
console.log(postStringified);

console.log(JSON.parse(postStringified));

// Мутация в JavaScript
// Значения примитивных типов
const a = 10 // 10 - это число, а число - это примитивный тип
                
let b = a // Копирование значения (copy by value)

b = 30;

console.log(a);     // 10

console.log(b);     // 30

// Значение ссылочного типа
/* Если мы скопируем объект */ 


const person = {
    name: 'Bob',
    age: 21,
}

person.age = 22;    // мы можем менять значение тех или лных свойств объекта так как сама переменная хранит только ссылку на объект
person.isAdult = true;    // Это называется мутация объекта, на который ссылается переменная "person"
console.log(person.age);
console.log(person.isAdult);
delete person['isAdult'];
console.log(person);

// Мутирование копий
                                // переменная "person" здесь хранит только ссылку на область памяти, где располагается объект
const person2 = person;         // на этом этапе мы копируем  только ссылку (copy by reference) на область памяти, - сам объект остается там же 
person2.age = 26;               // после этого мы можем мутировать этот же объект, используя скопированную переменную "person2"
person2.isAdult = true;         // после этого свойства объекта person изменятся 

console.log(person.age);        // 26   Это происходит из-за того, что обе переменные person и person2 ссылаются на один и тот же объект в памяти и мы его можем менять как через переменную person так и через person2
console.log(person.isAdult);    // true

//  Как избежать мутаций исходного объекта, если мы хотим внести изменнения в копию, не меняя оригинального объекта

const person1 = {
    name: 'Bob',
    age: 25
}

/* Первый вариант: использовать метод "assign" объекта Object; этот объект "Object" является частью глобального объекта 
  т.е. это свойство(метод) глобального объекта и потому он доступен как в веб-браузерах, так и в Node.js
  Название этой переменной "Object" написано с большой буквы, - такой формат записи - PascalCase
  используеnся для классов и типов в JavaScript, так вот "Object" - это на самом деле и тип и класс в JavaScript, и потому он написан с большой буквы.
  И Object является прототипом всех объектов в JavaScript.
  Одним из методов этого объекта Object является метод "assign" и с помощью него можно создавать новые объекты 
  */ 

const person3 = Object.assign({}, person1);  // в круглых скобках метода "assign" в качестве первого аргумента ставим пустой объект {}, 
                                            // а второй аргумент - название переменной "person1" - это наш объект который мы хотим скопировать 
// т.е. мы хотим по сути создать новый объект на основании объекта person1. Метод Object.assign() создаст новый объект и запишет в него все свойства объекта person1.
person3.age = 26;       // теперь в переменной person3 находится новая ссылка на новый объект в памяти и эта ссылка не совпадает с сфлкой переменной person1

console.log(person3.age);   // 26
console.log(person1.age);   // 25  - мы не мутировали оригинальный объект. 
//  Но если у объекта есть вложенные объекты, то ссылки на них сохраняются при создании нового объекта! 


// Как избежать мутаций. Выриант-2
const person = {
    name: 'Bob',
    age: 25
}

const person2 = { ...person };  /* ... - оператор разделения объекта на свойства - spread operator
Берется объект person и разделяется на свойства и потом эти свойства сразу же собираются в новай объект 
потому что здесь мы указали фигурные скобки  { ...person }, при этом мы создали новую ссылку "person2" на этот новый объект, который создался в памяти*/
person2.name = 'Alice';

console.log(person2.name)       // Alice
console.log(person.name)       // Bob

// Сылки на вложенные объекты так же сохраняются

// Как избежать мутаций. Выриант-3
const person = {
    name: 'Bob',
    age: 25
}

const person2 = JSON.parse(JSON.stringify(person));  /*  - cначала мы конвертируем объект в строку:  JSON.stringify(person)
А потом мы берём эту строку и передаём как аргумент в другой метод JSON.parse() и по сути мы берём эту строку 
и конвертируем её в объект JavaScript.
По сути при помощи такой двойной конвертации мы создаём абсолютно новый объект 
при этом вложенные объекты, если они есть,  создаются заново.       */
person2.name = 'Alice';

console.log(person2.name)       // Alice
console.log(person.name)       // Bob

// Сылки на вложенные объекты не сохраняются, а создаются новые!

