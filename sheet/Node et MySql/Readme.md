# JavaScript Tutorial Part 1
- JS Comments
- JS Variables
- JS Data Types
- JS Functions
- JS Objects
- JS Events
- JS Strings
- JS Numbers
- JS Arrays
- JS Dates
- JS Math
- JS Random
- JS Booleans
- JS Conditions
- JS Switch
- JS Loop For
- JS Loop For In
- JS Loop For Of
- JS Loop While
- JS Break
- JS RegExp
- JS this Keyword
- JS Classes
- JS JSON
- JS Debugging
## what's Javascript ?
- JavaScript is the world's most popular programming language.
- JavaScript is the programming language of the Web.
- JavaScript is easy to learn.
- This tutorial will teach you JavaScript from basic to advanced.

## JavaScript Variables
- Using var
- Using let
- Using const
```js
var x = 5;
var y = 6;
var z = x + y;
```
## JavaScript Data Types
```js

var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object
```
## JavaScript Functions
### Function Declarations
```js
function myFunction() {
  alert("Hello World!");
}
MyFuntion();
```
### Function Expressions
```js
const x = function (a, b) {return a * b};
let z = x(4, 3); 
```
### The Function() Constructor
```js
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3); 
```
### Arrow Functions
```js
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;
```
### The JavaScript apply() Method
```js
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);
```
## Common HTML Events
- onchange
- onclick
- onmouseover
- onmouseout
- onkeydown
- onload

```js
<element event='some JavaScript'>
<button onclick="displayDate()">The time is?</button>
```

## String Methods
```js
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    txt.length     // Returns 26 
let str = "Please locate where 'locate' occurs!";
    str.indexOf("locate")    // Returns 7
let str = "Please locate where 'locate' occurs!";
    str.lastIndexOf("locate")    // Returns 21 
let str = "Please locate where 'locate' occurs!";
    str.lastIndexOf("John")    // Returns -1 
let str = "Please locate where 'locate' occurs!";
    str.indexOf("locate", 15)    // Returns 21 
let str = "Please locate where 'locate' occurs!";
    str.lastIndexOf("locate", 15)    // Returns 7 
```
### Finding a String in a String 
```js
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");//7
var pos = str.lastIndexOf("John");//-1
var pos = str.indexOf("locate", 15);//21
var pos = str.lastIndexOf("locate", 15);//7
var pos = str.search("locate");//7
```

### The slice() Method
```js
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);//Banana
var res = str.slice(-12, -6);//Banana
```

### The substring() Method
```js
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);//Banana
```

### The substr() Method
```js
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);//Banana
var res = str.substr(7);//Banana, Kivi
var res = str.substr(-4);//Kiwi
```

### Replacing String Content
```js
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
```
### Converting to Upper and Lower Case
```js
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
```

### The concat() Method
```js
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
```

### String.trims()
```js
var str = "       Hello World!        ";
alert(str.trim());
```

### The charAt() Method
```js
var str = "HELLO WORLD";
str.charAt(0);            // returns H
```

### The charCodeAt() Method
```js
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72
```
### Property Access
```js
var str = "HELLO WORLD";
str[0];                   // returns H
var str = "HELLO WORLD";
str[0] = "A";             // Gives no error, but does not work
str[0];                   // returns H
```

### Converting a String to an Array
```js
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

var txt = "Hello";       // String
txt.split("");           // Split in characters
// h
// e
// l
// l
// o
```
### Escape Character
```js
var x = "We are the so-called \"Vikings\" from the north.";
var x = 'It\'s alright.';
```

### Strings Can be Objects
```js
var firstName = "John";//return string
var firstName = new String("John");// return object
```


## Javasript array
```js
var cars = ["Saab", "Volvo", "BMW"];

var cars = [
  "Saab",
  "Volvo",
  "BMW"
];

var cars = new Array("Saab", "Volvo", "BMW");
var name = cars[0];//Saad
// Changing an Array Element
cars[0] = "Opel";
```

### Arrays are Objects
```js
var person = ["John", "Doe", 46];
var person = {firstName:"John", lastName:"Doe", age:46};
```
### Length Propriety
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4
fruits[0];//Banana
fruits[fruits.length - 1];//Mango
```
### Looping Array Elements
```js
var fruits, text, fLen, i;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;

    text = "<ul>";
    for (i = 0; i < fLen; i++) {
      text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
```
### Array.forEach()
```js
var fruits, text;
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";

    function myFunction(value) {
      text += "<li>" + value + "</li>";
    }
```

### Adding Array Elements
```fruits.push("Lemon");```

### Avoid new Array()
```js
var points = new Array();     // Bad
var points = [];              // Good 

var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good
```

### Converting Arrays to Strings
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();//Banana,Orange,Apple,Mango
fruits.join(" * ");//Banana * Orange * Apple * Mango
fruits.pop();// Removes the last element ("Mango") from fruits
fruits.pop();// the value of x is "Mango"
fruits.push("Kiwi");//  Adds a new element ("Kiwi") to fruits
fruits.push("Kiwi");   //  the value of x is 5
fruits.shift();// Removes the first element "Banana" from fruits
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits

fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
fruits[0] = "Kiwi";
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits
```
### Deleting Elements
```js
delete fruits[0];
fruits.splice(0, 1);        // Removes the first element of fruits
```


### Merging (Concatenating) Arrays
```js
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
```

### Slicing an Array
```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
var citrus = fruits.slice(1, 3);
fruits.toString();
```

### Sorting an Array
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();// Sorts the elements of fruits
fruits.reverse();// Then reverse the order of the elements
```
### Array.forEach()
```js
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
} 
```

## JavaScript Date Objects
```js
var d = new Date()
getFullYear()	//Get the year as a four digit number (yyyy)
getMonth()	//Get the month as a number (0-11)
getDate()	//Get the day as a number (1-31)
getHours()	//Get the hour (0-23)
getMinutes()	//Get the minute (0-59)
getSeconds()	//Get the second (0-59)
getMilliseconds()	//Get the millisecond (0-999)
getTime()	//Get the time (milliseconds since January 1, 1970)
getDay()	//Get the weekday as a number (0-6)
Date.now()	//Get the time. ECMAScript 5.
```

## JavaScript Random
```js
Math.random();// returns a random number
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};
```

## JavaScript if else and else if
```js
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## JavaScript Switch Statement
```js
var x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
```

## JavaScript For Loop
```js
// The For Loop
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

// Statement 1
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}

// Statement 2
var i = 0;
var len = cars.length;
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}

// The For/In Loop
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}


// The For/Of Loop
var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  document.write(x + "<br >");
}

// Looping over a String
var txt = 'JavaScript';
var x;

for (x of txt) {
  document.write(x + "<br >");
}


// JavaScript While Loop
// The While Loop
while (i < 10) {
  text += "The number is " + i;
  i++;
}


// The Do/While Loop
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

// JavaScript Break and Continue
// The Break Statement
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

// The Continue Statement
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
```

## Fonctions Fléchées (Arrow Functions)
Les fonctions fléchées offrent une syntaxe concise pour déclarer des fonctions. Exemple :

```javascript
const addition = (a, b) => a + b;
```

## Destructuration
La destructuration permet d'extraire des valeurs d'objets ou de tableaux de manière concise. Exemple :

```javascript
const person = { name: "John", age: 25 };
const { name, age } = person;
```

## Modules
Les modules permettent d'organiser le code en le divisant en fichiers. Vous pouvez exporter et importer des fonctionnalités entre eux. Exemple :

```javascript
// Dans un fichier module.mjs
export const maFonction = () => {
    // Code de la fonction
};

// Dans un autre fichier
import { maFonction } from './module.mjs';
```
## JavaScript Random
### Math.random()
```js
// Returns a random number:
Math.random();
```
### JavaScript Random Integers
```js
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
```

### Returns a random integer from 0 to 10:
```js
Math.floor(Math.random() * 11);
Example
// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);
Example
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
Example
// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;
Example
// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;
```
## Date type
```js
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null   // Returns "object"
```
## JavaScript Errors - Throw and Try to Catch
### try and catch
```js
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
} 
```
### The finally Statement
```js
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
} 
```
## The JavaScript this Keyword
```js
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
}; // return John Doe
```
## JavaScript Classes 
```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
```

### Class Inheritance
```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
```

### Getters and Setters
```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car("Ford");

```
### Hoisting
```js
//You cannot use the class yet.
//myCar = new Car("Ford")
//This would raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
let myCar = new Car("Ford")
```
## JSON
```json
{
  "firstName":"John", "lastName":"Doe"
  } 
```
Convertir Json in string
```js
var obj = JSON.parse(text);
```
## Debuging
```js
var x = 15 * 5;
debugger;//this world ...
``` 

