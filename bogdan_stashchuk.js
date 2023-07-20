const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}

// Порядок свойств в объекте не имеет значения
// B JavaScript эти два объекта технически одинаковы
const myCity1 = {
    popular: true, 
    country: 'USA',
    city: 'New York'
}

console.log(myCity == myCity1);  // false

console.log(myCity);

// ОБЪЕКТЫ Получение значений свойств 
// Этот синтаксис называется точечная запись - "dot notation"
console.log(myCity.city);       // New York

console.log(myCity.popular);    // true

myCity.city = 'Las Vegas';
myCity.continent = 'North America';
myCity.country = 'Ukraine';

delete myCity.country;          // Удаление свойства объекта с помощью оператора "delete"
delete myCity.continent;         // выражение удаления свойства объекта состоит из ключевого зарезервированного слова "delete" затем имяОбъекта.свойство

console.log(myCity);

myCity['popular'] = false;      // в скобках в виде строки указывается название свойства, которое мы хотим добавить/изменить
myCity['country'] = 'USA';
myCity['population'] = 646790;
myCity['totalCountryPopulation'] = 331000000;

myCity1['population'] = 8468000;
console.log(myCity['country']);

/* Bracket notation используется в том случае, если название свойства является значением той или иной переменной */
const countryPropertyName = 'country';  /* допустим мы создаем новую переменную, которая называется "countryPropertyName"  со значением "country"
                                     и мы хотим добавить новое свойство к объекту myCity, которое будет называться так, как значение переменной countryPropertyName, 
                                     и в этом случае как раз и подойдёт синтаксис с квадратными скобками
                                    мы не можем написать myCity.countryPropertyName потому что в таком случае создастся свойство 
                                    которое называется "countryPropertyName", но нам необходимо свойство, которое называется  "country"
                                    и потому мы должны написать:
                                    myCity[ и в скобках просто название переменной ] 
                                    и JavaScript сначала перед созданием нового свойства посмотрит 
                                    какое значение у переменной countryPropertyName, которое у нас 'country' 
                                    и с таким именем создаст новое свойство  */

myCity[countryPropertyName] = 'Ukraine'; // в квадратных скобках у нас стоит выражение, которое состоит из одной переменной; здесь точечная запись не подойдёт
console.log(myCity);                      // используем  "Bracket notation", когда в квадратных скобках должно быть выражение, например, название переменной или более сложное выражение


// Вложенные объекты

const myCity2 = {
    city: 'New York',
    info: {                             // У объекта myCity2 есть свойство "info" и значение этого свойства - это объект
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity2.info.isPopular);    // true

delete myCity2.info['isPopular'];       // 

console.log(myCity2);       //  {city:"New York", info: {country: 'USA'}}

// myCity2.info.hasUndergroundMetro = true;
// myCity2.info.population = 8468000;
// console.log(myCity2);


// Использование переменных при формировании объектов

const name = 'Bogdan';
const postsQty = 23;

const userProfile = {
//    name: name,                 //  имя свойства и имя переменной совпадают, 
//    postsQty: postsQty,         //  - можно сократить:
    name,
    postsQty,
    hasSignedAgreement: false
}


//      ГЛОБАЛЬНЫЕ ОБЪЕКТЫ
//   window - это глобальный объект в веб-браузерах 
//  global - это глобальный объект в node.js
// globalThis - унифицированный глобальный объект

console.log(globalThis);

if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // 👉️ can use alert()
    // alert(pi);
    window.innerWidth
    console.log(window.innerWidth);
    console.log(globalThis == window);
    window.console
  } else {
    console.log(`You are on the server and can't use alert() and prompt() as they are window. methods.`);
    // 👉️ can't use alert()
    console.log(globalThis == global);
    global.console
  }

globalThis.innerHeight;
globalThis.console.log(`Hello from ${globalThis}!`);