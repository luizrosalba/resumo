# Javascript 

JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). O padrão JavaScript é ECMAScript. Desde 2012, todos os navegadores modernos possuem suporte total ao ECMAScript 5.1. Navegadores mais antigos suportam pelo menos ECMAScript 3. Em 17 de Junho de 2015, a ECMA International publicou a sexta versão do ECMAScript, que é oficialmente chamado de ECMAScript 2015, e foi inicialmente conhecido como ECMAScript 6 ou ES6. Desde então, as especificações do ECMAScript são lançadas anualmente. Essa documentação faz referência à última versão de referência, que atualmente é a ECMAScript 2018.

Não se deve confundir o JavaScript com a linguagem de programação Java. Tanto Java quanto JavaScript são marcas registradas da Oracle nos Estados Unidos da América e em outros países. No entanto, as duas linguagens de programação possuem sintaxe, semânticas e usos muito diferentes.

## Basic JavaScript

js_free_code_camp/BasicJavaScript.md

Cursando o Javascript algorithms and data Structues certification
JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.
In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
Unlike some other programming languages, single and double quotes work the same in JavaScript.

Code	Output

```
'	single
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
```

when the + operator is used with a String value, it is called the concatenation operator.

The toPrecision() Method

`toPrecision()` returns a string, with a number written with a specified length:

```javascript
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600
```

The toFixed() Method

`toFixed()` returns a string, with the number written with a specified number of decimals:

```javascript
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
```

The toString() Method

The `toString()` method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):

```javascript
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23
```

The toExponential() Method

`toExponential()` returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:

```Javascript
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0
```

### JS Error

The Error object provides error information when an error occurs.

Example
In this example we have written "alert" as "adddlert" to deliberately produce an error.

Return the error name and a description of the error:

```Javascript
try {
  adddlert("Welcome");
}
catch(err) {
  document.getElementById("demo").innerHTML =
  err.name + "<br>" + err.message;
}
```

### Date Object

The Date object is used to work with dates and times.

Date objects are created with new Date().

There are four ways of instantiating a date:

```Javascript
var d = new Date();
var d = new Date(milliseconds);
var d = new Date(dateString);
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
```

Date Object Methods

```
Method	Description
getDate()	Returns the day of the month (from 1-31)
getDay()	Returns the day of the week (from 0-6)
getFullYear()	Returns the year
getHours()	Returns the hour (from 0-23)
getMilliseconds()	Returns the milliseconds (from 0-999)
getMinutes()	Returns the minutes (from 0-59)
getMonth()	Returns the month (from 0-11)
getSeconds()	Returns the seconds (from 0-59)
getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
getUTCFullYear()	Returns the year, according to universal time
getUTCHours()	Returns the hour, according to universal time (from 0-23)
getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
getUTCMonth()	Returns the month, according to universal time (from 0-11)
getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
getYear()	Deprecated. Use the getFullYear() method instead
now()	Returns the number of milliseconds since midnight Jan 1, 1970
parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
setDate()	Sets the day of the month of a date object
setFullYear()	Sets the year of a date object
setHours()	Sets the hour of a date object
setMilliseconds()	Sets the milliseconds of a date object
setMinutes()	Set the minutes of a date object
setMonth()	Sets the month of a date object
setSeconds()	Sets the seconds of a date object
setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
setUTCDate()	Sets the day of the month of a date object, according to universal time
setUTCFullYear()	Sets the year of a date object, according to universal time
setUTCHours()	Sets the hour of a date object, according to universal time
setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
setUTCMinutes()	Set the minutes of a date object, according to universal time
setUTCMonth()	Sets the month of a date object, according to universal time
setUTCSeconds()	Set the seconds of a date object, according to universal time
setYear()	Deprecated. Use the setFullYear() method instead
toDateString()	Converts the date portion of a Date object into a readable string
toGMTString()	Deprecated. Use the toUTCString() method instead
toISOString()	Returns the date as a string, using the ISO standard
toJSON()	Returns the date as a string, formatted as a JSON date
toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()	Converts a Date object to a string, using locale conventions
toString()	Converts a Date object to a string
toTimeString()	Converts the time portion of a Date object to a string
toUTCString()	Converts a Date object to a string, according to universal time
UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
valueOf()	Returns the primitive value of a Date object
```

```JS
var d = new Date();
var n = d.toJSON();
```

### JavaScript Global Properties

```
Property	Description
Infinity	A numeric value that represents positive/negative infinity
NaN	"Not-a-Number" value
undefined	Indicates that a variable has not been assigned a value
JavaScript Global Functions
Function	Description
decodeURI()	Decodes a URI
decodeURIComponent()	Decodes a URI component
encodeURI()	Encodes a URI
encodeURIComponent()	Encodes a URI component
escape()	Deprecated in version 1.5. Use encodeURI() or encodeURIComponent() instead
eval()	Evaluates a string and executes it as if it was script code
isFinite()	Determines whether a value is a finite, legal number
isNaN()	Determines whether a value is an illegal number
Number()	Converts an object's value to a number
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer
String()	Converts an object's value to a string
unescape()	Deprecated in version 1.5. Use decodeURI() or decodeURIComponent() instead
```

### JSON (JavaScript Object Notation)

JSON is a format for storing and transporting data.

JSON is text, and text can be transported anywhere, and read by any programming language.

JavaScript Objects can be converted into JSON, and JSON can be converted back into JavaScript Objects.

This way we can work with the data as JavaScript objects, with no complicated parsing or translations.

Example
Sending JSON:

```Javascript
// a JavaScript object...:
var myObj = { "name":"John", "age":31, "city":"New York" };

// ...converted into JSON:
var myJSON = JSON.stringify(myObj);

// send JSON:
window.location = "demo_json.php?x=" + myJSON;
```

JSON Methods

Exmeplo  extração de informações de um JSON :

```JS
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },

Using ES6 notation, each item in array is processed to extract title and rating.
Parantheses are needed to return an object.

```JS
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
```

Extrai um JSON e filtra se maior que 8.0

```JS

// Only change code below this line

const mapped = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

const filteredList = mapped.filter(item => item["rating"] > 8.0 );

// Only change code above this line

console.log(filteredList);

```

Extraindo title e rating de um JSON chamado watchList
array.prototype.map takes a function as in input and returns an array.
The returned array includes elements that is processed by the function.
This function takes individual elements as input.
duas formas :

```JS
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));
```

Calculando a média filtrada por autor

```JS

function getRating(watchList){
  // Only change code below this line
   
  const mapped = watchList.map(item => ({
    rating: item["imdbRating"],
    director: item["Director"]
  }));

  const filteredList = mapped.filter(item => item["director"] === "Christopher Nolan" );
  
  const averageRating = filteredList.reduce((sum, item) => sum + parseFloat(item.rating), 0)/filteredList.length;

  // Only change code above this line
  return averageRating;
}
```

Method	Description
parse()	Parses a JSON string and returns a JavaScript object

```JS
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
```

outro exemplo :

```Js


var obj = JSON.parse('{"name":"John","age":30,"city":"New York"}');
console.log(JSON.stringify(obj)); ///{"name":"John","age":30,"city":"New York"}

```

outro exemplo :

```JS
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log( user.friends[1] ); // 1
```

function whatIsInAName(collection, source) {
var arr = [];
// Only change code below this line

console.log( collection.filter ( item =>
( item.last === source.last ||
item.first === source.first)
));

// Only change code above this line
return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

stringify()	Convert a JavaScript object to a JSON string

```JS
JSON.stringify({});                  // '{}'
JSON.stringify(true);                // 'true'
JSON.stringify('foo');               // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify({ x: 5 });            // '{"x":5}'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String('false'), new Boolean(false)]);
// '[1,"false",false]'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// '{}'

```

Valid Data Types
In JSON, values must be one of the following data types:

a string
a number
an object (containing valid JSON values)
an array
a boolean
null
JSON values cannot be one of the following data types:

a function
a date
undefined

More Examples
Example
Receiving JSON:

```Javascript
// myJSON is text received in JSON format.
// Convert JSON into a JavaScript object:
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;
```

### Math Object

The Math object allows you to perform mathematical tasks.

Math is not a constructor. All properties/methods of Math can be called by using Math as an object, without creating it:

var x = Math.PI;            // Returns PI
var y = Math.sqrt(16);      // Returns the square root of 16

Math Object Properties

```
Property	Description
E	Returns Euler's number (approx. 2.718)
LN2	Returns the natural logarithm of 2 (approx. 0.693)
LN10	Returns the natural logarithm of 10 (approx. 2.302)
LOG2E	Returns the base-2 logarithm of E (approx. 1.442)
LOG10E	Returns the base-10 logarithm of E (approx. 0.434)
PI	Returns PI (approx. 3.14)
SQRT1_2	Returns the square root of 1/2 (approx. 0.707)
SQRT2	Returns the square root of 2 (approx. 1.414)
```

Math Object Methods

```
Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)
```

### JavaScript Arithmetic Operators

Arithmetic operators are used to perform arithmetic between variables and/or values.

Given that y = 5, the table below explains the arithmetic operators:

Operator	Description	Example	Result in y	Result in x	Try it

```
+	Addition	x = y + 2	y = 5	x = 7
-	Subtraction	x = y - 2	y = 5	x = 3
*	Multiplication	x = y * 2	y = 5	x = 10
/	Division	x = y / 2	y = 5	x = 2.5
%	Modulus (division remainder)	x = y % 2	y = 5	x = 1
++	Increment	x = ++y	y = 6	x = 6
x = y++	y = 6	x = 5
--	Decrement	x = --y	y = 4	x = 4
x = y--	y = 4	x = 5
```

### JavaScript Statements

JavaScript Statement Identifiers
JavaScript statements often start with a statement identifier to identify the JavaScript action to be performed.

Statement identifiers are reserved words and cannot be used as variable names (or any other things).

The following table lists all JavaScript statements:

```
Statement	Description
break	Exits a switch or a loop
const	Declares a variable with a constant value
class	Declares a class
continue	Breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop
debugger	Stops the execution of JavaScript, and calls (if available) the debugging function
do ... while	Executes a block of statements and repeats the block while a condition is true
for	Loops through a block of code a number of times
for ... in	Loops through the properties of an object
for ... of	Loops through the values of an iterable object
function	Declares a function
if ... else ... else if	Marks a block of statements to be executed depending on a condition
let	Declares a variable inside brackets {} scope
return	Stops the execution of a function and returns a value from that function
switch	Marks a block of statements to be executed depending on different cases
throw	Throws (generates) an error
try ... catch ... finally	Marks the block of statements to be executed when an error occurs in a try block, and implements error handling
var	Declares a variable
while	Marks a block of statements to be executed while a condition is true
```

### String Methods

```
Method	Description
charAt()	Returns the character at the specified index (position)
charCodeAt()	Returns the Unicode of the character at the specified index
concat()	Joins two or more strings, and returns a new joined strings
endsWith()	Checks whether a string ends with specified string/characters
fromCharCode()	Converts Unicode values to characters
includes()	Checks whether a string contains the specified string/characters
indexOf()	Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a match against a regular expression, and returns the matches
repeat()	Returns a new string with a specified number of copies of an  string
replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale /// imutavel
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters/// imutavel
toString()	Returns the value of a String object
toUpperCase()	Converts a string to uppercase letters/// imutavel
trim()	Removes whitespace from both ends of a string
valueOf()	Returns the primitive value of a String object
```

Remove acentuacao deixando a letra

```Js
 let a = "LÓÁÍÀÚÜüíáàç";
 b=a.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
 console.log(b);
///"LOAIAUUuiaac"
```

/// fazer pegar daqui : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr

charAt()	Returns the character at the specified index (position)
charCodeAt()	Returns the Unicode of the character at the specified index
concat()	Joins two or more strings, and returns a new joined strings

```JS
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

endsWith()	Checks whether a string ends with specified string/characters
fromCharCode()	Converts Unicode values to characters

```Js
String.fromCharCode(65, 66, 67);  // "ABC"
```

includes()	Checks whether a string contains the specified string/characters
indexOf()	Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale

```JS
const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1 false 
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// expected output: 0 true 
```

match()	Searches a string for a match against a regular expression, and returns the matches

```JS
var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" is a string. returns ["number"]
str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity);  // returns ["Infinity"]
str1.match(-Infinity);  // returns ["-Infinity"]
str2.match(65);         // returns ["65"]
str2.match(+65);        // A number with a positive sign. returns ["65"]
str3.match(null);       // returns ["null"]
```

repeat()	Returns a new string with a specified number of copies of an  string

```JS
'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (o número será convertido para inteiro)
'abc'.repeat(1/0);  // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() é um método genérico)
```

replace()	Searches a string for a specified value, or a regular expression, and
returns a new string where the specified values are replaced

```JS
var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
```

search()	Searches a string for a specified value, or regular expression, and returns the position of the match

```JS
function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contem ';
  } else {
    midstring = ' nao contem ';
  }
  console.log(str + midstring + re);
}
```

slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters

substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

```JS
var str = 'abcdefghij';
console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc'
console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): hi'
console.log('(-3): '     + str.substr(-3));     // '(-3): hij'
console.log('(1): '      + str.substr(1));      // '(1): bcdefghij'
console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
console.log('(20, 2): '  + str.substr(20, 2));  // '(20, 2): '
```

```
substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters
toString()	Returns the value of a String object
toUpperCase()	Converts a string to uppercase letters
trim()	Removes whitespace from both ends of a string
valueOf()	Returns the primitive value of a String object
```

### Escopo de variáveis

Variables which are used without the var keyword are automatically created in the global scope. (mesmo dentro de funções)
var dentro de função cria uma variavel com escopo local
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

### Arrays

#### Array Properties

constructor	Returns the function that created the Array object's prototype
length	Sets or returns the number of elements in an array
prototype	Allows you to add properties and methods to an Array object

#### Array Methods

Method	Description

```
concat()	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions
entries()	Returns a key/value pair Array Iteration Object
every()	Checks if every element in an array pass a test
fill()	Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test
find()	Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
Array.prototype.flat() The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
Array.prototype.flatMap() The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.
forEach()	Calls a function for each array element
from()	Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
keys()	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
map()	Creates a new array with the result of calling a function for each array element
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array
```

Method Example

concat()	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions

```Js
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
```

entries()	Returns a key/value pair Array Iteration Object
every()	Checks if every element in an array pass a test
fill()	Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test

```JS
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```

find()	Returns the value of the first element in an array that pass a test

```JS
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12
```

findIndex()	Returns the index of the first element in an array that pass a test

Array.prototype.flat()

```Js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

Array.prototype.flatMap()

```JS
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); 
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

```JS
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

forEach()	Calls a function for each array element

Exemplo :
loops aninhados

```JS

 arr1.forEach(val1 => (
    arr2.forEach(val2 => (
      console.log(val1 ,val2) 
    )
  )) 
  );

```

Exemplo : Produz uma função myMap que utiliza um this.forEach para aplicar a função do callback nas entradas

```JS
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```

Exemplo : Produz uma função myMap que utiliza um for para aplicar a função do callback nas entradas

```JS
// The global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];

  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));  /// this se refere ao objeto que chama a funcao (s)
  }
  // Add your code above this line

  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```

from()	Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string

```JS
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

keys()	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
map()	Creates a new array with the result of calling a function for each array element
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array

#### Criação e Inicialização

```Javascript
const arr = [1,2,3];
ou

const arr = new Array(1,2,3);

ou

const persons = Array.of('Luiz', 'Dani")  ;
ou
const numerosEPessoas = Array.of('Luiz', 1)  ;
ou
const numerosEPessoas = Array(3)  ;  /// cria uma array com 3 pos vazias
ou
const numerosEPessoas = Array(3,1)  ;  /// cria um array com 3 e 1

Array.from(origem) /// cria uma nova instancia de array a partir de um parâmetro array-like ou iterable object

const divArray = Array.from (divs)  /// cria um array a partir do objeto div (que no exemplo do curso era um NodeList). A partir daí pode-se utilizar funções de array como pop , shift , etc
```

##### Fill

O método fill é um método mutável, ele irá mudar o objeto em si, e retorná-lo, não somente uma cópia do objeto.

```Javascript
arr.fill(valor[, ínicio = 0[, fim = this.length]]) 
[1, 2, 3].fill(4);               // [4, 4, 4]   preenche com 4 tudo 
[1, 2, 3].fill(4, 1);            // [1, 4, 4]   preenche com 4 a partir da posicao 1 
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]   preenche com 4 a partir da posicao 1 até 2 
Array(3).fill(4);                // [4, 4, 4]   preenche um vetor de tres posições com 4 
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}
```

/*
Operações com arrays
*/

```Js
var myArray1 = [["Bulls", 23], ["White Sox", 45]];

var myArray2 = [50,60,70];

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];   /// array multidimensional
```

// indexação :

```Js
console.log("indexação "); 
console.log(arr[3]); // equals [[10,11,12], 13, 14]
console.log(arr[3][0]); // equals [10,11,12]
console.log(arr[3][0][1]); // equals 11
```

/// concatenação

```Js
console.log("Concatenação "); 
const juntos = myArray2.concat(myArray2) ; // faz um merge 
console.log(juntos); 


const array1 = [1,2,3,4,5];
```

#### Adicionando e removendo elementos arrays

```Javascript
var removedFromMyArray=array.push();  /// adiciona ultima pos
var removedFromMyArray=array.pop();  /// remove ultimo pos
var removedFromMyArray=array.shift(); // remove primeiro pos e retorna o elemento removido 
const tamanho  = myArray.unshift(["Paul",35]); /// adiciona na primeira posicao ao ser aplicado, retorna o tamanho do array  
const alimentos = frutas.concat(salgados) ; // faz um merge concatenando em alimentos o array salgados e frutas
```

#### Iterando vetores (arrays)

```Javascript
const arr = [1,2,3,4,5];  
arr.forEach((value,index) => {console.log(`${index}:${value}`)});

frutas.forEach((fruta,index,arr) => console.log(index,fruta,arr));

[id/name]: http://link-url/
```

```Javascript
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
   for (var j=0; j < arr[i].length; j++) {
      product*=arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
```

#### Métodos de Arrays

##### Join

transformando um array em outro tipo de dados
join junta todos os elementos de um array separados por um delimitar e retorna uma string

```Javascript
const arr = [1,2,3,4,5];  
arr.join('-'); /// "1-2-3-4-5"
```

##### slice

Imutável não muda o array Fatia o array

```Javascript
const arr = [1,2,3,4,5];  
Arr.slice(0,2); // [1,2]
Arr.slice(2); // [3,4,5]
Arr.slice(-1); // [5]
Arr.slice(-3); // [3,4,5]
```

exemplos slice Imutavel

```JS
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

```Js
console.log("Slice - Imutável retira uma Fatia , não muda o vetor"); 
console.log(array1.slice(0,2)); //a partir da pos 0 pega 2 elementos 
                                //e cria um novo vetor [1,2] 
console.log(array1.slice(1)); // a partir da pos 1 pega até o fim
console.log(array1.slice(-1)); // [5] pega ao contrario  até pos -1 
console.log(array1.slice(-3)); // [3,4,5] pega ao contrario até pos -3 
console.log(array1); 

var ourArray = ["Stimpson", "J", ["cat"]];
console.log("adicionando e removendo elementos "); 
/// adicionando e removendo elementos 
myArray2.push(2); /// adiciona ultima posicao 
console.log(myArray2.pop()); /// remove ultima posicao sem args 
                             /// retorna o valor popad
var removedFromOurArray = ourArray.shift();/// remove da frente 
var addedFromOurArray = ourArray.unshift("batata");/// adiciona na frente 
console.log(myArray1[0][0] + myArray1[1][0]); 
console.log(myArray2); 
console.log(ourArray);
```

##### splice

```Js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); /// o segundo parametro 0 significa insercao

// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); 
// replaces 1 element at index 4 trocar não é inserir 
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

```

Mutável, Altera o array adicionando novos elementos enquanto remove elementos antigos

```Javascript
const arr = [1,2,3,4,5];  
Arr.splice(2); // remove a partir da posicao 2 [3,4,5] 
console.log(arr); /// [1,2]
Arr.splice(0,0,'first'); // [] /// inicio, quanto itens remove o que adicionar a partir da primeira posicao 
console.log(arr); /// ["fisrt",1,2];
```

//splice : Mutavel, Altera o array adicionando

// novos elementos enquanto remove elementos antigos

```Js
console.log("Splice - Mutável Altera o array adicionando novos elementos enquanto remove elementos antigos  ");
const arr2 = [1,2,3,4,5];
arr2.splice(2); // remove a partir da posicao 2
console.log(arr2); /// [1,2]
arr2.splice(0,1,'first'); // [] /// inicio, quanto
//itens remove o que adicionar
//a partir da primeira posicao
console.log(arr2); /// ["first",1,2];
```

##### map

Imutavel  Retorna um novo array de mesmo tamanho iterando cada item de um array

```Javascript
const arr = [1,2,3,4,5];  
arr.map (value => value *2); // retorna um novo array [2,4,6,8,10]
```

##### flat

Imutavel  Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth)

```Javascript
const arr = [1,2,[3,4]];  
arr.flat(); // retorna um novo array com profundidade 1 [1,2,3,4]
arr.flat(2); // retorna um novo array com profundidade 2 , neste caso não terá diferenca mas se houvessem outros arrays dentro de arr só iria até a segunda camanda de arr
```

dica : o método flat remove espaços vazios do array:

```JS
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

##### flatMap

Imutavel Retorna um novo array assim como faz a função map e executa um flat de profundidade 1

```Javascript
const arr = [1,2,3,4];  
arr.flatMap (value => [value *2]); // retorna um novo array [2,4,6,8]
arr.flatMap (value => [[value *2]]); // retorna um novo array [[2],[4],[6],[8]]
```

```Javascript
console.log(" flatMap   Retorna um novo array assim como faz a função map e executa um flat de profundidade 1");  
const arr11 = [1,2,3,4];  
console.log(arr11.flatMap (value => [value *2])); // retorna um novo array [2,4,6,8]
console.log(arr11.flatMap (value => [[value *2]])); // retorna um novo array [[2],[4],[6],[8]]


let arr21 = ["it's Sunny in", "", "California"];
 
console.log("arr21 "+ arr21.map(x=>x.split(" ")));
// [["it's","Sunny","in"],[""],["California"]]  vetor multidimensional 
 console.log("arr21 " + arr21.flatMap(x => x.split(" ")));
// ["it's","Sunny","in", "", "California"]  vetor de uma dimensao flateado
```

##### reduce

Retorna um novo tipo de dado iterando cada posicao de um array

```Javascript
const arr = [1,2,3,4,5];  
arr.reduce ((total,value)=> total+= value, 0); /// para cada item executa afuncao o primeiro arg eh o retorno comeca com um inteiro com valor 0
```

##### keys

retorna um array iterator que contem as chaves para cada elemento do array

```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.keys();
arrIterator.next(); {value:0,done:false};
arrIterator.next(); {value:1,done:false};
arrIterator.next(); {value:2,done:false};
arrIterator.next(); {value:3,done:true};
```

##### values

retorna um array iterator que contém os valores para cada elemento do array

```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.values();
arrIterator.next(); {value:1,done:false};
arrIterator.next(); {value:2,done:false};
arrIterator.next(); {value:3,done:false};
arrIterator.next(); {value:4,done:true};
```

##### entries

retorna um par chave valor para cada elemento do array

```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.entries();
arrIterator.next(); {value:[0,1],done:false};
arrIterator.next(); {value:[1,2],done:false};
arrIterator.next(); {value:[2,3],done:false};
arrIterator.next(); {value:[3,4],done:true};
```

#### Buscar elementos

##### find

Retorna o primeiro item de um array que satisfaz uma condição

```Javascript
const arr = [1,2,3,4];  
const firstGreatherThanTwo = arr.find (value => value > 2) ; /// 3
```

```JS
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12
```

#####findIndex

Retorna o indice do primeiro item de um array que satisfaz uma condição

```Javascript
const arr = [1,2,3,4];  
const firstGreatherThanTwo = arr.findIndex (value => value > 2) ; /// 2
```

##### filter

Retorna um array com todos os elementos que satisfazem uma condição

```Javascript
const arr = [1,2,3,4];  
const allValuesGreatherThanTwo = arr.filter (value => value > 2) ; /// [3,4]
```

##### indexOf

Retorna o primeiro índice em que um elemento pode ser encontrado em um array

```Javascript
const arr = [1,3,3,4,3];  
const firstIndexOfItem = arr.indexOf(3); /// 1
```

lastIndexOf

Retorna o ultimo índice em que um elemento pode ser encontrado em um array

```Javascript
const arr = [1,3,3,4,3];  
const firstIndexOfItem = arr.indexOf(3); /// 4
```

##### includes

Retorna um booleano verificando se determinado elemento existe no array

```Javascript
const arr = [1,3,3,4,3];  
const hasItemOne = arr.includes(1); /// true 
const hasItemTwo = arr.includes(2); /// false
```

##### some

Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

```Javascript
const arr = [1,3,3,4,3];  
const hasSomeEvenNumber = arr.some (value => value % 2 ===0 ) ; /// true
```

##### every

Retorna um booleano verificando se todos os itens de um array satisfazem uma condição

```Javascript
const arr = [1,3,3,4,3];  
const allEvenNumbers = arr.every (value => value % 2 ===0 ) ; /// false
```

#### Ordenação

##### Sort

ordenacao de acordo com condição

```Javascript
students.sort((current,next) => current.grade - next.grade) /// ordena do menor pro maior 
students.sort((current,next) => next.grade - current.grade) /// ordena do maior pro menor
```

##### reverse

inverte o array

```Javascript
const arr = [1,2,3,4,5];  
arr.reverse(); /// [5 , 4 , 3 , 2 , 1]
```

#### Nested arrays

Site bom com documentação

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

```Javascript
var myArray = [[],[]];

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];// Retorna 8
```

### o tipo Undefined

se uma função nao retorna nada , seu retorno é undefined.

=== compara valor e tipo

switch case faz === nas comparações

```Javascript
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case "a":
    answer="apple";
    break;
    case "b":
    answer="bird";
    break;
    case "c":
    answer="cat";
    break;
    default:
    answer="stuff";
    break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

#### Retornando undefined

```Javascript
function retornaUndefined (){
return ; 
}
```

### Objects

```Javascript
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

Existem duas formas de acessar as propriedades de um objeto.

- Notação ponto .
- Notação bracket []

A notação ponto é usada quando você sabe o nome da propriedade de antemão

Se a prop não existe e vc quer criar use a notação ponto e inicialize (se nao inicializar nao vai criar )

Para acessar o valor use [][]

Se a propriedade que você está tentando acessar possui um espaço no nome (ou já existe) você precisa da notação bracker []

Se ela já existe ou é uma variável , use bracket sem aspas
Criar com aspas fará ela criar uma prop com  o nome da variável e nao com o conteúdo da variável .

#### Delete

Deleta uma propriedade de um objeto

```Javascript
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries ;
// Only change code above this line

console.log(foods);
```

#### .hasOwnProperty()

We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

```Javascript
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
```

Outro exempo usando in

```Javascript
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  return ( users.hasOwnProperty('Alan') &&   users.hasOwnProperty('Jeff') &&  
   'Sarah' in users &&   'Ryan' in users ) ;
  // Only change code above this line
}

console.log(isEveryoneHere(users));

```

JavaScript Object Notation or JSON is a related data interchange format used to store data.

```Javascript
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // acessando glove box
```

### Função recursiva

primeiro a função recursiva vai até a ultima opção e depois outras funções são ativadas exemplo :

```Javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
```

At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

```Javascript
/// preenche recursivamente de startNum até end Num 
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) return [startNum];
    const arr = rangeOfNumbers(startNum+1,endNum);
    arr.unshift(startNum);
    return arr;
};
```

### this

A palavra-chave this comporta-se um pouco diferente em Javascript se comparado com outras linguagens. Também possui algumas diferenças entre o modo estrito e o modo não estrito.

Em muitos casos, o valor this é determinado pela forma como a função é chamada. Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada. ES5 introduziu o método bind para estabelecer o valor this da função, independentemente de como ela seja chamada, e ECMAScript 2015 introduziu o arrow functions, cujo this é lexicalmente delimitado (o valor this é estabelecido segundo o escopo de execução no qual está inserido).

#### Contexto global

No contexto de execução global (fora de qualquer função), this refere-se ao objeto global, seja em modo estrito ou não.

```JS
console.log(this.document === document); // true
// Em navegadores web, o objeto window é também o objeto global:

console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

#### Contexto de função

Dentro de uma função, o valor de this depende de como a função é chamada.

Chamada simples
Como o código a seguir não está no modo estrito, o valor de this não é definido pela chamada. Por padrão, this será o objeto global que no navegador é o window.

```JS
function f1(){
  return this;
}

// No navegador
f1() === window; // true
```

#### Modo estrito

Em modo estrito, o valor de this permanece seja qual for o definido ao entrar no contexto de execução, assim, no caso a seguir, this por padrão será indefinido (undefined):

```JS
function f2(){
  "use strict"; // assume modo estrito
  return this;
}

f2() === undefined; // true
```

Portanto, em modo estrito, se this não for definido durante o contexto da execução, ele permanecerá indefinido (undefined).

No segundo exemplo, this deveria ser undefined, porque f2 foi chamada diretamente e não como um método ou popriedade de um objeto (ou seja, window.f2()). Esta característica não foi implementada em alguns navegadores quando começaram a dar suporte ao strict mode (modo estrito). Como resultado, eles incorretamente retornavam o objeto window.

### Funções Arrow (seta)

Nas arrow functions (funções seta), o this é definido lexicalmente, isto é,
seu valor é definido pelo contexto de execução onde está inserido. Em um código global, this assume o objeto global:

```JS
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

Não importa como foo é chamado, o this continuará como o objeto global.
Isto continua verdadeiro mesmo se chamá-lo como método de um determinado objeto
(o que normalmente definiria seu this ao objeto), com call ou apply ou bind é usado:

// Chama como um método de um objeto

```JS
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true

// Tentativa de definir this usando call
console.log(foo.call(obj) === globalObject); // true

// Tentantiva de definir this usando bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
```

Não importa como for, o this do foo mantém o valor que recebeu quando foi criado
(no exemplo acima, o objeto global).
O mesmo se aplica para funções arrow criadas dentro de outras funções: seus this são definidos em seus respectivos contextos de execução.

// Cria obj com um método bar que retorna uma função que
// retorna seu this. A função retornada é criada como
// uma função arrow, para que seu this esteja permanentemente
// ligado ao this da função que a envolve. O valor de bar pode ser // definido na chamada, que por sua vez define o valor da função
// retornada.

```JS
var obj = { bar : function() {
                    var x = (() => this);
                    return x;
                  }
          };
```

// Chama bar como método de obj, configurando seu this como obj
// Assina à variável fn uma referência para a função retornada

```JS
var fn = obj.bar();
```

// Chamar fn, sem definir this, por padrão, referenciaria
// ao objeto global ou undefined em modo estrito (strict mode)

```JS
console.log(fn() === obj); // true
```

No exemplo acima, a função (chamemos função anônima A) atribuída a obj.bar retorna outra função (chamemos função anônima B) que é criada como uma função arrow (seta).
Como resultado, o this da função B é permanentemente definido como o this de obj.bar (função A) quando chamado. Quando a função retornada (função B) é chamada, seu this sempre será aquele que foi definido inicialmente. No exemplo de código acima, o this da função B é definido com o this da função A, que é obj, por isso permanece definido para obj, mesmo quando chamado de uma maneira que normalmente definiria seu this como undefined ou como objeto global (ou qualquer outro método, como naquele exemplo anterior de contexto de execução global).

### Como método de um objeto

Quando uma função é chamada como um método de um objeto, seu this toma o valor do objeto pertencente ao método chamado.

No exemplo a seguir, quando o.f() é invocado, o this dentro da função é vinculado ao objeto o.

```JS
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37
```

Observe que esse comportamento não é afetado mesmo pela forma como (ou onde) a função foi definida.
No exemplo anterior, nós definimos a função in-line (em linha) como o membro f durante a definição de o.
No entanto, poderíamos ter apenas facilmente definido a função primeiro e depois anexado a o.f. Fazendo isso resulta no mesmo comportamento:

```JS
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // registra 37
```

Isto demonstra que é importante apenas que a função foi chamada a partir do membro f de o.

Da mesma forma, a vinculação de this só é afetada pela referência do membro mais imediato.
No exemplo a seguir, quando invocamos a função, podemos chamá-la como um método g do objeto o.b.
Desta vez, durante a execução, o this dentro da função irá se referir a o.b. O fato do objeto ser um membro
de o não tem qualquer consequência; a referência mais imediata é tudo que importa.

```JS
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // registra 42
```

### this na cadeia de protótipos (prototype chain) do objeto

A mesma noção vale para métodos definidos em algum lugar da cadeia de protótipos do objeto. Se o método está na cadeia de protótipo de um objeto, this refere-se ao objeto que é proprietário do método chamado, como se o método estivesse no objeto.

```JS
var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

Neste exemplo, o objeto atribuído à variável p não tem sua própria propriedade f, ele o herda de seu protótipo. Mas não importa que a procura por f finalmente encontre um membro com esse nome em o; a procura começou como uma referência para a p.f, portanto o this dentro da função recebe o valor do objeto referido como p. Isto é, já que f é chamado como um método de p, seu this refere-se a p. Este é um recurso interessante de herança prototípica do JavaScript.

this com seletores (getter) ou modificadores (setter)
Mais uma vez, a mesma noção se aplica quando uma função é chamada a partir de um getter ou setter. A função usada como getter ou setter tem seu this ligado ao objeto do qual a propriedade está sendo modificada ou selecionada.

```JS
function modulus(){
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
  re: 1,
  im: -1,
  get phase(){
    return Math.atan2(this.im, this.re);
  }
};

Object.defineProperty(o, 'modulus', {
    get: modulus, enumerable:true, configurable:true});

console.log(o.phase, o.modulus); // logs -0.78 1.4142
```

### Como um construtor (constructor)

Quando a função é usada com um construtor (com a palavra chave new), seu this é vinculado ao novo objeto sendo contruído.

Nota: enquanto o padrão para um construtor é retornar o objeto referenciado por this, ele pode retornar, ao invés, algum outro objeto (se o valor de retorno não é um objeto, então o objeto this é retornado).

```JS
/*
 * Contrutores funcionam da seguinte forma:
 *
 * function MyConstructor(){
 *   // O código do corpo da função vai aqui.  
 *   // Criam-se propriedades sobre |this| como
 *   // desejado, assinando-os. Ex.,
 *   this.fum = "nom";
 *   // etc...
 *
 *   // Se a função tem uma instrução que
 *   // retorna um objeto, esse objeto será o 
 *   // resultado da expressão |new|. Caso contrário, 
 *   // o resultado da expressão é o objeto 
 *   // atualmente vinculado a |this|
 *   // (i.e., o caso mais comumente visto).
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // registra 38
```

No último exemplo (C2), porque um objeto foi retornado durante a construção, o novo objeto que this foi vinculado simplesmente é descartado. (Isso essencialmente faz da expressão "this.a = 37;" código morto. Não é exatamente morto, pois ele é executado, mas ele pode ser eliminado sem efeitos colaterais.)

call e apply
Quando uma função usa a palavra-chave this em seu corpo,
o seu valor pode ser vinculado a um determinado objeto na chamada
utilizando os métodos call or apply que todas as funções herdam de Function.prototype.

```JS
function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};
```

// O primeiro parâmetro é o objeto a usar como
// 'this'; subsequentes parâmetros são passados como
// argumentos na função chamada

```JS
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
```

// O primeiro parâmetro é o objeto a usar como
// 'this', o segundo é um arranjo (array) cujos
// membros são usados como argumentos na função chamada

```JS
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

Observe que, com call e apply, se o valor passado como this não for um objeto, será feita uma tentativa de convertê-lo em um objeto usando a operação interna ToObject. Portanto, se o valor passado é um primitivo como 7 ou 'foo', ele será convertido para um objeto usando o construtor relacionado, de modo que o número primitivo 7 é convertido em um objeto, como realizado por new Number(7), e a cadeia de caracteres 'foo' em um objeto, como realizado por new String(' foo '), por exemplo.

```JS
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
```

O método bind
ECMAScript 5 introduziu Function.prototype.bind. Chamando f.bind(algumObjeto) cria-se uma nova função com o mesmo corpo e escopo que f, mas onde o this ocorrer na função original, na nova função ele será permanentemente ligado ao primeiro argumento de bind, independentemente de como a função esteja sendo usada.

```JS
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"}); 
console.log(g()); // azerty

var h = g.bind({a: 'yoo'}); // bind só funciona uma vez!
console.log.(h()); // azerty

var o = {a:37, f:f, g:g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

### Como um manipulador de eventos DOM

Quando uma função é usada como um manipulador de eventos, seu this está definido para o elemento do evento a partir do qual foi disparado
(alguns navegadores não seguem essa convenção para os listeners adicionados dinamicamente com métodos que não sejam addEventListener).

```JS
// Quando chamado como listener, transforma o elemento blue 
// relacionado
function bluify(e){
  // sempre true
  console.log(this === e.currentTarget); 
  // true quando currentTarget e target são o mesmo objeto
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Obtém uma lista de todo elemento no documento
var elements = document.getElementsByTagName('*');

// Adiciona bluify com um click listener (escutador de click)
// para que quando o elemento seja clicado se torne azul 
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}
```

### Em um manipulador de evento in-line (em linha)

Quando o código é chamado de um manipulador de evento in-line, seu this está definido para o elemento DOM em que o listener é colocado:

<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
O alerta acima mostra button. Note, porém, que apenas o código exterior tem um this definido desta maneira:

<button onclick="alert((function(){return this}()));">
Show inner this
</button>
Neste caso, o this da função interior não está definido, portanto ele retorna o objeto global/objeto window (ou seja, o objeto padrão no modo não-estrito onde this não está definido pela chamada).

### Window Object Properties

Property	Description
closed	Returns a Boolean value indicating whether a window has been closed or not
console	Returns a reference to the Console object, which provides methods for logging information to the browser's console (See Console object)
defaultStatus	Sets or returns the default text in the statusbar of a window
document	Returns the Document object for the window (See Document object)
frameElement	Returns the iframe element in which the current window is inserted
frames	Returns all iframe elements in the current window
history	Returns the History object for the window (See History object)
innerHeight	Returns the height of the window's content area (viewport) including scrollbars
innerWidth	Returns the width of a window's content area (viewport) including scrollbars
length	Returns the number of iframe elements in the current window
localStorage	Allows to save key/value pairs in a web browser. Stores the data with no expiration date
location	Returns the Location object for the window (See Location object)
name	Sets or returns the name of a window
navigator	Returns the Navigator object for the window (See Navigator object)
opener	Returns a reference to the window that created the window
outerHeight	Returns the height of the browser window, including toolbars/scrollbars
outerWidth	Returns the width of the browser window, including toolbars/scrollbars
pageXOffset	Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
pageYOffset	Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
parent	Returns the parent window of the current window
screen	Returns the Screen object for the window (See Screen object)
screenLeft	Returns the horizontal coordinate of the window relative to the screen
screenTop	Returns the vertical coordinate of the window relative to the screen
screenX	Returns the horizontal coordinate of the window relative to the screen
screenY	Returns the vertical coordinate of the window relative to the screen
sessionStorage	Allows to save key/value pairs in a web browser. Stores the data for one session
scrollX	An alias of pageXOffset
scrollY	An alias of pageYOffset
self	Returns the current window
status	Sets or returns the text in the statusbar of a window
top	Returns the topmost browser window
Window Object Methods
Method	Description
alert()	Displays an alert box with a message and an OK button
atob()	Decodes a base-64 encoded string
blur()	Removes focus from the current window
btoa()	Encodes a string in base-64
clearInterval()	Clears a timer set with setInterval()
clearTimeout()	Clears a timer set with setTimeout()
close()	Closes the current window
confirm()	Displays a dialog box with a message and an OK and a Cancel button
focus()	Sets focus to the current window
getComputedStyle()	Gets the current computed CSS styles applied to an element
getSelection()	Returns a Selection object representing the range of text selected by the user
matchMedia()	Returns a MediaQueryList object representing the specified CSS media query string
moveBy()	Moves a window relative to its current position
moveTo()	Moves a window to the specified position
open()	Opens a new browser window
print()	Prints the content of the current window
prompt()	Displays a dialog box that prompts the visitor for input
requestAnimationFrame()	Requests the browser to call a function to update an animation before the next repaint
resizeBy()	Resizes the window by the specified pixels
resizeTo()	Resizes the window to the specified width and height
scroll()	Deprecated. This method has been replaced by the scrollTo() method.
scrollBy()	Scrolls the document by the specified number of pixels
scrollTo()	Scrolls the document to the specified coordinates
setInterval()	Calls a function or evaluates an expression at specified intervals (in milliseconds)
setTimeout()	Calls a function or evaluates an expression after a specified number of milliseconds
stop()	Stops the window from loading


### The HTML DOM Attr Object

The Attr Object
In the HTML DOM, the Attr object represents an HTML attribute.

An HTML attribute always belongs to an HTML element.

The NamedNodeMap Object
In the HTML DOM, the NamedNodeMap object represents an unordered collection of an elements attribute nodes.

Nodes in a NamedNodeMap can be accessed by name or by index (number).

Properties and Methods
Property / Method	Description
attr.isId	Returns true if the attribute is of type Id, otherwise it returns false
attr.name	Returns the name of an attribute
attr.value	Sets or returns the value of the attribute
attr.specified	Returns true if the attribute has been specified, otherwise it returns false

nodemap.getNamedItem()	Returns a specified attribute node from a NamedNodeMap
nodemap.item()	Returns the attribute node at a specified index in a NamedNodeMap
nodemap.length	Returns the number of attribute nodes in a NamedNodeMap
nodemap.removeNamedItem()	Removes a specified attribute node
nodemap.setNamedItem()	Sets the specified attribute node (by name)

### The HTML DOM Document Object

The Document Object
When an HTML document is loaded into a web browser, it becomes a document object.

The document object is the root node of the HTML document.

Document Object Properties and Methods
The following properties and methods can be used on HTML documents:

Property / Method	Description
activeElement	Returns the currently focused element in the document
addEventListener()	Attaches an event handler to the document
adoptNode()	Adopts a node from another document
anchors	Returns a collection of all a> elements in the document that have a name attribute
applets	Returns a collection of all applet> elements in the document
baseURI	Returns the absolute base URI of a document
body	Sets or returns the document's body (the <body> element)
close()	Closes the output stream previously opened with document.open()
cookie	Returns all name/value pairs of cookies in the document
charset	Deprecated. Use characterSet instead. Returns the character encoding for the document
characterSet	Returns the character encoding for the document
createAttribute()	Creates an attribute node
createComment()	Creates a Comment node with the specified text
createDocumentFragment()	Creates an empty DocumentFragment node
createElement()	Creates an Element node
createEvent()	Creates a new event
createTextNode()	Creates a Text node
defaultView	Returns the window object associated with a document, or null if none is available.
designMode	Controls whether the entire document should be editable or not.
doctype	Returns the Document Type Declaration associated with the document
documentElement	Returns the Document Element of the document (the <html> element)
documentMode	Returns the mode used by the browser to render the document
documentURI	Sets or returns the location of the document
domain	Returns the domain name of the server that loaded the document
domConfig	Obsolete. Returns the DOM configuration of the document
embeds	Returns a collection of all <embed> elements the document
execCommand()	Invokes the specified clipboard operation on the element currently having focus.
forms	Returns a collection of all <form> elements in the document
fullscreenElement	Returns the current element that is displayed in fullscreen mode
fullscreenEnabled()	Returns a Boolean value indicating whether the document can be viewed in fullscreen mode
getElementById()	Returns the element that has the ID attribute with the specified value
getElementsByClassName()	Returns a HTMLCollection containing all elements with the specified class name
getElementsByName()	Returns a HTMLCollection containing all elements with a specified name
getElementsByTagName()	Returns a HTMLCollection containing all elements with the specified tag name
hasFocus()	Returns a Boolean value indicating whether the document has focus
head	Returns the <head> element of the document
images	Returns a collection of all <img> elements in the document
implementation	Returns the DOMImplementation object that handles this document
importNode()	Imports a node from another document
inputEncoding	Returns the encoding, character set, used for the document
lastModified	Returns the date and time the document was last modified
links	Returns a collection of all a> and area> elements in the document that have a href attribute
normalize()	Removes empty Text nodes, and joins adjacent nodes
normalizeDocument()	Removes empty Text nodes, and joins adjacent nodes
open()	Opens an HTML output stream to collect output from document.write()
querySelector()	Returns the first element that matches a specified CSS selector(s) in the document
querySelectorAll()	Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document
readyState	Returns the (loading) status of the document
referrer	Returns the URL of the document that loaded the current document
removeEventListener()	Removes an event handler from the document (that has been attached with the addEventListener() method)
renameNode()	Renames the specified node
scripts	Returns a collection of script> elements in the document
strictErrorChecking	Sets or returns whether error-checking is enforced or not
title	Sets or returns the title of the document
URL	Returns the full URL of the HTML document
write()	Writes HTML expressions or JavaScript code to a document
writeln()	Same as write(), but adds a newline character after each statement

### The HTML DOM Element Object

The Element Object
In the HTML DOM, the Element object represents an HTML element, like P, DIV, A, TABLE, or any other HTML element.

Properties and Methods
The following properties and methods can be used on all HTML elements:

Property / Method	Description
accessKey	Sets or returns the accesskey attribute of an element
addEventListener()	Attaches an event handler to the specified element
appendChild()	Adds a new child node, to an element, as the last child node
attributes	Returns a NamedNodeMap of an element's attributes
blur()	Removes focus from an element
childElementCount	Returns the number of child elements an element has
childNodes	Returns a collection of an element's child nodes (including text and comment nodes)
children	Returns a collection of an element's child element (excluding text and comment nodes)
classList	Returns the class name(s) of an element
className	Sets or returns the value of the class attribute of an element
click()	Simulates a mouse-click on an element
clientHeight	Returns the height of an element, including padding
clientLeft	Returns the width of the left border of an element
clientTop	Returns the width of the top border of an element
clientWidth	Returns the width of an element, including padding
cloneNode()	Clones an element
closest()	Searches up the DOM tree for the closest element which matches a specified CSS selector
compareDocumentPosition()	Compares the document position of two elements
contains()	Returns true if a node is a descendant of a node, otherwise false
contentEditable	Sets or returns whether the content of an element is editable or not
dir	Sets or returns the value of the dir attribute of an element
exitFullscreen()	Cancels an element in fullscreen mode
firstChild	Returns the first child node of an element
firstElementChild	Returns the first child element of an element
focus()	Gives focus to an element
getAttribute()	Returns the specified attribute value of an element node
getAttributeNode()	Returns the specified attribute node
getBoundingClientRect()	Returns the size of an element and its position relative to the viewport
getElementsByClassName()	Returns a collection of all child elements with the specified class name
getElementsByTagName()	Returns a collection of all child elements with the specified tag name
hasAttribute()	Returns true if an element has the specified attribute, otherwise false
hasAttributes()	Returns true if an element has any attributes, otherwise false
hasChildNodes()	Returns true if an element has any child nodes, otherwise false
id	Sets or returns the value of the id attribute of an element
innerHTML	Sets or returns the content of an element
innerText	Sets or returns the text content of a node and its descendants
insertAdjacentElement()	Inserts a HTML element at the specified position relative to the current element
insertAdjacentHTML()	Inserts a HTML formatted text at the specified position relative to the current element
insertAdjacentText()	Inserts text into the specified position relative to the current element
insertBefore()	Inserts a new child node before a specified, existing, child node
isContentEditable	Returns true if the content of an element is editable, otherwise false
isDefaultNamespace()	Returns true if a specified namespaceURI is the default, otherwise false
isEqualNode()	Checks if two elements are equal
isSameNode()	Checks if two elements are the same node
isSupported()	Returns true if a specified feature is supported on the element
lang	Sets or returns the value of the lang attribute of an element
lastChild	Returns the last child node of an element
lastElementChild	Returns the last child element of an element
matches()	Returns a Boolean value indicating whether an element is matched by a specific CSS selector or not
namespaceURI	Returns the namespace URI of an element
nextSibling	Returns the next node at the same node tree level
nextElementSibling	Returns the next element at the same node tree level
nodeName	Returns the name of a node
nodeType	Returns the node type of a node
nodeValue	Sets or returns the value of a node
normalize()	Joins adjacent text nodes and removes empty text nodes in an element
offsetHeight	Returns the height of an element, including padding, border and scrollbar
offsetWidth	Returns the width of an element, including padding, border and scrollbar
offsetLeft	Returns the horizontal offset position of an element
offsetParent	Returns the offset container of an element
offsetTop	Returns the vertical offset position of an element
outerHTML	Sets or returns the content of an element (including the start tag and the end tag)
outerText	Sets or returns the outer text content of a node and its descendants
ownerDocument	Returns the root element (document object) for an element
parentNode	Returns the parent node of an element
parentElement	Returns the parent element node of an element
previousSibling	Returns the previous node at the same node tree level
previousElementSibling	Returns the previous element at the same node tree level
querySelector()	Returns the first child element that matches a specified CSS selector(s) of an element
querySelectorAll()	Returns all child elements that matches a specified CSS selector(s) of an element
remove()	Removes the element from the DOM
removeAttribute()	Removes a specified attribute from an element
removeAttributeNode()	Removes a specified attribute node, and returns the removed node
removeChild()	Removes a child node from an element
removeEventListener()	Removes an event handler that has been attached with the addEventListener() method
replaceChild()	Replaces a child node in an element
requestFullscreen()	Shows an element in fullscreen mode
scrollHeight	Returns the entire height of an element, including padding
scrollIntoView()	Scrolls the specified element into the visible area of the browser window
scrollLeft	Sets or returns the number of pixels an element's content is scrolled horizontally
scrollTop	Sets or returns the number of pixels an element's content is scrolled vertically
scrollWidth	Returns the entire width of an element, including padding
setAttribute()	Sets or changes the specified attribute, to the specified value
setAttributeNode()	Sets or changes the specified attribute node
style	Sets or returns the value of the style attribute of an element
tabIndex	Sets or returns the value of the tabindex attribute of an element
tagName	Returns the tag name of an element
textContent	Sets or returns the textual content of a node and its descendants
title	Sets or returns the value of the title attribute of an element
toString()	Converts an element to a string

### HTML DOM Events

HTML DOM Events
HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.

Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

For a tutorial about Events, read our JavaScript Events Tutorial.

Event	Description	Belongs To
abort	The event occurs when the loading of a media is aborted	UiEvent, Event
afterprint	The event occurs when a page has started printing, or if the print dialogue box has been closed	Event
animationend	The event occurs when a CSS animation has completed	AnimationEvent
animationiteration	The event occurs when a CSS animation is repeated	AnimationEvent
animationstart	The event occurs when a CSS animation has started	AnimationEvent
beforeprint	The event occurs when a page is about to be printed	Event
beforeunload	The event occurs before the document is about to be unloaded	UiEvent, Event
blur	The event occurs when an element loses focus	FocusEvent
canplay	The event occurs when the browser can start playing the media (when it has buffered enough to begin)	Event
canplaythrough	The event occurs when the browser can play through the media without stopping for buffering	Event
change	The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)	Event
click	The event occurs when the user clicks on an element	MouseEvent
contextmenu	The event occurs when the user right-clicks on an element to open a context menu	MouseEvent
copy	The event occurs when the user copies the content of an element	ClipboardEvent
cut	The event occurs when the user cuts the content of an element	ClipboardEvent
dblclick	The event occurs when the user double-clicks on an element	MouseEvent
drag	The event occurs when an element is being dragged	DragEvent
dragend	The event occurs when the user has finished dragging an element	DragEvent
dragenter	The event occurs when the dragged element enters the drop target	DragEvent
dragleave	The event occurs when the dragged element leaves the drop target	DragEvent
dragover	The event occurs when the dragged element is over the drop target	DragEvent
dragstart	The event occurs when the user starts to drag an element	DragEvent
drop	The event occurs when the dragged element is dropped on the drop target	DragEvent
durationchange	The event occurs when the duration of the media is changed	Event
ended	The event occurs when the media has reach the end (useful for messages like "thanks for listening")	Event
error	The event occurs when an error occurs while loading an external file	ProgressEvent, UiEvent, Event
focus	The event occurs when an element gets focus	FocusEvent
focusin	The event occurs when an element is about to get focus	FocusEvent
focusout	The event occurs when an element is about to lose focus	FocusEvent
fullscreenchange	The event occurs when an element is displayed in fullscreen mode	Event
fullscreenerror	The event occurs when an element can not be displayed in fullscreen mode	Event
hashchange	The event occurs when there has been changes to the anchor part of a URL	HashChangeEvent
input	The event occurs when an element gets user input	InputEvent, Event
invalid	The event occurs when an element is invalid	Event
keydown	The event occurs when the user is pressing a key	KeyboardEvent
keypress	The event occurs when the user presses a key	KeyboardEvent
keyup	The event occurs when the user releases a key	KeyboardEvent
load	The event occurs when an object has loaded	UiEvent, Event
loadeddata	The event occurs when media data is loaded	Event
loadedmetadata	The event occurs when meta data (like dimensions and duration) are loaded	Event
loadstart	The event occurs when the browser starts looking for the specified media	ProgressEvent
message	The event occurs when a message is received through the event source	Event
mousedown	The event occurs when the user presses a mouse button over an element	MouseEvent
mouseenter	The event occurs when the pointer is moved onto an element	MouseEvent
mouseleave	The event occurs when the pointer is moved out of an element	MouseEvent
mousemove	The event occurs when the pointer is moving while it is over an element	MouseEvent
mouseover	The event occurs when the pointer is moved onto an element, or onto one of its children	MouseEvent
mouseout	The event occurs when a user moves the mouse pointer out of an element, or out of one of its children	MouseEvent
mouseup	The event occurs when a user releases a mouse button over an element	MouseEvent
mousewheel	Deprecated. Use the wheel event instead	WheelEvent
offline	The event occurs when the browser starts to work offline	Event
online	The event occurs when the browser starts to work online	Event
open	The event occurs when a connection with the event source is opened	Event
pagehide	The event occurs when the user navigates away from a webpage	PageTransitionEvent
pageshow	The event occurs when the user navigates to a webpage	PageTransitionEvent
paste	The event occurs when the user pastes some content in an element	ClipboardEvent
pause	The event occurs when the media is paused either by the user or programmatically	Event
play	The event occurs when the media has been started or is no longer paused	Event
playing	The event occurs when the media is playing after having been paused or stopped for buffering	Event
popstate	The event occurs when the window's history changes	PopStateEvent
progress	The event occurs when the browser is in the process of getting the media data (downloading the media)	Event
ratechange	The event occurs when the playing speed of the media is changed	Event
resize	The event occurs when the document view is resized	UiEvent, Event
reset	The event occurs when a form is reset	Event
scroll	The event occurs when an element's scrollbar is being scrolled	UiEvent, Event
search	The event occurs when the user writes something in a search field (for <input="search">)	Event
seeked	The event occurs when the user is finished moving/skipping to a new position in the media	Event
seeking	The event occurs when the user starts moving/skipping to a new position in the media	Event
select	The event occurs after the user selects some text (for <input> and <textarea>)	UiEvent, Event
show	The event occurs when a <menu> element is shown as a context menu	Event
stalled	The event occurs when the browser is trying to get media data, but data is not available	Event
storage	The event occurs when a Web Storage area is updated	StorageEvent
submit	The event occurs when a form is submitted	Event
suspend	The event occurs when the browser is intentionally not getting media data	Event
timeupdate	The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)	Event
toggle	The event occurs when the user opens or closes the <details> element	Event
touchcancel	The event occurs when the touch is interrupted	TouchEvent
touchend	The event occurs when a finger is removed from a touch screen	TouchEvent
touchmove	The event occurs when a finger is dragged across the screen	TouchEvent
touchstart	The event occurs when a finger is placed on a touch screen	TouchEvent
transitionend	The event occurs when a CSS transition has completed	TransitionEvent
unload	The event occurs once a page has unloaded (for <body>)	UiEvent, Event
volumechange	The event occurs when the volume of the media has changed (includes setting the volume to "mute")	Event
waiting	The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)	Event
wheel	The event occurs when the mouse wheel rolls up or down over an element	WheelEvent

### HTML DOM Event Properties and Methods

Property/Method	Description	Belongs To
altKey	Returns whether the "ALT" key was pressed when the mouse event was triggered	MouseEvent
altKey	Returns whether the "ALT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
animationName	Returns the name of the animation	AnimationEvent
bubbles	Returns whether or not a specific event is a bubbling event	Event
button	Returns which mouse button was pressed when the mouse event was triggered	MouseEvent
buttons	Returns which mouse buttons were pressed when the mouse event was triggered	MouseEvent
cancelable	Returns whether or not an event can have its default action prevented	Event
charCode	Returns the Unicode character code of the key that triggered the onkeypress event	KeyboardEvent
changeTouches	Returns a list of all the touch objects whose state changed between the previous touch and this touch	TouchEvent
clientX	Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent, TouchEvent
clientY	Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	MouseEvent, TouchEvent
clipboardData	Returns an object containing the data affected by the clipboard operation	ClipboardData
code	Returns the code of the key that triggered the event	KeyboardEvent
composed	Returns whether the event is composed or not	Event
createEvent()	Creates a new event	Event
ctrlKey	Returns whether the "CTRL" key was pressed when the mouse event was triggered	MouseEvent
ctrlKey	Returns whether the "CTRL" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
currentTarget	Returns the element whose event listeners triggered the event	Event
data	Returns the inserted characters	InputEvent
dataTransfer	Returns an object containing the data being dragged/dropped, or inserted/deleted	DragEvent, InputEvent
defaultPrevented	Returns whether or not the preventDefault() method was called for the event	Event
deltaX	Returns the horizontal scroll amount of a mouse wheel (x-axis)	WheelEvent
deltaY	Returns the vertical scroll amount of a mouse wheel (y-axis)	WheelEvent
deltaZ	Returns the scroll amount of a mouse wheel for the z-axis	WheelEvent
deltaMode	Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)	WheelEvent
detail	Returns a number that indicates how many times the mouse was clicked	UiEvent
elapsedTime	Returns the number of seconds an animation has been running	AnimationEvent
elapsedTime	Returns the number of seconds a transition has been running
eventPhase	Returns which phase of the event flow is currently being evaluated	Event
getTargetRanges()	Returns an array containing target ranges that will be affected by the insertion/deletion	InputEvent
getModifierState()	Returns an array containing target ranges that will be affected by the insertion/deletion	MouseEvent
inputType	Returns the type of the change (i.e "inserting" or "deleting")	InputEvent
isComposing	Returns whether the state of the event is composing or not	InputEvent, KeyboardEvent
isTrusted	Returns whether or not an event is trusted	Event
key	Returns the key value of the key represented by the event	KeyboardEvent
key	Returns the key of the changed storage item	StorageEvent
keyCode	Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	KeyboardEvent
location	Returns the location of a key on the keyboard or device	KeyboardEvent
lengthComputable	Returns whether the length of the progress can be computable or not	ProgressEvent
loaded	Returns how much work has been loaded	ProgressEvent
metaKey	Returns whether the "META" key was pressed when an event was triggered	MouseEvent
metaKey	Returns whether the "meta" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
MovementX	Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
MovementY	Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent
newValue	Returns the new value of the changed storage item	StorageEvent
newURL	Returns the URL of the document, after the hash has been changed	HasChangeEvent
offsetX	Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
offsetY	Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent
oldValue	Returns the old value of the changed storage item	StorageEvent
oldURL	Returns the URL of the document, before the hash was changed	HasChangeEvent
onemptied	The event occurs when something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)
pageX	Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
pageY	Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent
persisted	Returns whether the webpage was cached by the browser	PageTransitionEvent
preventDefault()	Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur	Event
propertyName	Returns the name of the CSS property associated with the animation or transition	AnimationEvent, TransitionEvent
pseudoElement	Returns the name of the pseudo-element of the animation or transition	AnimationEvent, TransitionEvent
region		MouseEvent
relatedTarget	Returns the element related to the element that triggered the mouse event	MouseEvent
relatedTarget	Returns the element related to the element that triggered the event	FocusEvent
repeat	Returns whether a key is being hold down repeatedly, or not	KeyboardEvent
screenX	Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
screenY	Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent
shiftKey	Returns whether the "SHIFT" key was pressed when an event was triggered	MouseEvent
shiftKey	Returns whether the "SHIFT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent
state	Returns an object containing a copy of the history entries	PopStateEvent
stopImmediatePropagation()	Prevents other listeners of the same event from being called	Event
stopPropagation()	Prevents further propagation of an event during event flow	Event
storageArea	Returns an object representing the affected storage object	StorageEvent
target	Returns the element that triggered the event	Event
targetTouches	Returns a list of all the touch objects that are in contact with the surface and where the touchstart event occured on the same target element as the current target element	TouchEvent
timeStamp	Returns the time (in milliseconds relative to the epoch) at which the event was created	Event
total	Returns the total amount of work that will be loaded	ProgressEvent
touches	Returns a list of all the touch objects that are currently in contact with the surface	TouchEvent
transitionend	The event occurs when a CSS transition has completed	TransitionEvent
type	Returns the name of the event	Event
url	Returns the URL of the changed item's document	StorageEvent
which	Returns which mouse button was pressed when the mouse event was triggered	MouseEvent
which	Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	KeyboardEvent
view	Returns a reference to the Window object where the event occurred	UiEvent

### Event Objects

Event Objects
When an event occurs in HTML, the event belongs to a certain event object, like a mouse click event belongs to the MouseEvent object.

For a tutorial about Events, read our JavaScript Events Tutorial.

The Event Object
All event objects are based on the Event Object, and inherit all of their properties and methods

Event Object	Description
Event	The parent of all event objects
Other Event Objects
These are the most common event objects:

Event Object	Description
AnimationEvent	For CSS animations
ClipboardEvent	For modification of the clipboard
DragEvent	For drag and drop interaction
FocusEvent	For focus-related events
HashChangeEvent	For changes in the anchor part of the URL
InputEvent	For user input
KeyboardEvent	For keyboard interaction
MouseEvent	For mouse interaction
PageTransitionEvent	For navigating to, and away from, web pages
PopStateEvent	For changes in the history entry
ProgressEvent	For the progress of loading external resources
StorageEvent	For changes in the window's storage area.
TouchEvent	For touch interaction
TransitionEvent	For CSS transitions
UiEvent	For user interface interaction
WheelEvent	For mousewheel interaction

### DOM HTMLCollection

The HTMLCollection Object
An HTMLCollection object is an array-like list of HTML elements.

Methods like the getElementsByTagName() returns an HTMLCollection.

Properties and Methods
The following properties and methods can be used on a HTMLCollection object:

Property / Method	Description
item()	Returns the element at the specified index in an HTMLCollection
length	Returns the number of elements in an HTMLCollection
namedItem()	Returns the element with the specified ID, or name, in an HTMLCollection

### The Location Object

Location Object
The location object contains information about the current URL.

The location object is part of the window object and is accessed through the window.location property.

Note: There is no public standard that applies to the location object, but all major browsers support it.

Location Object Properties
Property	Description
hash	Sets or returns the anchor part (#) of a URL
host	Sets or returns the hostname and port number of a URL
hostname	Sets or returns the hostname of a URL
href	Sets or returns the entire URL
origin	Returns the protocol, hostname and port number of a URL
pathname	Sets or returns the path name of a URL
port	Sets or returns the port number of a URL
protocol	Sets or returns the protocol of a URL
search	Sets or returns the querystring part of a URL
Location Object Methods
Method	Description
assign()	Loads a new document
reload()	Reloads the current document
replace()	Replaces the current document with a new one

### The Navigator Object

Navigator Object
The navigator object contains information about the browser.

Note: There is no public standard that applies to the navigator object, but all major browsers support it.

Navigator Object Properties
Property	Description
appCodeName	Returns the code name of the browser
appName	Returns the name of the browser
appVersion	Returns the version information of the browser
cookieEnabled	Determines whether cookies are enabled in the browser
geolocation	Returns a Geolocation object that can be used to locate the user's position
language	Returns the language of the browser
onLine	Determines whether the browser is online
platform	Returns for which platform the browser is compiled
product	Returns the engine name of the browser
userAgent	Returns the user-agent header sent by the browser to the server
Navigator Object Methods
Method	Description
javaEnabled()	Specifies whether or not the browser has Java enabled
taintEnabled()	Removed in JavaScript version 1.2. Specifies whether the browser has data tainting enabled

### The Screen Object

Screen Object
The screen object contains information about the visitor's screen.

Note: There is no public standard that applies to the screen object, but all major browsers support it.

Screen Object Properties
Property	Description
availHeight	Returns the height of the screen (excluding the Windows Taskbar)
availWidth	Returns the width of the screen (excluding the Windows Taskbar)
colorDepth	Returns the bit depth of the color palette for displaying images
height	Returns the total height of the screen
pixelDepth	Returns the color resolution (in bits per pixel) of the screen
width	Returns the total width of the screen

### HTML DOM Style Object

Style object
The Style object represents an individual style statement.

Style Object Properties
The "CSS" column indicates in which CSS version the property is defined (CSS1, CSS2, or CSS3).

Property	Description	CSS
alignContent	Sets or returns the alignment between the lines inside a flexible container when the items do not use all available space	3
alignItems	Sets or returns the alignment for items inside a flexible container	3
alignSelf	Sets or returns the alignment for selected items inside a flexible container	3
animation	A shorthand property for all the animation properties below, except the animationPlayState property	3
animationDelay	Sets or returns when the animation will start	3
animationDirection	Sets or returns whether or not the animation should play in reverse on alternate cycles	3
animationDuration	Sets or returns how many seconds or milliseconds an animation takes to complete one cycle	3
animationFillMode	Sets or returns what values are applied by the animation outside the time it is executing	3
animationIterationCount	Sets or returns the number of times an animation should be played	3
animationName	Sets or returns a name for the @keyframes animation	3
animationTimingFunction	Sets or returns the speed curve of the animation	3
animationPlayState	Sets or returns whether the animation is running or paused	3
background	Sets or returns all the background properties in one declaration	1
backgroundAttachment	Sets or returns whether a background-image is fixed or scrolls with the page	1
backgroundColor	Sets or returns the background-color of an element	1
backgroundImage	Sets or returns the background-image for an element	1
backgroundPosition	Sets or returns the starting position of a background-image	1
backgroundRepeat	Sets or returns how to repeat (tile) a background-image	1
backgroundClip	Sets or returns the painting area of the background	3
backgroundOrigin	Sets or returns the positioning area of the background images	3
backgroundSize	Sets or returns the size of the background image	3
backfaceVisibility	Sets or returns whether or not an element should be visible when not facing the screen	3
border	Sets or returns borderWidth, borderStyle, and borderColor in one declaration	1
borderBottom	Sets or returns all the borderBottom properties in one declaration	1
borderBottomColor	Sets or returns the color of the bottom border	1
borderBottomLeftRadius	Sets or returns the shape of the border of the bottom-left corner	3
borderBottomRightRadius	Sets or returns the shape of the border of the bottom-right corner	3
borderBottomStyle	Sets or returns the style of the bottom border	1
borderBottomWidth	Sets or returns the width of the bottom border	1
borderCollapse	Sets or returns whether the table border should be collapsed into a single border, or not	2
borderColor	Sets or returns the color of an element's border (can have up to four values)	1
borderImage	A shorthand property for setting or returning all the borderImage properties	3
borderImageOutset	Sets or returns the amount by which the border image area extends beyond the border box	3
borderImageRepeat	Sets or returns whether the image-border should be repeated, rounded or stretched	3
borderImageSlice	Sets or returns the inward offsets of the image-border	3
borderImageSource	Sets or returns the image to be used as a border	3
borderImageWidth	Sets or returns the widths of the image-border	3
borderLeft	Sets or returns all the borderLeft properties in one declaration	1
borderLeftColor	Sets or returns the color of the left border	1
borderLeftStyle	Sets or returns the style of the left border	1
borderLeftWidth	Sets or returns the width of the left border	1
borderRadius	A shorthand property for setting or returning all the four borderRadius properties	3
borderRight	Sets or returns all the borderRight properties in one declaration	1
borderRightColor	Sets or returns the color of the right border	1
borderRightStyle	Sets or returns the style of the right border	1
borderRightWidth	Sets or returns the width of the right border	1
borderSpacing	Sets or returns the space between cells in a table	2
borderStyle	Sets or returns the style of an element's border (can have up to four values)	1
borderTop	Sets or returns all the borderTop properties in one declaration	1
borderTopColor	Sets or returns the color of the top border	1
borderTopLeftRadius	Sets or returns the shape of the border of the top-left corner	3
borderTopRightRadius	Sets or returns the shape of the border of the top-right corner	3
borderTopStyle	Sets or returns the style of the top border	1
borderTopWidth	Sets or returns the width of the top border	1
borderWidth	Sets or returns the width of an element's border (can have up to four values)	1
bottom	Sets or returns the bottom position of a positioned element	2
boxDecorationBreak	Sets or returns the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break.	3
boxShadow	Attaches one or more drop-shadows to the box	3
boxSizing	Allows you to define certain elements to fit an area in a certain way	3
captionSide	Sets or returns the position of the table caption	2
clear	Sets or returns the position of the element relative to floating objects	1
clip	Sets or returns which part of a positioned element is visible	2
color	Sets or returns the color of the text	1
columnCount	Sets or returns the number of columns an element should be divided into	3
columnFill	Sets or returns how to fill columns	3
columnGap	Sets or returns the gap between the columns	3
columnRule	A shorthand property for setting or returning all the columnRule properties	3
columnRuleColor	Sets or returns the color of the rule between columns	3
columnRuleStyle	Sets or returns the style of the rule between columns	3
columnRuleWidth	Sets or returns the width of the rule between columns	3
columns	A shorthand property for setting or returning columnWidth and columnCount	3
columnSpan	Sets or returns how many columns an element should span across	3
columnWidth	Sets or returns the width of the columns	3
content	Used with the :before and :after pseudo-elements, to insert generated content	2
counterIncrement	Increments one or more counters	2
counterReset	Creates or resets one or more counters	2
cursor	Sets or returns the type of cursor to display for the mouse pointer	2
direction	Sets or returns the text direction	2
display	Sets or returns an element's display type	1
emptyCells	Sets or returns whether to show the border and background of empty cells, or not	2
filter	Sets or returns image filters (visual effects, like blur and saturation)	3
flex	Sets or returns the length of the item, relative to the rest	3
flexBasis	Sets or returns the initial length of a flexible item	3
flexDirection	Sets or returns the direction of the flexible items	3
flexFlow	A shorthand property for the flexDirection and the flexWrap properties	3
flexGrow	Sets or returns how much the item will grow relative to the rest	3
flexShrink	Sets or returns how the item will shrink relative to the rest	3
flexWrap	Sets or returns whether the flexible items should wrap or not	3
cssFloat	Sets or returns the horizontal alignment of an element	1
font	Sets or returns fontStyle, fontVariant, fontWeight, fontSize, lineHeight, and fontFamily in one declaration	1
fontFamily	Sets or returns the font family for text	1
fontSize	Sets or returns the font size of the text	1
fontStyle	Sets or returns whether the style of the font is normal, italic or oblique	1
fontVariant	Sets or returns whether the font should be displayed in small capital letters	1
fontWeight	Sets or returns the boldness of the font	1
fontSizeAdjust	Preserves the readability of text when font fallback occurs	3
fontStretch	Selects a normal, condensed, or expanded face from a font family	3
hangingPunctuation	Specifies whether a punctuation character may be placed outside the line box	3
height	Sets or returns the height of an element	1
hyphens	Sets how to split words to improve the layout of paragraphs	3
icon	Provides the author the ability to style an element with an iconic equivalent	3
imageOrientation	Specifies a rotation in the right or clockwise direction that a user agent applies to an image	3
isolation	Defines whether an element must create a new stacking content	3
justifyContent	Sets or returns the alignment between the items inside a flexible container when the items do not use all available space.	3
left	Sets or returns the left position of a positioned element	2
letterSpacing	Sets or returns the space between characters in a text	1
lineHeight	Sets or returns the distance between lines in a text	1
listStyle	Sets or returns listStyleImage, listStylePosition, and listStyleType in one declaration	1
listStyleImage	Sets or returns an image as the list-item marker	1
listStylePosition	Sets or returns the position of the list-item marker	1
listStyleType	Sets or returns the list-item marker type	1
margin	Sets or returns the margins of an element (can have up to four values)	1
marginBottom	Sets or returns the bottom margin of an element	1
marginLeft	Sets or returns the left margin of an element	1
marginRight	Sets or returns the right margin of an element	1
marginTop	Sets or returns the top margin of an element	1
maxHeight	Sets or returns the maximum height of an element	2
maxWidth	Sets or returns the maximum width of an element	2
minHeight	Sets or returns the minimum height of an element	2
minWidth	Sets or returns the minimum width of an element	2
navDown	Sets or returns where to navigate when using the arrow-down navigation key	3
navIndex	Sets or returns the tabbing order for an element	3
navLeft	Sets or returns where to navigate when using the arrow-left navigation key	3
navRight	Sets or returns where to navigate when using the arrow-right navigation key	3
navUp	Sets or returns where to navigate when using the arrow-up navigation key	3
objectFit	Specifies how the contents of a replaced element should be fitted to the box established by its used height and width	3
objectPosition	Specifies the alignment of the replaced element inside its box	3
opacity	Sets or returns the opacity level for an element	3
order	Sets or returns the order of the flexible item, relative to the rest	3
orphans	Sets or returns the minimum number of lines for an element that must be left at the bottom of a page when a page break occurs inside an element	2
outline	Sets or returns all the outline properties in one declaration	2
outlineColor	Sets or returns the color of the outline around a element	2
outlineOffset	Offsets an outline, and draws it beyond the border edge	3
outlineStyle	Sets or returns the style of the outline around an element	2
outlineWidth	Sets or returns the width of the outline around an element	2
overflow	Sets or returns what to do with content that renders outside the element box	2
overflowX	Specifies what to do with the left/right edges of the content, if it overflows the element's content area	3
overflowY	Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area	3
padding	Sets or returns the padding of an element (can have up to four values)	1
paddingBottom	Sets or returns the bottom padding of an element	1
paddingLeft	Sets or returns the left padding of an element	1
paddingRight	Sets or returns the right padding of an element	1
paddingTop	Sets or returns the top padding of an element	1
pageBreakAfter	Sets or returns the page-break behavior after an element	2
pageBreakBefore	Sets or returns the page-break behavior before an element	2
pageBreakInside	Sets or returns the page-break behavior inside an element	2
perspective	Sets or returns the perspective on how 3D elements are viewed	3
perspectiveOrigin	Sets or returns the bottom position of 3D elements	3
position	Sets or returns the type of positioning method used for an element (static, relative, absolute or fixed)	2
quotes	Sets or returns the type of quotation marks for embedded quotations	2
resize	Sets or returns whether or not an element is resizable by the user	3
right	Sets or returns the right position of a positioned element	2
tableLayout	Sets or returns the way to lay out table cells, rows, and columns	2
tabSize	Sets or returns the length of the tab-character	3
textAlign	Sets or returns the horizontal alignment of text	1
textAlignLast	Sets or returns how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"	3
textDecoration	Sets or returns the decoration of a text	1
textDecorationColor	Sets or returns the color of the text-decoration	3
textDecorationLine	Sets or returns the type of line in a text-decoration	3
textDecorationStyle	Sets or returns the style of the line in a text decoration	3
textIndent	Sets or returns the indentation of the first line of text	1
textJustify	Sets or returns the justification method used when text-align is "justify"	3
textOverflow	Sets or returns what should happen when text overflows the containing element	3
textShadow	Sets or returns the shadow effect of a text	3
textTransform	Sets or returns the capitalization of a text	1
top	Sets or returns the top position of a positioned element	2
transform	Applies a 2D or 3D transformation to an element	3
transformOrigin	Sets or returns the position of transformed elements	3
transformStyle	Sets or returns how nested elements are rendered in 3D space	3
transition	A shorthand property for setting or returning the four transition properties	3
transitionProperty	Sets or returns the CSS property that the transition effect is for	3
transitionDuration	Sets or returns how many seconds or milliseconds a transition effect takes to complete	3
transitionTimingFunction	Sets or returns the speed curve of the transition effect	3
transitionDelay	Sets or returns when the transition effect will start	3
unicodeBidi	Sets or returns whether the text should be overridden to support multiple languages in the same document	2
userSelect	Sets or returns whether the text of an element can be selected or not	2
verticalAlign	Sets or returns the vertical alignment of the content in an element	1
visibility	Sets or returns whether an element should be visible	2
whiteSpace	Sets or returns how to handle tabs, line breaks and whitespace in a text	1
width	Sets or returns the width of an element	1
wordBreak	Sets or returns line breaking rules for non-CJK scripts	3
wordSpacing	Sets or returns the spacing between words in a text	1
wordWrap	Allows long, unbreakable words to be broken and wrap to the next line	3
widows	Sets or returns the minimum number of lines for an element that must be visible at the top of a page	2
zIndex	Sets or returns the stack order of a positioned element	2

### The Window Object

Window Object
The window object represents an open window in a browser.

If a document contain frames (<iframe> tags), the browser creates one window object for the HTML document, and one additional window object for each frame.

Note: There is no public standard that applies to the Window object, but all major browsers support it.

Window Object Properties
Property	Description
closed	Returns a Boolean value indicating whether a window has been closed or not
console	Returns a reference to the Console object, which provides methods for logging information to the browser's console (See Console object)
defaultStatus	Sets or returns the default text in the statusbar of a window
document	Returns the Document object for the window (See Document object)
frameElement	Returns the <iframe> element in which the current window is inserted
frames	Returns all <iframe> elements in the current window
history	Returns the History object for the window (See History object)
innerHeight	Returns the height of the window's content area (viewport) including scrollbars
innerWidth	Returns the width of a window's content area (viewport) including scrollbars
length	Returns the number of <iframe> elements in the current window
localStorage	Allows to save key/value pairs in a web browser. Stores the data with no expiration date
location	Returns the Location object for the window (See Location object)
name	Sets or returns the name of a window
navigator	Returns the Navigator object for the window (See Navigator object)
opener	Returns a reference to the window that created the window
outerHeight	Returns the height of the browser window, including toolbars/scrollbars
outerWidth	Returns the width of the browser window, including toolbars/scrollbars
pageXOffset	Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
pageYOffset	Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
parent	Returns the parent window of the current window
screen	Returns the Screen object for the window (See Screen object)
screenLeft	Returns the horizontal coordinate of the window relative to the screen
screenTop	Returns the vertical coordinate of the window relative to the screen
screenX	Returns the horizontal coordinate of the window relative to the screen
screenY	Returns the vertical coordinate of the window relative to the screen
sessionStorage	Allows to save key/value pairs in a web browser. Stores the data for one session
scrollX	An alias of pageXOffset
scrollY	An alias of pageYOffset
self	Returns the current window
status	Sets or returns the text in the statusbar of a window
top	Returns the topmost browser window
Window Object Methods
Method	Description
alert()	Displays an alert box with a message and an OK button
atob()	Decodes a base-64 encoded string
blur()	Removes focus from the current window
btoa()	Encodes a string in base-64
clearInterval()	Clears a timer set with setInterval()
clearTimeout()	Clears a timer set with setTimeout()
close()	Closes the current window
confirm()	Displays a dialog box with a message and an OK and a Cancel button
focus()	Sets focus to the current window
getComputedStyle()	Gets the current computed CSS styles applied to an element
getSelection()	Returns a Selection object representing the range of text selected by the user
matchMedia()	Returns a MediaQueryList object representing the specified CSS media query string
moveBy()	Moves a window relative to its current position
moveTo()	Moves a window to the specified position
open()	Opens a new browser window
print()	Prints the content of the current window
prompt()	Displays a dialog box that prompts the visitor for input
requestAnimationFrame()	Requests the browser to call a function to update an animation before the next repaint
resizeBy()	Resizes the window by the specified pixels
resizeTo()	Resizes the window to the specified width and height
scroll()	Deprecated. This method has been replaced by the scrollTo() method.
scrollBy()	Scrolls the document by the specified number of pixels
scrollTo()	Scrolls the document to the specified coordinates
setInterval()	Calls a function or evaluates an expression at specified intervals (in milliseconds)
setTimeout()	Calls a function or evaluates an expression after a specified number of milliseconds
stop()	Stops the window from loading
