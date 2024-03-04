// Why Study JavaScript?
// JavaScript is one of the 3 languages all web developers must learn:

//    1. HTML to define the content of web pages
//    2. CSS to specify the layout of web pages
//    3. JavaScript to program the behavior of web pages

    // JavaScript Display Possibilities
    // JavaScript can "display" data in different ways:

    // Writing into an HTML element, using innerHTML.
    // Writing into the HTML output using document.write().
    // Writing into an alert box, using window.alert().
    // Writing into the browser console, using console.log().


    // JavaScript Variables
    var x = 5;
    var pi = 3.14;
    var person = "John Doe";
    var answer = 'Yes I am!';

    //////////////////////////////
    /////operation
    //////////////////////////////

    // Data types
var length = 16;// Number
var lastName = "Johnson";// String
var x = {firstName:"John", lastName:"Doe"};// Object

var x;// Now x is undefined
x = 5;// Now x is a Number
x = "John";// Now x is a String

var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals

var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object

typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)

// Funtion
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}


// JavaScript Objects
var car = {
  type:"Fiat",
  model:"500",
  color:"white"
};
// Accessing Object Properties
car.type || car["type"];


// JavaScript Events
<button onclick="displayDate()">The time is?</button>

    // onchange	An HTML element has been changed
    // onclick	The user clicks an HTML element
    // onmouseover	The user moves the mouse over an HTML element
    // onmouseout	The user moves the mouse away from an HTML element
    // onkeydown	The user pushes a keyboard key
    // onload	The browser has finished loading the page


//string
var x = "John Doe";

// String Lenght
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;//26

// Finding a String in a String
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");//7

//Finding a String in a String 
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");//7
var pos = str.lastIndexOf("John");//-1
var pos = str.indexOf("locate", 15);//21
var pos = str.lastIndexOf("locate", 15);//7
var pos = str.search("locate");//7

//The slice() Method
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);//Banana
var res = str.slice(-12, -6);//Banana

//The substring() Method
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);//Banana

//The substr() Method
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);//Banana
var res = str.substr(7);//Banana, Kivi
var res = str.substr(-4);//Kiwi

//Replacing String Content
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

// Converting to Upper and Lower Case
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

// The concat() Method
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

//String.trims
var str = "       Hello World!        ";
alert(str.trim());

//The charAt() Method
var str = "HELLO WORLD";
str.charAt(0);            // returns H

// The charCodeAt() Method
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72

// Property Access
var str = "HELLO WORLD";
str[0];                   // returns H

var str = "HELLO WORLD";
str[0] = "A";             // Gives no error, but does not work
str[0];                   // returns H

// Converting a String to an Array
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


// Escape Character
var x = "We are the so-called \"Vikings\" from the north.";
var x = 'It\'s alright.';

// Strings Can be Objects
var firstName = "John";//return string
var firstName = new String("John");// return object

    //////////////////////////////
    /////Number
    //////////////////////////////

//Javasript array
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

// Arrays are Objects
var person = ["John", "Doe", 46];
var person = {firstName:"John", lastName:"Doe", age:46};

//Length Propriety
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4
fruits[0];//Banana
fruits[fruits.length - 1];//Mango

// Looping Array Elements
    var fruits, text, fLen, i;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;

    text = "<ul>";
    for (i = 0; i < fLen; i++) {
      text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";

// Array.forEach()
    var fruits, text;
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";

    function myFunction(value) {
      text += "<li>" + value + "</li>";
    }

// Adding Array Elements
fruits.push("Lemon");

// Avoid new Array()
var points = new Array();     // Bad
var points = [];              // Good 

var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good

// Converting Arrays to Strings
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

//Deleting Elements
delete fruits[0];
fruits.splice(0, 1);        // Removes the first element of fruits


// Merging (Concatenating) Arrays
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3

//Slicing an Array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
var citrus = fruits.slice(1, 3);
fruits.toString();

// Sorting an Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();// Sorts the elements of fruits
fruits.reverse();// Then reverse the order of the elements

// Array.forEach()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
} 

// JavaScript Date Objects
var d = new Date();
    // new Date()
    // new Date(year, month, day, hours, minutes, seconds, milliseconds)
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
    // new Date(milliseconds)
var d = new Date(0);
    // new Date(date string)
    var d = new Date("October 13, 2014 11:13:00")

// Date Methods
d = new Date();
document.getElementById("demo").innerHTML = d;
    // same as
document.getElementById("demo").innerHTML = d.toString();

// ///////////////
// JavaScript Date Formats
// ///////////////

// JavaScript Get Date Methods
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

  // The getFullYear() Method
  var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();

// ///////////////
// The setFullYear() Method
// ///////////////

// JavaScript Math Object
Math.PI;// returns 3.141592653589793
Math.pow(8, 2);// returns 64
Math.sqrt(64);      // returns 8
Math.floor(4.7);    // returns 4
Math.floor(4.7);    // returns 4
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200); // returns 150
Math.random();     // returns a random number

// Math Object Methods
abs(x)	//Returns the absolute value of x
acos(x)	//Returns the arccosine of x, in radians
asin(x)	//Returns the arcsine of x, in radians
atan(x)	//Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)//	Returns the arctangent of the quotient of its arguments
ceil(x)	//Returns the value of x rounded up to its nearest integer
cos(x)	//Returns the cosine of x (x is in radians)
exp(x)	//Returns the value of Ex
floor(x)	//Returns the value of x rounded down to its nearest integer
log(x)	//Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)//	Returns the number with the highest value
// min(x, y, z, ..., n)//	Returns the number with the lowest value
pow(x, y)//	Returns the value of x to the power of y
random()	//Returns a random number between 0 and 1
round(x)//	Returns the value of x rounded to its nearest integer
sin(x)	//Returns the sine of x (x is in radians)
sqrt(x)	//Returns the square root of x
tan(x)	//Returns the tangent of an angle

// JavaScript Random
Math.random();// returns a random number
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};

//booleans
YES / NO
ON / OFF
TRUE / FALSE

// ///////////////
// Comparaison and logique
// ///////////////

// JavaScript if else and else if
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// JavaScript Switch Statement
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

// JavaScript For Loop
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


// JavaScript Type Conversion
// JavaScript Data Types
// In JavaScript there are 5 different data types that can contain values:

// string
// number
// boolean
// object
// function

// // There are 6 types of objects:
// Object
// Date
// Array
// String
// Number
// Boolean

// And 2 data types that cannot contain values:
// null
// undefined
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


// ///////////////
// RegExp
// ///////////////


// JavaScript Errors - Throw and Try to Catch
try {
  // Block of code to try
}
catch(err) {
  // Block of code to handle errors
}
finally {
  // Block of code to be executed regardless of the try / catch result
}


// ///////////////
// Javasript This keyword
// ///////////////

// ///////////////
// Let et Const
// ///////////////


//Funtion 
// Before
hello = function() {
  return "Hello World!";
}
// With Arrow Function:
hello = () => {
  return "Hello World!";
}
// Arrow Functions Return Value by Default:
hello = () => "Hello World!";

// Arrow Function With Parameters:
hello = (val) => "Hello " + val;
// Arrow Function Without Parentheses:
hello = val => "Hello " + val;



// JavaScript Classes 
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
mycar = new Car("Ford");

// Methods
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}
mycar = new Car("Ford");
document.getElementById("demo").innerHTML = mycar.present();

// Static Methods
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    return "Hello!!";
  }
}
mycar = new Car("Ford");
//Call 'hello()' on the class Car:
document.getElementById("demo").innerHTML = Car.hello();

// JavaScript Debugging

// ECMAScript 5 Features
String.trim();
Array.isArray();
Array.forEach();
Array.map();
Array.filter();
Array.reduce();
Array.reduceRight()
Array.every();
Array.some();
Array.indexOf();
Array.lastIndexOf();
JSON.parse();
JSON.stringify();
Date.now();


// JavaScript JSON
    // {
    // "employees":[
    //   {"firstName":"John", "lastName":"Doe"},
    //   {"firstName":"Anna", "lastName":"Smith"},
    //   {"firstName":"Peter", "lastName":"Jones"}
    // ]
    // }

// JSON Arrays
    // "employees":[
    //   {"firstName":"John", "lastName":"Doe"},
    //   {"firstName":"Anna", "lastName":"Smith"},
    //   {"firstName":"Peter", "lastName":"Jones"}
    // ]

    // Converting a JSON Text to a JavaScript Object
    var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj = JSON.parse(text);


// JavaScript Forms
// JavaScript Form Validation
// JavaScript Example
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

// HTML Form Example
  {/* <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
  </form> */}


  // JS Browser BOM
  // Window Size
  var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


// Window Screen
// Window Screen Width
var taille=screen.width;

// Window Screen Height
var taille = screen.height;

// Window Screen Available Width
var allTaille=screen.availWidth;

// JavaScript Window Location
// Window Location Href
var a =window.location.href;

// Window Location Hostname
var test =window.location.hostname;

// JavaScript Popup Boxes
// Alert Box
window.alert("sometext");
alert("I am an alert box!");

// Confirm Box
window.confirm("sometext");
// exemple
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}

// Prompt Box
window.prompt("sometext","defaultText");
var person = prompt("Please enter your name", "Harry Potter");
if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}


// JavaScript Timing Events
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}//10:05:45

// JSON - Introduction
// Convert a string written in JSON format, into a JavaScript object.
var myJSON = '{"name":"Johhn", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;//john

// Store and retrieve data from local storage.
var myObj, myJSON, text, obj;
// Storing data:
myObj = { name: "John", age: 31, city: "New York" };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

// Example - Parsing JSON
var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
obj.name;//John

// Accessing Object Values
var myObj = { "name":"John", "age":30, "car":null };
x = myObj.name;//John
x = myObj["name"];//John

// Nested JSON Objects
myObj = {
  "name":"John",
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  }
 }

x = myObj.cars.car2;
// or:
x = myObj.cars["car2"];





