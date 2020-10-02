# Resumo dos meus Estudos !

---

## Git

Comandos importantes

# Comandos do Git

============
Um Resumo dos Comandos Git, lista de Comandos importantes do Git

--

### Inicializando


| Command | Description |
| - | - |
| `git init` | Inicializa um Repositório Local |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Cria uma copia local de um repositório Remoto |

### Basico


| Command | Description |
| - | - |
| `git status` | Check status |
| `git add [file-name.txt]` | Adiciona o arquivo no rastreável pelo git |
| `git add -A` | Adiciona todas as mudanças |
| `git commit -m "[commit message]"` | Commit e comenta as alterações |
| `git rm -r [file-name.txt]` | Remove um arquivo ou uma pasta |

### Branch & Merge


| Command | Description |
| - | - |
| `git branch` | Lista os branches (asterístico é o branch local) |
| `git branch -a` | Lista os branches local e remoto |
| `git branch [branch name]` | Cria um branch |
| `git branch -d [branch name]` | Deleta um Branch |
| `git push origin --delete [branch name]` | Deleta um branch remoto |
| `git checkout -b [branch name]` | Cria um branch e muda para ele |
| `git checkout -b [branch name] origin/[branch name]` | Clona e muda para ele |
| `git branch -m [old branch name] [new branch name]` | renomeia um branch local |
| `git checkout [branch name]` | muda para o branch |
| `git checkout -` | muda para o último branch local |
| `git checkout -- [file-name.txt]` | Descarta mudanças no arquivo |
| `git merge [branch name]` | Merge a branch com a branch ativa |
| `git merge [source branch] [target branch]` | Merge a branch com a branch alvo |
| `git stash` | Mudanças stach em um diretório |
| `git stash clear` | remove todas as entradas stachs |

### Sharing & Updating Projects


| Command | Description |
| - | - |
| `git push origin [branch name]` | Push um branch para o seu repositorio remoto |
| `git push -u origin [branch name]` | Push mudanças para um repositorio remoto |
| `git push` | Push mudanças para o repositório remoto |
| `git push origin --delete [branch name]` | Deleta um branch remoto |
| `git pull` | Atualiza o repositório local para o mais novo commit |
| `git pull origin [branch name]` | Pull mudanças de um repositorio remoto |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Adiciona um repositório remoto |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Designa um ramo repositorio origin para SSH |

### Inspeção e Comparação


| Command | Description |
| - | - |
| `git log` | Visualizar mudanças |
| `git log --summary` | Visualizar mudanças(detalhadas) |
| `git log --oneline` | Visualizar mudanças (resumidamente) |
| `git diff [source branch] [target branch]` | Preview mudanças |

## Html

### Tags HTML

- criado em 1991
- tags com abertura e fechamento
- estrutura básica

```
<!DOCTYPE html> 
<html>
    <head>
        <meta charset="utf-8"> 
        <title> Luiz Fernando Rosalba </title> 
</head>

    <body> 
        Luiz Fernando Rosalba
    </body>

</html>
```

Semantica após 2014 (nova versão , evita os divs)

```
<section>

Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

<header>

É o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

<article>

Representa um conteúdo independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um article pode conter outros elementos, como header, cabeçalhos, parágrafos e imagens.

<aside>

É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

<footer>

Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um <footer> são informações de autor e links relacionados.

<h1>-<h6>

Eles não foram criados na versão 5 do HTML e nem são específicos para semântica, mas servem para esse propósito. São utilizados para marcar a importância dos títulos, sendo <h1> o mais importante e <h6> o menos. Uma dica: use apenas um <h1> por página, pois ele representa o objetivo da sua página.
```

```
<a> Link </a>
<a href = "linkedin.com/"> Link </a>
<a href = "mailtto:luizrosalba@gmail.com"> email </a>
```

### Seletores no CSS

- seletores são elementos html a,p,h1,h3
- dentro de chaves uma propriedade e um valor

```
a,p,h1,h3{
    color: blue; 
    font-size:14px;
}
```

- qualquer elemento terá a mesma aparencia
- varias regras para elementos do mesmo tipo
- Ids e classes podem representar qquer tipos de elementros
- classe é precedida por um ponto
- id precedido por um #

```
.header{
    padding:10px
}
```

```
#header{
    padding:15px
}
```

- um id só pode ser usado uma vez na pagina
- cada elemento html é representado por uma caixa (box model)
- podem alterar sua aparencia
  ![](https://github.com/luizrosalba/hmtl5css/blob/master/img/box_model.PNG?raw=true)
- margens = espaçamento entre elementos
- bordas circulam padding e conteudo
- padding = espaçamento entre a borda e o conteudo
- text, imagem , video , etc
- padding: 10px (topo fundo  ) 5px (dir esq);
- padding: topo 15 px direita 10 inferior px 5  esqueda px 0 ;
- ou podemos especificar apenas uma usando padding- opçao
- backgroud tem várias opções - image, position ...
- usar o site mdn para ver as opções
- https://developer.mozilla.org/pt-BR/docs/Web/Tutoriais
- border : largura , cor e estilo (solida pontilhada , tracejada ... )
- border radius - arredonda os cantos de um elemento
- dica : se eh quadrado border-radius de 50% deixa ele circular

## HTML5

## Javascript

JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). O padrão JavaScript é ECMAScript. Desde 2012, todos os navegadores modernos possuem suporte total ao ECMAScript 5.1. Navegadores mais antigos suportam pelo menos ECMAScript 3. Em 17 de Junho de 2015, a ECMA International publicou a sexta versão do ECMAScript, que é oficialmente chamado de ECMAScript 2015, e foi inicialmente conhecido como ECMAScript 6 ou ES6. Desde então, as especificações do ECMAScript são lançadas anualmente. Essa documentação faz referência à última versão de referência, que atualmente é a ECMAScript 2018.

Não se deve confundir o JavaScript com a linguagem de programação Java. Tanto Java quanto JavaScript são marcas registradas da Oracle nos Estados Unidos da América e em outros países. No entanto, as duas linguagens de programação possuem sintaxe, semânticas e usos muito diferentes.

### Basic JavaScript

js_free_code_camp/BasicJavaScript.md

Cursando o Javascript algorithms and data Structues certification
JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.
In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
Unlike some other programming languages, single and double quotes work the same in JavaScript.

Code	Output

```'	single quote
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
Method	Description
parse()	Parses a JSON string and returns a JavaScript object
stringify()	Convert a JavaScript object to a JSON string

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
###  JavaScript Statements

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
repeat()	Returns a new string with a specified number of copies of an existing string
replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters
toString()	Returns the value of a String object
toUpperCase()	Converts a string to uppercase letters
trim()	Removes whitespace from both ends of a string
valueOf()	Returns the primitive value of a String object
```
### Criando arrays

/*
Operações com arrays 
*/
```
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
```
console.log("indexação "); 
console.log(arr[3]); // equals [[10,11,12], 13, 14]
console.log(arr[3][0]); // equals [10,11,12]
console.log(arr[3][0][1]); // equals 11
```
/// concatenação 
```
console.log("Concatenação "); 
const juntos = myArray2.concat(myArray2) ; // faz um merge 
console.log(juntos); 


const array1 = [1,2,3,4,5];  
```
/// slice 
```
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

//splice :  Não é imutavel, Altera o array adicionando
// novos elementos enquanto remove elementos antigos 
```
console.log("Splice - Mutável Altera o array adicionando novos elementos enquanto remove elementos antigos  ");
const arr2 = [1,2,3,4,5];  
arr2.splice(2); // remove a partir da posicao 2  
console.log(arr2); /// [1,2]
arr2.splice(0,1,'first'); // [] /// inicio, quanto 
//itens remove o que adicionar 
//a partir da primeira posicao 
console.log(arr2); /// ["first",1,2]; 
```
// Iterando vetores (arrays)
```
console.log("Iterando vetores (arrays)");
const arr4 = [1,2,3,4,5];  
arr4.forEach((value,index) => {console.log(`${index}:${value}`)});

arr4.forEach((value,index,arr4) => console.log(index,value));
```

```
console.log("map - Imutavel  Retorna um novo array de mesmo tamanho iterando cada item de um array ");

const arr5 = [1,2,3,4,5];  
console.log(arr5);
console.log(arr5.map (value => value *2)); // retorna um novo array [2,4,6,8,10]
```
```


console.log("flat - Imutavel  Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth) " );
console.log("Um novo array com os elementos sub-array concatenados nele.");

var arra1 = [1, 2, [3, 4]];
console.log(arra1.flat()); // [1, 2, 3, 4]

var arra2 = [1, 2, [3, 4, [5, 6,[7,8]]]];
console.log(arra2.flat(1));// [1, 2, 3, 4, [5, 6]]
console.log(arra2.flat(2));// [1, 2, 3, 4, 5, 6]
console.log(arra2.flat(3));// [1, 2, 3, 4, 5, 6]
console.log(arra2.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8]
```

```

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

```
console.log();

console.log();

console.log("keys  retorna um array iterator que contem as chaves para cada elemento do array "); 
const arr33 = [1,2,3,4];  
const arrIterator = arr33.keys();
console.log(arrIterator.next()); //{value:0,done:false};
console.log(arrIterator.next()); //{value:1,done:false};
console.log(arrIterator.next()); //{value:2,done:false};
console.log(arrIterator.next()); //{value:3,done:false};
console.log(arrIterator.next()); //{value:indefined?,done:true};

console.log("values : retorna um array iterator que contém os valores para cada elemento do array"); 
const arr44 = [1,2,3,4];  
const arrIterator2 = arr44.values();
console.log(arrIterator2.next()); //{value:1,done:false};
console.log(arrIterator2.next()); //{value:2,done:false};
console.log(arrIterator2.next());// {value:3,done:false};
console.log(arrIterator2.next());//{value:4,done:false};
console.log(arrIterator2.next());//{value:undefined,done:true};



console.log(" retorna um par chave valor para cada elemento do array ");
const arr55 = [1,2,3,4];  
const arrIterator3 = arr55.values();
console.log(arrIterator3.next()); //{value:1,done:false};
console.log(arrIterator3.next()); //{value:2,done:false};
console.log(arrIterator3.next());// {value:3,done:false};
console.log(arrIterator3.next());//{value:4,done:false};
console.log(arrIterator3.next());//{value:undefined,done:true};

```

console.log("## Buscar elementos ");

```
console.log( "find Retorna o primeiro item de um array que satisfaz uma condição ");

const arri = [1,2,3,4];  
const firstGreatherThanTwo = arri.find (value => value > 2);
console.log(firstGreatherThanTwo ) ; /// 3 

console.log( "findIndex Retorna o indice do primeiro item de um array que satisfaz uma condição ");

const arro = [1,2,3,4];  
const firstIndexGreatherThanTwo = arro.findIndex (value => value > 2) ; /// 2
console.log(firstIndexGreatherThanTwo ) ; /// 2

console.log("filter Retorna um array com todos os elementos que satisfazem uma condição ");


const arrk = [1,2,3,4];  
const allValuesGreatherThanTwo = arrk.filter (value => value > 2) ; /// [3,4]
console.log(allValuesGreatherThanTwo ) ; /// 2


console.log(" indexOf Retorna o primeiro índice em que um elemento pode ser encontrado em um array ");
const arrm = [1,3,3,4,3];  
const firstIndexOfItem = arrm.indexOf(3); /// 1
console.log(firstIndexOfItem ) ; /// 2

console.log( "lastIndexOf Retorna o ultimo índice em que um elemento pode ser encontrado em um array ");
const arrn = [1,3,3,4,3];  
const firstIndexOfItem2 = arrn.lastIndexOf(3); /// 4
console.log(firstIndexOfItem2 ) ; /// 2

console.log("includes Retorna um booleano verificando se determinado elemento existe no array ");
const arry = [1,3,3,4,3];  
const hasItemOne = arry.includes(1); /// true 
const hasItemTwo = arry.includes(2); /// false 
console.log(hasItemOne );
console.log(hasItemTwo );



console.log("some Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição ");

const arra = [1,3,3,4,3];  
const hasSomeEvenNumber = arra.some (value => value % 2 ===0 ) ; /// true
console.log(hasSomeEvenNumber );


console.log( "some Retorna um booleano verificando se todos os itens de um array satisfazem uma condição ");

const arrb = [1,3,3,4,3];  
const allEvenNumbers4 = arrb.every (value => value % 2 ===0 ) ; /// false
console.log(allEvenNumbers4 );

console.log( "some Retorna um booleano verificando se todos os itens de um array satisfazem uma condição ");

const arrc = [1,3,3,4,3];  
const allEvenNumbers = arrc.every (value => value % 2 ===0 ) ; /// false
console.log(allEvenNumbers );
```



## sort ordenacao de acordo com condição 
```

students.sort((current,next) => current.grade - next.grade) /// ordena do menor pro maior 
students.sort((current,next) => next.grade - current.grade) /// ordena do maior pro menor 
```

## reverse inverte o array 
```

const arr = [1,2,3,4,5];  
arr.reverse(); /// [5 , 4 , 3 , 2 , 1]
```

## transformando um array em outro tipo de dados 
```

join junta todos os elementos de um array separados por um delimitar e retorna uma string 

const arr = [1,2,3,4,5];  

console.log(arr.join('-')); /// "1-2-3-4-5"
```


## reduce Retorna um novo tipo de dado iterando cada posicao de um array 
```

const arr = [1,2,3,4,5];  
console.log(arr.reduce ((total,value)=> total+= value, 0));

```





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

### Nested arrays

Site bom com documentação

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

var myArray = [[],[]];

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];// Retorna 8

### Inicializando

O método fill é um método mutável, ele irá mudar o objeto em si, e retorná-lo, não somente uma cópia do objeto.

```Javascript
arr.fill(valor[, ínicio = 0[, fim = this.length]]) 
[1, 2, 3].fill(4);               // [4, 4, 4]   preenche com 4 tudo 
[1, 2, 3].fill(4, 1);            // [1, 4, 4]   preenche com 4 a partir da posicao 1 
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]   preenche com 4 a partir da posicao 1 até 2 
Array(3).fill(4);                // [4, 4, 4]   preenche um vetor de tres posições com 4 
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}
```
### Alterando vetores (arrays)

```Javascript
var removedFromMyArray=array.push();  /// adiciona ultima pos
var removedFromMyArray=array.pop();  /// remove ultimo pos
var removedFromMyArray=array.shift(); // remove primeiro pos e retorna o elemento removido 
const tamanho  = myArray.unshift(["Paul",35]); /// adiciona na primeira posicao ao ser aplicado, retorna o tamanho do array  
const alimentos = frutas.concat(salgados) ; // faz um merge concatenando em alimentos o array salgados e frutas 
```
### Iterando vetores (arrays)

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
### Métodos de Arrays

slice

Imutável Fatia o array

```Javascript
const arr = [1,2,3,4,5];  
Arr.slice(0,2); // [1,2]
Arr.slice(2); // [3,4,5]
Arr.slice(-1); // [5]
Arr.slice(-3); // [3,4,5]
```
splice

Não é imutavel, Altera o array adicionando novos elementos enquanto remove elementos antigos

```Javascript
const arr = [1,2,3,4,5];  
Arr.splice(2); // remove a partir da posicao 2 [3,4,5] 
console.log(arr); /// [1,2]
Arr.splice(0,0,'first'); // [] /// inicio, quanto itens remove o que adicionar a partir da primeira posicao 
console.log(arr); /// ["fisrt",1,2]; 

```
map

Retorna um novo array de mesmo tamanho iterando cada item de um array

```Javascript
const arr = [1,2,3,4,5];  
arr.map (value => value *2); // retorna um novo array [2,4,6,8,10]

```
flat

Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth)

```Javascript
const arr = [1,2,[3,4]];  
arr.flat(); // retorna um novo array com profundidade 1 [1,2,3,4]
arr.flat(2); // retorna um novo array com profundidade 2 , neste caso não terá diferenca mas se houvessem outros arrays dentro de arr só iria até a segunda camanda de arr 

```
flatMap

Retorna um novo array assim como faz a função map e executa um flat de profundidade 1

```Javascript
const arr = [1,2,3,4];  
arr.flatMap (value => [value *2]); // retorna um novo array [2,4,6,8]
arr.flatMap (value => [[value *2]]); // retorna um novo array [[2],[4],[6],[8]]
```
keys

retorna um array iterator que contem as chaves para cada elemento do array

```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.keys();
arrIterator.next(); {value:0,done:false};
arrIterator.next(); {value:1,done:false};
arrIterator.next(); {value:2,done:false};
arrIterator.next(); {value:3,done:true};
```
values

retorna um array iterator que contém os valores para cada elemento do array

```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.values();
arrIterator.next(); {value:1,done:false};
arrIterator.next(); {value:2,done:false};
arrIterator.next(); {value:3,done:false};
arrIterator.next(); {value:4,done:true};
```
entries

retorna um par chave valor para cada elemento do array

```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.values();
arrIterator.next(); {value:[0,1],done:false};
arrIterator.next(); {value:[1,2],done:false};
arrIterator.next(); {value:[2,3],done:false};
arrIterator.next(); {value:[3,4],done:true};
```
### Buscar elementos

find

Retorna o primeiro item de um array que satisfaz uma condição

```Javascript
const arr = [1,2,3,4];  
const firstGreatherThanTwo = arr.find (value => value > 2) ; /// 3 

```
findIndex

Retorna o indice do primeiro item de um array que satisfaz uma condição

```Javascript
const arr = [1,2,3,4];  
const firstGreatherThanTwo = arr.findIndex (value => value > 2) ; /// 2
```
filter

Retorna um array com todos os elementos que satisfazem uma condição

```Javascript
const arr = [1,2,3,4];  
const allValuesGreatherThanTwo = arr.filter (value => value > 2) ; /// [3,4]

```
indexOf

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
includes

Retorna um booleano verificando se determinado elemento existe no array

```Javascript
const arr = [1,3,3,4,3];  
const hasItemOne = arr.includes(1); /// true 
const hasItemTwo = arr.includes(2); /// false 

```
some

Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

```Javascript
const arr = [1,3,3,4,3];  
const hasSomeEvenNumber = arr.some (value => value % 2 ===0 ) ; /// true
```
every

Retorna um booleano verificando se todos os itens de um array satisfazem uma condição

```Javascript
const arr = [1,3,3,4,3];  
const allEvenNumbers = arr.every (value => value % 2 ===0 ) ; /// false
```
sort

ordenacao de acordo com condição

```Javascript
students.sort((current,next) => current.grade - next.grade) /// ordena do menor pro maior 
students.sort((current,next) => next.grade - current.grade) /// ordena do maior pro menor 
```
reverse

inverte o array

```Javascript
const arr = [1,2,3,4,5];  
arr.reverse(); /// [5 , 4 , 3 , 2 , 1]
```
join

transformando um array em outro tipo de dados
join junta todos os elementos de um array separados por um delimitar e retorna uma string

```Javascript
const arr = [1,2,3,4,5];  
arr.join('-'); /// "1-2-3-4-5"
```
reduce

Retorna um novo tipo de dado iterando cada posicao de um array

```Javascript
const arr = [1,2,3,4,5];  
arr.reduce ((total,value)=> total+= value, 0); /// para cada item executa afuncao o primeiro arg eh o retorno comeca com um inteiro com valor 0 
```
### Escopo

Variables which are used without the var keyword are automatically created in the global scope. (mesmo dentro de funções)
var dentro de função cria uma variavel com escopo local
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

### Undefined

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
Retornando undefined

```Javascript
function retornaUndefined (){
return ; 
}

```
### objects

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
### delete

propriedade make do objeto anotherObject

delete anotherObject.make;

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property (nome conhecido) you're trying to access ahead of time.

Se a prop nao existe e vc quer criar use a notação ponto e inicialize (se nao inicializar nao vai criar )
para acessar o valor use [][]

If the property of the object you are trying to access has a space in its name (ou é uma variavel que já existe) , you will need to use bracket notation.
Se ela já existe ou é uma variável , use bracket sem aspas
criar com aspas fará ela criar uma prop com  o nome da variável e nao com o conteúdo da variável .

### .hasOwnProperty()

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
### Expressões regulares

https://regexr.com/

```Javascript
abc…	Letters
123…	Digits
\d	Any Digit
\D	Any Non-digit character
.	Any Character
\.	Period
[abc]	Only a, b, or c
[^abc]	Not a, b, nor c
[a-z]	Characters a to z
[0-9]	Numbers 0 to 9
\w	Any Alphanumeric character
\W	Any Non-alphanumeric character
{m}	m Repetitions
{m,n}	m to n Repetitions
*	Zero or more repetitions
+	One or more repetitions
?	Optional character
\s	Any Whitespace
\S	Any Non-whitespace character
^…$	Starts and ends
(…)	Capture Group
(a(bc))	Capture Sub-group
(.*)	Capture all
(abc|def)	Matches abc or def

```
Regular Expressions: Using the Test MethodPassed
Verificando se existe a string myregex dentro da string mystring
Atenção ! é case sensitive

```Javascript
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```
Regular Expressions: Match a Literal String with Different Possibilities
Procurando mais de uma palavra com o operador |

```Javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird/; // Change this line
let result = petRegex.test(petString);

```
Regular Expressions: Ignore Case While Matching
Ignorando case sensitive

```Javascript
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

```
Regular Expressions: Extract Matches
usando o match para verificar uma string por uma expressão regular (regex)

```Javascript
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]

```
Regular Expressions: Find More Than the First Match
Encontrando mais de um caso , retornando um vetor com as ocorrencias encontradas
ignorando case sensitive

```Javascript
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```
Regular Expressions: Match Anything with Wildcard Period
Utilizando coringas

```Javascript
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true
```
Regular Expressions: Match Single Character with Multiple Possibilities
Restringindo as possibilidades de match

```Javascript
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null
```
Regular Expressions: Match Letters of the Alphabet
Range de characteres

```Javascript
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```
Regular Expressions: Match Numbers and Letters of the Alphabet
(tambem serve para numeros)

```Javascript
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```
Regular Expressions: Match Single Characters Not Specified
Negando caracteres (^dentro de parenteses)
For example, /[^aeiou]/gi matches all characters that are not a vowel.
Note that characters like ., !, [, @, / and white space are matched -
the negated vowel character set only excludes the vowel characters.

```Javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);
```
Regular Expressions: Match Characters that Occur One or More Times
Retorna quantas vezes um caractere é repetido mais de uma vez

```Javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);/// s é repetido duas vezes 

```
Regular Expressions: Match Characters that Occur Zero or More Times
Match que verifica regex que com caracteres que acontecem 0 ou mais de uma vez

```Javascript
// Only change code below this line
let chewieQuote="Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let result = chewieQuote.match(chewieRegex);
```
Regular Expressions: Find Characters with Lazy Matching
Lazy and Greedy matches :
Regular expressions are by default greedy
Lazy (?)-> encontra a menor match de um regex
Greedy (default) -> encontra a maior match de um regex

regex: /t[a-z]*i/
string "titanic".

This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
"titanic" matched greedy /t[a-z]*i/ return ["titani"] It finds the largest sub-string possible to fit the pattern.
"titanic" matched lazy  /t[a-z]*?i/ returns ["ti"].It finds the smallest sub-string possible to fit the pattern.

Note
Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

![](https://github.com/luizrosalba/js_free_code_camp/blob/master/Capturar.PNG?raw=true)

```Javascript

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h.*?>/; // retorna um vetor com <h.> dentro dele  
let result = text.match(myRegex);

```
sem os colchetes, o operador ^ procura pela ocorrencia de um padrão no começo de uma string

```Javascript
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
o operador $ procura pela ocorrencia no final de uma string

```Javascript
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

```
Regular Expressions: Match All Letters and Numbers
/\w/ é um atalho para uma regex que busca todas as letras e numeros (e tambem o underscore _ )  sem considerar o case sensitive

```Javascript
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

```
Verificando as condições . Se uma entrada é verdadeira , o teste deve retornar verdadeira. Se nao encontra a opção retorna falsa .

1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

```Javascript
let username = "l00";
// ^[a-z] começa com uma letra 
//[0-9][0-9]+ - ou termina com dois ou mais numeros 
// | aplica mais uma condição 
// [a-z]+ -ou has one or more letters next
// \d* - termina com zero ou mais numeros no final 
///$ - final da entrada 
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let result = userCheck.test(username);
console.log(result);
```
Regular Expressions: Match Whitespace
Busca por espaço, enter, tab,  form feed, e nova linha   \s
[ \r\t\f\n\v]

```Javascript
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```
Busca por nao whitespace

```Javascript
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
```
Regular Expressions: Specify Upper and Lower Number of Matches
Buscar por um determinado numero de matches

```Javascript
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/; /// busca por a aparecendo entre 3 a 5 vezes na string
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```
egular Expressions: Specify Only the Lower Number of Matches

```Javascript
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
```
Regular Expressions: Check for All or None
? Retorna true para 0 ou uma ocorrencia do caractere anterior

```Javascript
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```
Regular Expressions: Positive and Negative Lookahead
positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.  A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

a negative lookahead will look to make sure the element in the search pattern is not there.  A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Uso com match :
Positive lookahead retorna o prefixo quando ocorre o valor buscado (?=)
Negative lookahead retorna o prefixo quando não ocorre o valor buscado (?=)

```Javascript
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; /// busca q seguido de u sem retornar o u 
let qRegex = /q(?!u)/; /// busca q nao seguido de u sem retornar u 
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
```
Uso com Test
outro exemplo de lookahead
Retorna quando ocorre entre 3 a 6 caracteres  \w{3,6}
com pelo menos um digito  \d
incluindo letras e caracteres especiais \D*

```Javascript
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```
Comeca com nao digito, tem cinco de comprimento e tem dois digitos seguidos

```Javascript
let sampleWord = "bana12";
let pwRegex = /^(?=\D)(\w{2,})(?=\d{2,})/ // Change this line
let result = pwRegex.test(sampleWord);

```
Regular Expressions: Check For Mixed Grouping of Characters

```Javascript
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true
```
Ignorando palavra no meio

```Javascript
let myString = "Franklin D. Roosevelt";
let myRegex = /(?=.*Franklin|Eleanor)(?=.*Roosevelt).*/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```
Regular Expressions: Reuse Patterns Using Capture Groups
You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.
Using the .match() method on a string will return an array with the string it matches, along with its capture group.

```Javascript
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```
Aqui ele procura o caractere inicio com um digito ou mais ,procura um espaço , repete o primeiro grupo (mais de um caractere), repete o espaço e procura o caractere de fim . Ele só respondera a essa regex entao 100 100 100 100 nao funciona pois ele nao encontra o caractere de fim e inicio com tres repeticoes entre eles

```Javascript
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\2\1$/; // Change this line
let result = reRegex.test(repeatNum);

```
Regular Expressions: Use Capture Groups to Search and Replace

```Javascript
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```
You can also access capture groups in the replacement string with dollar signs ($).

```Javascript
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log (result);

```



change multiple whitespaces for only 1 

```Javascript
let str = "one     two     three";
let fixRegex = /  +/g;
let replaceText = " "; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log (result);

```




Regular Expressions: Remove Whitespace from Start and End
Seleciona e remove um texto do inicio e final de uma string

```Javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log (result);

```
### Scripts Interessantes

Converte um vetor inteiro de uma vez só para um tipo de dados 
Vi  = Vi.map((x) =>parseInt(x));

Retorna o indice das posições de um vetor que satisfazem uma condição

```Javascript
var data = [1,2,3];
console.log(data);
// With ES6 arrow syntax
console.log(data.map((_, i) => i).filter(e => data[e] === 3));
```
Retorna o numero de elementos em pos que estão entre inicio e fim

```Javascript
    const numEntreInicioEFim = (pos.map((valor, indice) => valor)
    .filter(e => e>=inicio && e <=fim )).length;
```
Retorna valores únicos de um array ordenado

```Javascript
       let valUnicos = [...new Set(vet.sort((current,next) => current - next))]; 
```
Gerar numero entre dois intervalos excluindo o max

```Javascript
function randomRange(myMin, myMax) {
  // Only change code below this line
  
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  
  // Only change code above this line
}
```
```Javascript
Em outras bases The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

```Javascript
function convertToInteger(str,radix) {
  return parseInt(str,radix);
}
convertToInteger("10011",2); /// converte a string para um inteiro na base binaria
```
Definition and Usage
The sort() method sorts the items of an array.
The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
By default, the sort() method sorts the values as strings in alphabetical and ascending order.
This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce an incorrect result when sorting numbers.
You can fix this by providing a "compare function" (See "Parameter Values" below).
Note: This method changes the original array.
Syntax
array.sort(compareFunction)
Parameter Values
Parameter	Description
compareFunction	Optional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
function(a, b){return a-b}
When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

Example:

When comparing 40 and 100, the sort() method calls the compare function(40,100).

The function calculates 40-100, and returns -60 (a negative value).

The sort function will sort 40 as a value lower than 100.
By default, the JavaScript Array.sort function converts each element in the array that needs to be sorted into a string, and compares them in Unicode code point order.
You may be wondering why 32 comes before 5. Not logical, huh? Well, actually it is. This happens because each element in the array is first converted to a string, and "32" comes before "5" in Unicode order.

```Javascript
const foo = [9, 1, 4, 'zebroid', 'afterdeck'];
foo.sort(); // returns [ 1, 4, 9, 'afterdeck', 'zebroid' ]

const bar = [5, 18, 32, new Set, { user: 'Eleanor Roosevelt' }];
bar.sort(); // returns [ 18, 32, 5, { user: 'Eleanor Roosevelt' }, Set {} ]

```
It’s also worth noting that unlike many other JavaScript array functions, Array.sort actually changes, or mutates the array it sorts.

```Javascript
const baz = ['My cat ate my homework', 37, 9, 5, 17];
baz.sort(); // baz array is modified
console.log(baz); // shows [ 17, 37, 5, 9, 'My cat ate my homework' ]
```
To avoid this, you can create a new instance of the array to be sorted and modify that instead. This is possible using an array method that returns a copy of the array. For example, Array.slice:

```Javascript
const sortedBaz = baz.slice().sort(); // a new instance of the baz array is created and sorted
```
r if you prefer a newer syntax, you can use the spread operator for the same effect:

```Javascript
const sortedBaz = [...baz].sort(); // a new instance of the baz array is created and sorted
```
Using Compare Functions to Sort

Let’s say that foo and bar are the two elements being compared by the compare function, and the return value of the compare function is set up as follows:

less than 0 — foo comes before bar
greater than 0  — bar comes before foo
equal to 0  — foo and bar are left unchanged with respect to each other.
Let’s look at a simple example with an array of numbers:

```Javascript
const nums = [79, 48, 12, 4];

function compare(a, b) {
  if (a > b) return 1;
  if (b > a) return -1;

  return 0;
}

nums.sort(compare);
// => 4, 12, 48, 79
```
This is now a good candidate for an arrow function:

```Javascript
nums.sort((a, b) => a - b);
```
Ordenando Vetor utilizando função de comparação

```Javascript
const singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
];

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}
```
To reverse the sorting order, you can invert the return value of the compare function:

```Javascript
unction compare(a, b) {
  ...

  //invert return value by multiplying by -1
  return comparison * -1;
}
```
```Javascript


## ES6

### História e Conceitos :

ECMAScript 6 - >ES6, ECMAScript 6 ou ES2015, é simplesmente a mais nova versão do JavaScript.

TC39 -> Na verdade, o nome mais usado atualmente é ES2015. A ideia do comitê responsável (conhecido como TC39) pelas atualizações da linguagem é justamente fazer um release anual. Então nesse ano teremos o ES2016 (ou ES7). E assim sucessivamente. ES6 é o mais conhecido pela comunidade. Stage 0: strawman, Stage 1: proposal, Stage 2: draft, Stage 3: candidate e Stage 4: finished

O TC39 focou em alguns objetivos no desenvolvimento do ES6: Ser uma linguagem melhor para construir aplicações complexas Resolver problemas antigos do JavaScript Facilidade no desenvolvimento de libraries

babel -> a grande maioria dos browsers ainda não dão suporte ao ES6, então o que podemos fazer para contornar essa limitação? Podemos usar um transpiler como o Babel. O Babel transforma o seu código de ES6 para ES5 (versão que a maioria dos browsers dá suporte hoje).

javascript é interpretada -> código é executado de cima pra baixo sem compilar para linguagem de máquina

Tipagem é fraca ( não há verificação em todas as operações , ex: você pode somar inteiros com strings ) e dinâmica ( a partir da atribuição o tipo saberá o tipo da variável - inferência de tipo) , você pode atribuir a mesma variável a diferentes tipos

```javascript
var x; // Now x is undefined 
x = 5;// Now x is a Number 
x = "John"; // Now x is a String
```
Typescript -> É um superset da linguagem, adiciona tipos e funcionalidades que o javascript nao tem por padrão (ex: enum)

Flow -> Semelhante ao typescript em relação a checagem de tipos , mas não é um superset da linguagem.

Funções de primeira classe : função pode ser atribuita a estrutura de dados e pode ser passada por argumentos ou retornadas por outras funções [https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/1-funcoes.js](https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/1-funcoes.js)

Closure -> Escopo léxico -> capacidade da funcao de lembrar o ambiente em que foi criada.

obs: console.log( `1- 0 é : " ${exemplo}<span> </span>`); -> mistura variável e texto na impressão

[https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/closure.js](https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/closure.js)

Javascript algorithms and data Structues certification

Cursando o Javascript algorithms and data Structues certification

### Aula 1.2 Currying, Hoisting, Imutabilidade, Tipos e Variáveis

curring -> Técnica de transformar uma função com n parâmetros em apenas uma função que recebe um parâmetro e para cada parâmetro vamos retornando uma nova função

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/curring.js

hoisting -> Foi um dos motivos para ter o escopo de bloco com let e const, ficou mais amigável , para nao permitir a utilização de uma variavel antes de ser definida.

hosting de variáveis -> eleva a criação da variavel e não sua atribuição hosting de funções -> eleva a função até a assinatura

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/hostingdevariaveis.js

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/hostingdefuncao.js

Nos exemplos anteriores vemos que a função funciona ok mas a variável dá undefined pois hosting declara a funcao mesmo antes de sua utilizacao e nao atribui valor a variável , apenas a cria

Imutabilidade -> Em linguagens funcionais o tipo de dado da variável nunca muda. O ES6 permite adicionar parametros a objetos. Evita alterações indesejadas nos atributos

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/imutabilidade.js

https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/imutabilidade2.js

O exemplo acima a lista de alunos nao sofre mudancas

Tipos e Variáveis -> var , let , const

var-> pioneiro no js , escopo global let e const -> escopo de bloco

obs : Se você atribui um tipo a uma variável primitiva const , ele nao permite que você altere este valor. Agora se vc criar um objeto const ai ele permite que você altere as propriedades desse objeto.

```Javascript
ex: const name = 'A'; name = 'B'; /// nao consigo alterar

const user = { name : 'A'; }; user.name = 'B' ; /// consigo alterar

user = { name : 'B'; }; /// nao dá certo
```
Tipos e variáveis
Obs : Retorna typeof retorna o tipo da variável

lenght,replace(procura e muda) ,slice (fatia da string), substr
tipo : https://www.w3schools.com/js/js_strings.asp métodos : https://www.w3schools.com/js/js_string_methods.asp Conversão : parseFloat (com casas decimais) parseInt (sem casas decimais)

number = numero (int, float,NAN etc... )
tipo : https://www.w3schools.com/js/js_numbers.asp métodos : https://www.w3schools.com/js/js_number_methods.asp

boolean = true ou false ,
null = nulo -> null sempre é object.(typeof null retorna object)
undefined= existe mas nao foi inicializada. Undefined é um tipo e não um object. (typeof undefined retorna undefined)

```Javascript


object =
ex: let user = { name:'Guilherme', endereco:'ABC' };

user.name = 'outro nome' ;/// funciona user['name'] = 'outro nome'; // funciona

const prop ='name'; user[prop] = 'outro nome' ; ///acessa o objeto com valor dinâmico name

function getProp(prop){ /// tb funciona return user[prop]; }

user.lastName = 'Cabrini'; ///cria uma nova propriedade

funções de object:
let user = { name:'Guilherme', endereco:'ABC' };

Object.keys(user); -> retorna as chaves name e endereço

Object.values(user); -> retorna aos valores armazenados nas chaves name e endereço

Object.entries(user); -> retorna um array de arrays, os arrays filhos tem a chave e o valor;

Object.assign(user,{fullName: 'Luiz Sousa' }); -> pega o objeto e concatena fullname ao objeto /// nao eh muito recomendado, nao altera o array principal, para mergear arrays é mais recomendado

novoObjUsrComAge=Object.assign({},user,{age :26}); /// novo array mergeando user com age , nao muda user

Object.freeze(user); /// nao permite qualquer alterações (criar, alterar , etc )no user

Object.seal(user); /// nao permite crie ou deletar keys, mas pode trocar o valor de uma key

delete user.name ; /// deleta a key name


```
function = também é um objeto , mas que pode ser chamado array = um objeto que tem relação com os itens dele , relacionando cada item com o tipo atribuido

// symbol cria um tipo unico

Permite atributos privados dentro de objetos e classes, simulando um objeto do tipo enum. Não é enumerable (isso é vc nao consegue enumerar ela como uma chave dentro de um for)

ex da propriedade enumerable :

```Javascript


for (const key in user ){ if (user.hasOwnProperty(key)){ console.log(${key}) /// so mostra as chaves que nao sao symbols }

}

/// pode ser contornado pela função get.OwnPropertySymbols() /// ai o for consegue listar

ou também pode ser usado o método Reflect.ownKeys(user); /// o metodo reflect consegue forçar a listagem de symblos

ex1) const symbol1 = Symbol(); const symbol2 = Symbol();

symbol1 === symbol2 ; / / retorna falso , cada um tem um tipo unico

ex2) const symbol1 = Symbol('name'); const symbol2 = Symbol('name');

const user = { [symbol1]: 'ABC', [symbol2]: 'DEF', } /// vc nao consegue sobrescrever essa propriedade mesmo elas tendo o mesmo atributo (name), ele vai criar dois symbols com name

```
### Aula2.1 Tipos e variáveis

Obs : Retorna typeof retorna o tipo da variável

String = texto

lenght,replace(procura e muda) ,slice (fatia da string), substr

tipo :
https://www.w3schools.com/js/js_strings.asp
métodos :
https://www.w3schools.com/js/js_string_methods.asp
Conversão :
parseFloat (com casas decimais)
parseInt  (sem casas decimais)

number = numero (int, float,NAN etc... )

tipo :
https://www.w3schools.com/js/js_numbers.asp
métodos :
https://www.w3schools.com/js/js_number_methods.asp

Bolean = true ou false ##### null = nulo  -> null sempre é object.(typeof null retorna object)

### undefined= existe mas nao foi inicializada. Undefined é um tipo e não um object. (typeof undefined retorna undefined)

object =

ex:

```Javascript
let user = {
name:'Guilherme',
endereco:'ABC'
};

user.name = 'outro nome' ;/// funciona
user['name'] = 'outro nome'; // funciona

const prop ='name';
user[prop] = 'outro nome' ; ///acessa o objeto com valor dinâmico name

function getProp(prop){ /// tb funciona
return user[prop];
}

user.lastName = 'Cabrini'; ///cria uma nova propriedade

```
### funções de object:

```Javascript


let user = {
name:'Guilherme',
endereco:'ABC'
};

Object.keys(user); -> retorna as chaves name e endereço

Object.values(user); -> retorna aos valores armazenados nas chaves name e endereço

Object.entries(user); -> retorna um array de arrays, os arrays filhos tem a chave e o valor;

Object.assign(user,{fullName: 'Luiz Sousa' }); -> pega o objeto e concatena fullname ao objeto  /// nao eh muito recomendado, nao altera o array principal, para mergear arrays é mais recomendado

novoObjUsrComAge=Object.assign({},user,{age :26}); /// novo array mergeando user com age , nao muda user

Object.freeze(user); /// nao permite qualquer alterações (criar, alterar , etc )no user

Object.seal(user); /// nao permite crie ou deletar keys, mas pode trocar o valor de uma key

delete user.name ; /// deleta a key name

function = também é um objeto , mas que pode ser chamado
array = um objeto que tem relação com os itens dele , relacionando cada item com o tipo atribuido

```
### symbol cria um tipo unico

Permite atributos privados dentro de objetos e classes, simulando um objeto do tipo enum.  Não é enumerable (isso é vc nao consegue enumerar ela como uma chave dentro de um for)

ex da propriedade enumerable :

```Javascript

for (const key in user ){
if (user.hasOwnProperty(key)){
console.log(${key}) /// so mostra as chaves que nao sao symbols
}

}

/// pode ser contornado pela função get.OwnPropertySymbols() /// ai o for consegue listar

ou também pode ser usado o método
Reflect.ownKeys(user); /// o metodo reflect consegue forçar a listagem de symblos

ex1)
const symbol1 = Symbol();
const symbol2 = Symbol();

symbol1 === symbol2 ; / / retorna falso , cada um tem um tipo unico

ex2)
const symbol1 = Symbol('name');
const symbol2 = Symbol('name');

const user = {
[symbol1]: 'ABC',
[symbol2]: 'DEF',
}
/// vc nao consegue sobrescrever essa propriedade mesmo elas tendo o mesmo atributo (name), ele vai criar dois symbols com name

```
### Aula 2.2 Functions_Operators

#### ES 6 Arrow function

// ES5
var x = function(x, y) {
return x * y;
}

// ES6
const x = (x, y) => x * y;   /// se colocar mais de uma expressão tem que colocar o return

const x = (x, y) => { return x * y };  /// boa pratica colocar return sempre

Funções também são objetos e podem receber propriedades !

const Fn = () => 'Code here' ;

Fn.prop = 'Posso criar propriedades';
console.log (Fn.prop);

const fn1 =>  fnparam => allowed => { /// uma funcao que recebe um parametro e e se permitido executa outra funcao
if (allowed) {
fnParam();
}

}

/// A funcao abaixo pode ser reescrita como

function controlFnExec (fnParam)
{
return function(allowed) {
if (alloed) {
fnParam();
}
}
}

/// a funcao abaixo é a reescrita da funcao acima usando arrow function

function controlFnExec (fnParam)
{
return function(allowed) {
if (allowed) {
fnParam();
}
}
}

const controlFnExec => fnParam => allowed => {  /// mais enxuto , mais limpo
if (allowed) {
fnParam();
}
}

#### Principal diferença entre funcao arrow e function normal

this referencia o contexto em que foi criada
em funcoes que são arrow function o this aponta sempre para o contexto no qual ele foi criado (ex fora da funcao )
em funcoes que não são arrow function o this aponta sempre para o contexto no qual o this é executado (ex. dentro da função)

#### Array

Também é um objeto . Importante ! Filter map e reduce (sempre criam um novo objeto a partir do objeto original)
Filter -> filtra  ( ex: só valores acima de 10)
Map -> cria um novo array realizando uma funcao em cada elemento (ex mult todo mundo por 2 )
Reduce -> aplica uma funcao a todos os elementos da esquerda para direita (ex: soma todos os valores)

Definicao
https://www.w3schools.com/js/js_arrays.asp
métodos
https://www.w3schools.com/js/js_array_methods.asp
Sort
https://www.w3schools.com/js/js_array_sort.asp
iteração
https://www.w3schools.com/js/js_array_iteration.asp

#### Operadores:

JS possui operadores unários, binario  e ternário

a = ++2 unário /// a jah recebe valor incrementado
b = 2++ unário /// b recebe o valor atual 2

a+b binário
a%b binário resto
&& and
|| or
!true retorna false
!false retorna true
!"Gato" retorna false /// string preenchida com valor é true
" " true
1
"" false
0

!!

ternário
condicao ? valor1:valor2
true ? 'foo' : 'bar' /// retorna 'foo'
false ? 'foo' : 'bar' /// retorna 'bar'

+true  soma 1
+false soma zero ( funciona como se fosse um parse int)
+"3" retorna 3

2**3 exponenciacao

== igualdade (true)
=== igualdade e do mesmo tipo (true)
!== operandos iguals mas nao sao do mesmo tipo (true)

#### Operador Spread:

Introduzido no ES6

Itera cada item e passa um parametro

var parter = ['ombro','joelho'] ;
var musica = ['cabeca',...partes,'e,'pes'] ;

concatena dois arrays criando um novo array , no lugar de partes insere ombro joelho

function fn (x,y,z) {}
var args = [0,1,2];
fn(...args) ;  /// x = 0 , y = 1 , z = 2

#### Operador delete e typeof são unários

#### Operador in

var musica = new Array ["A", "B", "C"] ;

0  in musica /// true
"A" in musica; /// retorna false vc deve especificar o num do indice e nao o valor
"A" in musica[0]; /// retorna true
"lenght" in musica /// true pois length é uma propriedade de todo string

#### Operador binario instanceof

Verifica se um objeto é uma instancia

var dia = new Date (2018,12,17);
if (dia instance of Date) // true

#### for in e for of

for in -> Passa por todos os valores dos objetos

for of ->  retorna o indice de cada objeto

#### continue

if (element %2 ===0 )
continue

pula a execução para os pares

### Aula 3.1 Orientação à objeto

#### Herança

Baseada em protótipos
prototype : variável que armazena definições do projeto.
Sempre que criamos uma variável em javascrypt ele cria uma variavel __proto__ que aponta para o tipo da variável que criamos (construtor)

Toda função construtora tem um prototype

myText.__proto__.split é o mesmo que my myText.split ou ainda String.prototype.split

myText.__proto__.split === String.prototype.split /// true

myText.constructor === String ///true

__proto __ -> prototype -> constructor

new Foo(); /// um novo objeto é criado a partir da função construtora Foo herdando Foo.prototype

se a função construtora tem um retorno será respeitado. Senão será retornado o objeto criado em 1

function Pessoa(name){
this.name = name;
return {
name:'teste'
};
}

const p = new Pessoa ('Guilherme' )
console.log (p);  /// retrona teste

function Pessoa(name){
this.name = name;
}
const p = new Pessoa ('Guilherme' )
console.log (p);  /// retorna Guilherme

obs  : função call passa um contexto para esta função ser executada

ex 2: O problema dessa abordagem é que toda vez que realizarmos new Cachorro() latir e movimentar serão criadas
'use scrict';
function Animal (qtdePatas){
this.qtdePatas = qtdePatas;
this.movimentar = function() {
}
}

function Cachorro (morde){
Animal.call(this,4); /// a funcao animal vai ser executada quando Cachorro for instanciada
this.morde = morde;
this.latir = function() {
console.log ('Au !');
}
}
//
const pug = new Cachorro (false);
//const pitbull  = new Cachorro (true);

console.log(pug);

ex 3  : Nesta abordagem usamos o prototype que define o objeto cachorro tera qt deparas e movimentar por padrao
nao serão criadas as funcoes movimentar e latir , se new cachorro já foi dado e um novo objeto for criado , o cachorro terá esta nova propriedade

'use scrict';

function Animal (){}
Animal.prototype.qtdePatas =0;
Animal.prototype.movimentar = function(){};

function Cachorro (morde){
this.qtdePatas = 4;
this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
console.log ('Au!');
}

//
const pug = new Cachorro (false);
//const pitbull  = new Cachorro (true);
console.log(pug);

Cuidado! com prototype vc pode trocar a implementação até mesmo de um tipo nativo , vc pode mudar
a programação do String.split por exemplo
ex: String.prototype.split = function (){ console.log ('Deu ruim')} ;

#### Classes

Criado no Es6 como uma simplificação de protótipos , uma supersintaxe de funções , por baixo dos panos é criado um prototype
```Javascript 
class Animal {
constructor(qtdePatas) {
  this.qtdePatas =4 ;
  }
}

class Cachorro extends Animal {
constructor(morde) {
  super(4);
  this.morde = morde;
  }
 }
const pug = new Cachorro (false);
console.log(pug);
```
### JavaScript Classes
A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method:

Example
Create a Car class, and then create an object called "mycar" based on the Car class:
```
class Car {  // Create a class
  constructor(brand) {  // Class constructor
    this.carname = brand;  // Class body/properties
  }
}
mycar = new Car("Ford");  // Create an object of Car class
```

Class Keywords
Keyword	Description
extends	Extends a class (inherit)
static	Defines a static method for a class
super	Refers to the parent class


#### Modificadores de Acesso

Js nao tem
Atualmente v 12 do node , mas ainda nao tem suporte nos browsers , controla o que é privado e publico nos browsers
usa funções get e set para recuperar os atributos
sintaxe:
hashtag_nomevar -> torna a variável privada

#### Encapsulamento

Oculta detalhes do funcionamento interno

pode-se usar metodos set e get (v12 do node) para setar e obter o valor de um atributo

#### Static

permite que acesse métodos e atributos sem instanciar uma classe

ex1: com funcoes , implementação de static do JS
```
'use strict';

function Person() {}

Person.walk = function () {
console.log('walking');
}
console.log(Person.walk());

ex2: com classes com ES6 temos a palavra chave static pode ser chamada sem instanciar

'use strict';
function Person() {}
static walk()  {
console.log('walking');
}

console.log(Person.walk());
```

### Orientação a objetos e desing patterns

DP são soluções gerais para problemas recorrentes em desenvolvimento de um software
Não se trata de um framework ou um código , mas uma definiçao de alto nivel de como um problema pode ser solucionado

Pattern Languange -> 1978 Christopher Alexander Sara , Murray  253 tipos de problemas / desafios de projetos

formato de um patterns :

Nome, Exemplo, contexto , problema, solução.

1987 kent e ward 5 padroes de projetos ->

1994 Gof Erich, Richard , Ralph John  DP Elements of Reusable OO Software -> Tipos Criação , estruturais e comportamentais
```
Padroes de criação : abstraem e / ou adiam o processo de criação dos objetos , tornamm o sistema independete de como seus objetos são criados , compostos e representados
mais famosos :
Abstract Factory
Builder
Factory Method
Prototype
Singleton
```

Padroes esttruturais :

Se preocupam com a forma como classes e objetos sao compostos para formar estruturas maiores : Adapter, Bridge, Composite, Decorator , Facade , Business Delegate , Flyweight, Proxy

Padroes Comportamentais :
Algoritmos e atribuições de responsabilidades entre os objetos, não descrevem apenas padroes classe se objetos , mas tb de comunicação entre os objetos : Chain of Responsibility , Command, Interpreter , Iterator, Mediator , Observer , State, Strategy , Template Method e visitor

Patterns mais usados em Js : Factory , Singleton , Decorator , Observer e Module
```
Factory > Funções que retornam um objeto sem a necessidade de chamalas com new são consideradas factory

Singleton > cria um unica instancia de uma funcao construtora e retorna-la toda vez que for necessário utilizala (ex: JQuery) , mesmo que você crie uma nova instancia , ela sempre retornará o mesmo valro

Decorator > Uma funcão que recebe outra função como parametro e altera seu comportamento sem modifica-la explicitamente

Observer >  A instancia (subscriber) mantem uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças de estado (no VUE a propriedade notify ,toda vez que há uma mudança de estado quem estiver escutando será notificado ) manter uma lista no observer , criar uma função subscribe , outra unsubscribe e notify

Modoule > Permite organizar o corido sem a necessidade de expor variáveis globais No ES6 (export default)
```
### ES6 let e var

let foi introduzido no Es6 para evitar os problemas da variável pública var a variable with the same name can only be declared once
```
let camper = 'James';
let camper = 'David'; // throws an error

Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:
"use strict";
x = 3.14; // throws an error because x is not declared

When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

var printNumTwo;
for (var i = 0; i < 3; i++) {
if (i === 2) {
printNumTwo = function() {
return i;
};
}
}
console.log(printNumTwo());
// returns 3

printNumTwo() prints 3 and not 2 i foi atualizado e o valor retornado é o valor global de u e nao o valor de i de quando a função foi criada dentro do loop a correção é utilizar o let

'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
if (i === 2) {
printNumTwo = function() {
return i;
};
}
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"

function checkScope() {
'use strict';
let i = 'function scope';
if (true) {
let i = 'block scope';
console.log('Block scope i is: ', i);
}
console.log('Function scope i is: ', i);
return i;
}
```


### ES6 const

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
trying to reassign a variable declared with const will throw an error.
A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.Pode mudar cada elemento mas nao pode mudar o vetor inteiro
```
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

### ES6 Object.freeze

To ensure your data doesn't change, JavaScript provides a function Object.freeze(nome_objeto) to prevent data mutation.

### ES6 arrow function

Nova Sintaxe que permite simplificar a declaração de funções. magic recebe o resultado da função ou seja uma data.
```
const magic = () => {
"use strict";
return new Date();
};
```
Quando a função nao tem corpo pode-se omitir o return

const myFunc = () => "value";

Argumentos em uma arrow function :

// doubles input value and returns it
const doubler = (item) => item * 2;

// the same function, without the argument parentheses
const doubler = item => item * 2;

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;

parametro default em arrow functions
```
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```
Parametro rest em arrow functions
```
function howMany(...args) {
return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

const sum = (...args) => {
return args.reduce((a, b) => a + b, 0);
}
```
### Operador Spread :

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
```
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

const spreaded = ...arr; // will throw a syntax error

/// copia todo conteudo de arr1 em arr2
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
```

### Destructuring Assignment

Extrai informações de um objeto de maneira visualmente limpa
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
```
const { name, age } = user;
// name = 'John Doe', age = 34

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

const HIGH_TEMPERATURES = {
yesterday: 75,
today: 77,
tomorrow: 80
};

// Only change code below this line
const {today,tomorrow} = HIGH_TEMPERATURES;
// Only change code above this line

Destructuring Assignment mudando o nome da variavel ao usar Destructuring Assigment

const HIGH_TEMPERATURES = {
yesterday: 75,
today: 77,
tomorrow: 80
};

// Only change code below this line

const {today:highToday,tomorrow:highTomorrow}= HIGH_TEMPERATURES;

// Only change code above this line

Destructuring Assignment variáveis vindas de um objeto encapsulado

const user = {
johnDoe: {
age: 34,
email: 'johnDoe@freeCodeCamp.com'
}
};

const { johnDoe: { age, email }} = user; /// mesmo nome de variaveis

const { johnDoe: { age: userAge, email: userEmail }} = user; /// mudnado o nome da variavel

const LOCAL_FORECAST = {
yesterday: { low: 61, high: 75 },
today: { low: 64, high: 77 },
tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: {low:lowToday, high:highToday}} = LOCAL_FORECAST ;
// Only change code above this line
```


Destructuring Assignment variáveis vindas de um array

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.
```
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

let a = 8, b = 6;
// Only change code below this line

[b,a] = [a,b];
```

Usando Destructuring com parametro rest para redesignar variaveis

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:
```
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```
The rest element only works correctly as the last variable in the list.
```
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
"use strict";
// Only change code below this line

const  [,,...arr]= list; // Change this line
// Only change code above this line
return arr;
}
const arr = removeFirstTwo(source);
```
Use Destructuring Assignment to Pass an Object as a Function's Parameters
```
const profileUpdate = (profileData) => {
const { name, age, nationality, location } = profileData;
// do something with these variables
}

ou ainda
const profileUpdate = ({ name, age, nationality, location }) => {
/* do something with these fields */
}
```
Use destructuring assignment within the argument to the function half to send only max and min inside the function.
```
const stats = {
max: 56.78,
standard_deviation: 4.34,
median: 34.54,
mode: 23.87,
min: -0.75,
average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0;
// Only change code above this line
console.log(half(stats));  /// pega os parametros do max e min do objeto dentro dos parametros na chamada half(param) e aplica a função a ele
```
### Create Strings using Template Literals

A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:
```
const person = {
name: "Zodiac Hasbro",
age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```
A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.

###
```
const result = {
success: ["max-length", "no-amd", "prefer-arrow-functions"],
failure: ["no-var", "var-on-top", "linebreak"],
skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
"use strict";

// Only change code below this line
const resultDisplayArray = [];
for (let i = 0 ; i < arr.length; i++ )
{
resultDisplayArray [i]= `<li class="text-warning">${arr[i]}</li>`;
}

// Only change code above this line

return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log (resultDisplayArray);
```

ES6: Write Concise Object Literal Declarations Using Object Property Shorthand

ES6 adds some nice support for easily defining object literals.

Consider the following code:
```
const getMousePosition = (x, y) => ({
x: x,
y: y
});
```
getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:
```
const getMousePosition = (x, y) => ({ x, y });
```
ES6: Write Concise Declarative Functions with ES6

When defining functions within objects in ES5, we have to use the keyword function as follows:
```
const person = {
name: "Taylor",
sayHello: function() {
return `Hello! My name is ${this.name}.`;
}
};
```
With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
```
const person = {
name: "Taylor",
sayHello() {
return `Hello! My name is ${this.name}.`;
}
};
```
### ES6: Use class Syntax to Define a Constructor Function

ES6 provides a new syntax to create objects, using the class keyword. It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
```
var SpaceShuttle = function(targetPlanet){
this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

The class syntax simply replaces the constructor function creation:

class SpaceShuttle {
constructor(targetPlanet) {
this.targetPlanet = targetPlanet;
}
}
const zeus = new SpaceShuttle('Jupiter');
```
It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
Notes:

UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

### ES6: Use getters and setters to Control Access to an Object

You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
```
class Book {
constructor(author) {
this._author = author;
}
// getter
get writer() {
return this._author;
}
// setter
set writer(updatedAuthor) {
this._author = updatedAuthor;
}
}

const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
```
Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.
```
// Only change code below this line
class Thermostat {
constructor(temperature) {
this.temperature = (5/9) * (temperature-32);;
}
// getter
get temperature() {
return this._temperature;
}
// setter
set temperature(temperature) {
this._temperature = temperature;
}
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log (temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log (temp);
```

### ES6: Create a Module Script

utilizando um script
```
<html>
  <body>
    <!-- Only change code below this line -->
  <script type="module" src="filename.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>
```
ES6: Use export to Share a Code Block
Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.
```
export const add = (x, y) => {
return x + y;
}
The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
return x + y;
}

export { add };
```
When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:
```
export { add, subtract };

const uppercaseString = (string) => {
return string.toUpperCase();
}

const lowercaseString = (string) => {
return string.toLowerCase();
}

export { uppercaseString,lowercaseString };
```
### ES6: Reuse JavaScript Code Using import

import { add, subtract } from './math_functions.js';

### ES6: Use * to Import Everything from a File

import * as myMathModule from "./math_functions.js";

### ES6: Create an Export Fallback with export default

you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
```
// named function
export default function add(x, y) {
return x + y;
}

// anonymous function
export default function(x, y) {
return x + y;
}
```
There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

### ES6: Import a Default Export

import add from "./math_functions.js";

The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

### ES6: Create a JavaScript Promise

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});

### ES6: Complete a Promise with resolve and reject

A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.
```
const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer represents a response from a server
let responseFromServer;

if(responseFromServer) {
resolve("We got the data");// Change this line
} else {
reject("Data not received");// Change this line
}
});
```

### ES6: Handle a Fulfilled Promise with then

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:
```
myPromise.then(result => {
// do something with the result.
});

ex :

const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer is set to true to represent a successful response from a server
let responseFromServer = true;

if(responseFromServer) {
resolve("We got the data");
} else {
reject("Data not received");
}

makeServerRequest.then(result => {
console.log(result);
});

});
```

### ES6: Handle a Rejected Promise with catch
```
myPromise.catch(error => {
// do something with the error.
});

const makeServerRequest = new Promise((resolve, reject) => {
// responseFromServer is set to false to represent an unsuccessful response from a server
let responseFromServer = false;

if(responseFromServer) {
resolve("We got the data");
} else {
reject("Data not received");
}
});

makeServerRequest.then(result => {
console.log(result);

makeServerRequest.catch(error => {
console.log(error); // do something with the error.
});

});
```

## ES6 Avancado

### Promisses

Promises have replaced callback functions as the preferred programming style for handling asynchronous calls. A promise is a holder for a result (or an error) that will become available in the future (when the async call returns). Promises have been available in JavaScript through third-party libraries (for example, [jQuery](https://api.jquery.com/promise/) and [q](https://github.com/kriskowal/q)). ECMAScript 6 adds built-in support for promises to JavaScript.

In this unit, you create a simple application called ratefinder that returns a list of available mortgage rates.

### Curso entendendo promises de uma vez por todas

Lucas Santos -> https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2
###Parte 2
Promises : Podemos fazer varias requisições em javascript para diversas páginas e isto pode nao ser respondido na hora
poderíamos paralelizar essas promises realizando um código assíncrono :

Código Assíncrono
Requests HTTP
Leitura de arquivos
Acesso a serviços externos
I/O

Em um código assíncrono , o tempo total de execução é o tempo de execução da promisse mais lenta
pois todas estão executando em paralelo

Funcionamento de uma promisse no node.js
![](https://github.com/luizrosalba/EntendendoPromisesdeumavezportodas/blob/master/Capturar.PNG)

Loop infinito fica rodando recebendo as requisições e armazenando. Caso você precise ler um arquivo imenso , nao precisa parar a execução para lê-lo.

Leitura Assíncrona : Le o poema inteiro e pega o buffer e imprime na tela

```Javascript
const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// This is an example of a sync file read, it pauses the program and reads the file
const content = fs.readFileSync(path.resolve(basePath, 'arquivo.txt'))

console.log(content.toString())

console.log('end')
```
```Javascript
  
const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin\n')

// Take all files in the directory
const files = fs.readdirSync(path.resolve(basePath))
// Filter the ones we want
const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))
//Read all files in order, synchronously
for (const file of sentences) {
  const sentence = fs.readFileSync(path.resolve(basePath, file)).toString()
  console.log(sentence, '\n')
}

console.log('end')

```
Callback : função que será executada apos outra função. Leitura assincrona . Perceber que ele executou begin (síncrono) , iniciou a leitura do texto (assíncrono) que é demorada , nao parou a execução , executou o end (síncrono) e somente quando terminou a leitura que imprimiu o texto

```Javascript
  
  
const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// This is an async fileRead process, it won't stop the program
// Notice the function in the end, that is a callback
fs.readFile(path.resolve(basePath, 'arquivo.txt'), { encoding: 'utf-8' }, (err, data) => {
  // This is the way we handle errors in callbacks
  if (err) throw err
  console.log(data)
})

console.log('End')
```
Utilizando uma função como callback

```Javascript
  
const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// This is an async fileRead process, it won't stop the program
// Notice the function in the end, that is a callback
fs.readFile(path.resolve(basePath, 'arquivo.txt'), { encoding: 'utf-8' }, cb)

console.log('End')

function cb (err, data) {
  // This is the way we handle errors in callbacks
  if (err) throw err
  console.log(data)
}
```
Lendo 4 arquivos de maneira assíncrona, cada execução trará um resultado diferente pois não podemos prever qual levará menos tempo para ler. Cada Arquivo terá um callback

```Javascript
const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Take all files in the directory
const files = fs.readdirSync(path.resolve(basePath))
// Filter the ones we want
const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

//Read all files in order, synchronously
for (const file of sentences) {
  fs.readFile(path.resolve(basePath, file), { encoding: 'utf-8' }, cb)
}

console.log('End')

function cb (err, data) {
  if (err) throw err
  console.log(data)
}
```
Callback hell

```Javascript
const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Take all files in the directory
fs.readFile(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' }, (err, data) => {
  cb(err, data)
  fs.readFile(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' }, (err, data) => {
    cb(err, data)
    fs.readFile(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' }, (err, data) => {
      cb(err, data)
      fs.readFile(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' }, (err, data) => {
        cb(err, data)
      })
    })
  })
})

console.log('End')

function cb (err, data) {
  if (err) throw err
  console.log(data)
}
```
callback hell um pouco mais ordenado

```Javascript
const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Take all files in the directory
fs.readdir(path.resolve(basePath), (err, files) => {
  if (err) throw err
  files
    .filter((file) => /s[1-4].txt/gi.test(file)) // Filter the files
    .forEach((sentenceFile) => { // For each sentence, reads and prints (async)
      fs.readFile(path.resolve(basePath, sentenceFile), { encoding: 'utf-8' }, cb) // Will print unordered
    })
})

console.log('End')

// this callback is called everytime readFile executes
function cb (err, data) {
  if (err) throw err
  console.log(data)
}
```
CAllback recursivo

```Javascript
const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Begin')

// Take all files in the directory
start(1, 4)

console.log('End')

function start (index, max) {
  if (index > max) return
  fs.readFile(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8' }, (err, data) => cb(err, data, index, max))
}

function cb (err, data, index, max) {
  if (err) throw err
  console.log(data)
  return start(index + 1, max)
}
```
Utilizando promises ao inves de callbacks . todo catch e then nao é uma promise propriamente dita mas retorna uma promise

```Javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('End'), 5000)
})

console.log('Begin')
promise.then((text) => console.log(text)) 
// Or
promise.then(console.log)
// Or
promise.then(
  (res) => setTimeout(() => res('End'), 5000),
  (rej) => console.error(rej)
)
```
then = resolvido , catch = erro

```Javascript
promise.then((res)=> {),(rej)=>{}) 
é o mesmo que 
promise.then((res)=> {)) 
promise.catch((rej)=>{}) 
```
A maioria das libs externas nao funciona com promisify

```Javascript
  
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'

const readFileAsync = promisify(fs.readFile)

// Will render Begin and End first
console.log('Begin')
readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' })
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
console.log('End')
```
Encadeamento de promises
podemos encadear thens e catches

```Javascript
const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))
/// 50% de chance de dar erro 
console.log('Begin')

// First case, if we have an error the last 'then' won't execute
coinFlip.then((data) => console.log('Yay 1'))
  .then(() => console.log('End1'))
  .catch((err) => console.error('Error in first case, then will not execute'))

// Second case, in an exception the last then will execute
coinFlip.then((data) => console.log('Yay 2'))
coinFlip.catch((err) => console.error('Next then will execute'))
coinFlip.then(() => console.log('End2'))

// Same thing
coinFlip
  .then((success) => console.log('Yay 3'), (fail) => console.log('Error in third case'))
  .then(() => console.log('End3'))
```
Cada catch só vale pra um then; quando ocorre um erro no then ele percorre todos os outros até encontrar o primeiro catch

```Javascript

// Second case, in an exception the last then will execute
coinFlip.then((data) => console.log('Yay 2'))
coinFlip.catch((err) => console.error('Next then will execute'))
coinFlip.then(() => console.log('End2'))

// Same thing
coinFlip
  .then((success) => console.log('Yay 3'), (fail) => console.log('Error in third case'))
  .then(() => console.log('End3'))
```
then = garçom (pode ter dois ) e catch seria outro pedido. A execução não para

```Javascript
const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))

console.log('Begin')

coinFlip.then((data) => console.log(data))
  .catch((err) => { throw err })
  .then(() => console.log('End1'))

new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))
```
Multiple catches

```Javascript
const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))

console.log('Begin')

// First catch will capture error from first then, last catch will capture errors from next then
coinFlip.then((data) => console.log('Yay 1'))
  .catch(() => console.log('First catch'))
  .then(() => console.log('Result'))
  .catch((err) => console.error('Error in last then'))
  .then(() => console.log('End1'))


// // Both catches will be executed
coinFlip.then((data) => console.log('Yay 1'))
  .then(() => console.log('Result'))
  .then(() => console.log('End1'))

coinFlip.catch(() => console.log('First catch'))
  .catch((err) => console.error('Error in first case, next then will not execute'))


// Both catches will be executed
coinFlip.then((data) => console.log('Yay 1'))
  .catch((err) => console.error('Catch after then'))
  .then(() => console.log('Result'))
  .then(() => console.log('End1'))

coinFlip.catch(() => console.log('First catch'))

// Catch from coinFlip will execute only when the first then fails, second catch will always be executed
coinFlip.then((data) => console.log('Yay 1'))
  .then(() => { throw new Error() })
  .catch((err) => console.error('Error in last then'))
  .then(() => console.log('End1'))

coinFlip.catch(() => console.log('First catch'))
```
```Javascript
const coinFlip = new Promise((resolve, reject) => setTimeout(() => Math.random() > 0.5 ? resolve(true) : reject(false), 2000))
let p = Promise.resolve('Yay').then(coinFlip) /// coinflip nao eh funcao eh uma promise 
/// Promise.resolve retorna uma promise 

// P will resolve immediately to YAY, but will not be settled until the second promise resolves with the coinflip
p.then(console.log).catch(() => console.log('error')) /// resolve a primeira depois espera 2 s e resolve a segunda 
```
Finally Será sempre executando dando erro ou nao

```Javascript
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'

const readFileAsync = promisify(fs.readFile)

console.log('Begin')
readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8' })
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log('End'))
```
Promise hell , encadeamento de promises

```Javascript
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'

const readFileAsync = promisify(fs.readFile)

console.log('Begin')
readFileAsync(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' })
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' })
  })
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' })
  })
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' })
  })
  .then(console.log)
  .finally(() => console.log('End'))
```
Melhorando o promise hell

```Javascript
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'

const readFileAsync = promisify(fs.readFile)

function read (index) {
  return readFileAsync(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8' })
}

function start (index, max) {
  if (index > max) return
  read(index).then((data) => {
    console.log(data, '\n')
    start(index + 1, max)
  })
}

start(1, 4)
```
Promise.all resolve todas as promises
Se qquer uma falhar vai dar erro em todas e retornara apenas o 1º catch

```Javascript
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'

const readFileAsync = promisify(fs.readFile)

function read (index) {
  return readFileAsync(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8' })
}

console.log('Begin')
const promiseArray = []
for (let i = 1; i <= 4; i++) promiseArray[i - 1] = read(i) // Arrays start at 0, so if we are populating index 1, the 0 will be undefined

Promise.all(promiseArray).then(console.log)
```
### Funções avançadas do ES6

### 1.1 Arrow function

O arrow function traz funções anonimas e veio para solucionar o problema do contexto no qual ele é realizado. Antes do ES6, haviam algumas situações onde o contexto (this) poderia ser ambíguo (criar confusão sobre a qual objeto o this está se referindo) . Arrow functions tem o contexto igual ao código que o envolve , o this se referencia as chaves do arrow function .

Se houver apenas um argumento e uma expressao (que não seja destruction ou rest operator (...) )
pode-se omitir o return se o lado direito for apenas uma expressão

```javascript
var sum = a => a+5;  
console.log(sum(1));
```
parenteses quando há mais de um argumento

```javascript
var sum = (a,b)=> a+b; 
console.log(sum);
console.log(sum(1,2));
```
caso haja mais de uma expressão   expressão as chaves são obrigatórias

```javascript
var sum = (a,b)=> {
  if (a>b) return a+b; 
  else  return a-b;  
}
console.log(sum(1,2));
```
### Hoisting e Arrow function

Arrow functions nao realizam hoisting , você terá erro se tentar invocar antes de declarar

### Criando objetos

Criando um objeto via função construtora

```javascript
function Car(){
  this.foo ='bar'; 
}
console.log(new Car());

Criando um objeto via arrow function 
```javascript
 var createObj = () => ({test:123});
console.log(createObj());
```
Obs: Não é possível criar um objeto usando uma função construtora por arrow function

### 1.2 Default Function Arguments

Evita problemas com valores não inicializados

```javascript
function multiply (a=b,b=1)
{
  return a*b; 
}
console.log(multiply(2,3)); //6
console.log(multiply(2)); ///2 
console.log(multiply(undefined,2));///4 
```
```javascript
function multiply (a=1,b=a)
{
  return a*b; 
}
console.log(multiply(2,undefined)); /// b =a resultado 4 
```
lazy evaluation
Sempre que o parametro for esquecido uma função será chamada

```javascript
function randNumber()
{
  return Math.random() *10; 
}

function multiply (a,b = randNumber())
{
  return a*b; 
}
console.log(multiply(2,undefined)); /// resultado aleatório só invocará a função randNumber caso não haja parametro2 
```
### 1.3 Enhanced Object Literals

um objeto pode ter métodos

```javascript
var obj = {
  sum:  function (a,b) { return a+ b; } /// poderia ser sum:  function batata(a,b) { return a+ b; } 
}; 
console.log(obj.sum(1,2));
```
Também pode ser declarado como

```javascript
var obj = {
  sum(a,b) { return a+ b; }
}; 

console.log(obj.sum(1,2)); /// 3 
```
No ES6 Quando a propriedade do objeto é igual a uma variavel , podemos omitir o prop1 : prop1 dentro do obj

```javascript
var prop1 = 'bla bla'; 
var obj = {
  prop1
}; 
console.log (obj.prop1); /// bla bla 
```
Também funciona com métodos

```javascript
function metodo1(){
  console.log('bla bla'); 
}
var obj = {
  metodo1
}; 
obj.metodo1(); /// bla bla 
```
No ES6 podemos também usar variaveis e até concatenar o nome da propriedade de um objeto

```javascript
var propName ='test'; 

var obj = {
  [propName + 'concat']: 'prop value' 
}; 

console.log(obj);
```
```javascript

```
```javascript

```
### Aplicando Conceitos Rest, Spread , Operator e Destructuring

### 2.1 Conheça Rest e Spread Operator

Arguments -> variavel reservada dentro de uma função para armazenar os argumentos da função
Antes do ES6 :

```Javascript
function soma(a,b){
  var value=0; 
  for (var i=0; i<arguments.length ; i++ )
  {
    value+= arguments[i];
  }
  return value; 
}
console.log(soma(1,2,3,4,5)); /// 15 
```
Depois do ES6 com o rest operator ... (tres pontos dentro da lista de argumentos)
(pega todos os argumentos de uma função e transforma em um array)

```Javascript
function soma(...args){
  return args.reduce((acc,value)=> acc+value,0); 
}
console.log(soma(1,2,3,4,5)); //// 15 
```
Obs : arguments tem como prototype um objeto enquanto o operador rest retorna um array
Obs2 : arguments é inexistente em arrow functions

Mesmo exemplo com arrow function

```Javascript
const sum = (...rest) => {
 console.log( rest.reduce((acc,value)=> acc+value,0));
} ;
(sum(1,2,3,4,5)); /// 15 
```
Apply pega o retorno do método multiply e aplica no metodo soma

```Javascript

const multiply  = (...args) => {
 console.log( args.reduce((acc,value)=> acc*value,1));
} ;

const sum = (...rest) => {
 multiply.apply(undefined,rest);
} ;
(sum(5,5,5,2,3));
```
Para evitar o problema dos contextos novamente , utiliza-se o spread operator ele pega todos os itens de um array e transforma em argumentos para uma segunda função (parecido com o apply)

```Javascript

const multiply  = (...args) => {
 console.log( args.reduce((acc,value)=> acc*value,1));
} ;

const sum = (...rest) => {
 multiply(...rest);
} ;
(sum(5,5,5,2,3)); ///750

```
O spread operator pode ser usado em strings, arrays, e objetos literais e iteraveis

```Javascript

const str = 'Digital Input'; 
const arr = [1,2,3,4]; 
function logArgs(a,b,c,) {
  console.log(a,b,c);
}
logArgs(...str); /// D i g 
logArgs(...arr); /// 1 2 3 cada item vira um argumento da funcao log

```
Concatenando com o spread operator

```Javascript
const arr = [1,2,3,4]; 
const arr2 = [...arr,5,6,7]; 
console.log(arr2); /// 1 , 2 , 3 , 4, 5 , 6 ,7 
```
Pode ser usado em objetos

```Javascript

const obj = {
  test:123
};

const obj2 = { 
 ...obj,
  test:'hello' ,
   
}
console.log(obj2); 
/// {  test:"hello"  } 
/// obs; a ordem faz diferença  nesse caso obj vem antes de hello por isso a saida eh hello 

```
Erro , não pode ser feito pois spread só pode ser usado com objetos iteraveis

```Javascript
const obj = {
  test:123
};
const arr = [...obj];  /// erro 
```
Shallow clone (clone raso ): Utilizar um spread operator para clonar um objeto inicial não permite que alterar o objeto clonado altere o objeto  inicial

```Javascript
const obj = {
  test:123
};
const obj2 = obj;
obj2.test = 456 ; 

console.log(obj); /// 456 alterou o objeto inical 
```
```Javascript
const obj = {
  test:123
};
const obj2 = {...obj};
obj2.test = 456 ; 

console.log(obj);/// 123  nao alterou o objeto inicial
```
### 2.2 Destructuring em React.js (imutável)

utilizado para destruir arrays com uma notação enxuta

```Javascript
var arr = ['apple','banana','orange',['Tomato']];

var apple=arr[0];
var banana=arr[1];
var orange=arr[2];
var tomato=arr[3][0];
/// com destruction 
var [apple2,banana2,orange2,[tomato2]] =   [
  'apple',
  'banana',
  'orange',
  ['tomato']]; /// notacao é mais enxuta 


```
O mesmo pode ser feito com objetos

```Javascript
var obj  = {
  name:'Celso'
}
 /// sem destruction name = obj.name;  
var {name} = obj /// destroi o objeto , procura a propriedade name e pega seu valor 
console.log(name); 

```
Destruindo e logo em seguida atribuindo a outra variável

```Javascript
var obj  = {
  name:'Celso'
}
var {name:name2} = obj
console.log(name2); 
```
Também pode ser feito com nestes props

```Javascript
var obj  = {
  name:'Celso',
  props:{
    age:26
  }
}

//var age = obj.prop.age;  antigo 
var {props:{age}} = obj;  /// com destruction 
console.log(age); 

```
Posso acessar diretamente uma propriedade de um objeto e customizar seu nome

```Javascript
var arr = [ {name: 'apple' , type : 'fruit'}] ; 

var [{name:fruitname,type}]=arr; 
console.log(fruitname,type); 

```
Demonstrando a destrução como argumento com default values de uma função

```Javascript
function sum([a,b]=[0,0]){
  return a + b; 
} 
console.log(sum([5,5]));  ///10 
console.log(sum([5]));  /// NAn ?  
```
### 3.1 Symbols e Iterators

Symbols são maneiras de gerar um identificador único. Symbol nao pode ser invocado usando new.

```Javascript
const uniqueId = Symbol (); 
console.log (uniqueId); 
```
Mesmo com o mesmo valor , symbols são identificadores unicos e retornam falso

```Javascript
const uniqueId = Symbol ("Oi"); 
const uniqueId2 = Symbol ("Oi"); 
console.log (uniqueId===uniqueId2); 
```
Pode ser utilizado para gerar propriedades privadas. Não é listado se imprimimos (log) o objeto somente quando fazemos Object.getOwnPropertySymbols();

Propriedades do symbols : Iterator , to Primitive

```Javascript
const arr = [1,2,3,4]; 
const it = arr[Symbol.iterator]();
console.log (it.next()); 
```
Iterando só os valores

```Javascript
const arr = [1,2,3,4]; 
const it = arr[Symbol.iterator]();
while (true){
  let {value,done} = it.next(); 
  console.log (value); 
  if (done)   break; 
}
```
Transformando um objeto não iteravel em iteravel, possivelmente igonrando valores , etc ...

```Javascript
//// well known symbols 


const arr = [1,2,3,4]; 
const str = 'Digital Inovation One'; 

const obj = {
  values:[1,2,3,4],
  [Symbol.iterator](){
    let i = 0; 
      return {
        next:() => {
          i++;
          return {
            value: this.values[i-1],
            done: i>this.values.length
          };
        }
      };
  }
};

const it = obj[Symbol.iterator]()

console.log(it.next());

```
### 3.2 Generators

Generators são funções com pausa e despausa de valores atraves da interface de iteração criada por um iterator

```Javascript
//// well known symbols 
const arr = [1,2,3,4]; 
const str = 'Digital Inovation One'; 

const obj = {
  values:[1,2,3,4],
  [Symbol.iterator](){
    let i = 0; 
      return {
        next:() => {
          i++;
          return {
            value: this.values[i-1],
            done: i>this.values.length
          };
        }
      };
  }
};

//// generator 
function* hello (){
  console.log('Hello');
  yield 1; /// pausa a execação da função e executa em partes 
  console.log('From');
  yield 2; /// pausa a execação da função e executa em partes 
  console.log('Function!');
}
const it = hello();
console.log(it.next()); 
console.log(it.next());
console.log(it.next());
```
Pode receber valores de fora da função

```Javascript
//// generator 
function* hello (){
  console.log('Hello');
  yield 1; /// pausa a execação da função e executa em partes 
  console.log('From');
  const value = yield 2; /// pausa a execação da função e executa em partes 
  console.log(value);
}
const it = hello();
console.log(it.next()); 
console.log(it.next());
console.log(it.next('Outside!'));
```
Executa cada step do while apos invocar o next

```Javascript
//// generator 
function* naturalNumbers(){
  let number = 0 ; 
  while(true){
    yield number; 
    number++;
  }
}
const it = naturalNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());

```
Iterando um generator com pausa , reproduzindo o exemplo anterior de maneira mais simples
Generator aqui foi utilizado como uma forma de construir iteradores

```Javascript
const arr = [1,2,3,4]; 
const str = 'Digital Inovation One'; 

const obj = {
  values:[1,2,3,4],
  *[Symbol.iterator](){
    for (var i = 0 ; i < this.values.length;i++){
      yield this.values[i];
    }
  }
};

for (let value of obj) { /// for of é para objetos iteraveis 
  console.log(value)
}
```
### 4.1 Callbacks e Promises

### Callbacks e Promises

Callback hell Fica dificil saber quem está tratando os dados de quem

```Javascript
function doSomething(callback){
  setTimeout(function(){
    callback('First data'); 
  },1000);
}

function doOtherThing (callback){
  setTimeout(function(){
    callback ('Second data'); 
  },1000);
}

function doAll()
{
    try
    {
        doSomething(function(data)
        {
              var processedData = data.split(''); 
              try
              {
                doOtherThing(function(data2)
                {
                  var processedData2 = data2.split('');
                  try{
                     setTimeout(function()
                      {
                        console.log(processedData,processedData2);
                      },1000);
                  }catch(err)
                  { ///handle error 

                  }
                });
             }
             catch(err)
            {
              ///handle error 
            }

      });
  } catch (err)
  {
      /// handle error 
  }
}

doAll();
```
### Promise

Uma Promisse pode ter 3 estados : Pending (em execução ), Fulfilled (terminou de executar)  e Reject (caso ocorra algum erro) . Uma grande vantagem da  promise é que já faz o tratamento do erro conforme abaixo
////1000 = 1ms

```Javascript
////Promisses 
const doSomethingPromise = new Promise((resolve,reject)=>{
 setTimeout(function(){
   // did something 
  resolve('First data'); 
  },1000); 
});

const doOtherThingPromise = new Promise((resolve,reject)=>{
  setTimeout(function(){
      // did something 
    resolve ('Second data'); 
  },1000);
});
doSomethingPromise.then(data=>console.log(data));

```
Tratamento com throw new Error :

```Javascript
////Promisses 
const doSomethingPromise = new Promise((resolve,reject)=>{
  throw new Error ('something went wrong');
  setTimeout(function(){
   // did something 
  resolve('First data'); 
  },1000); 
});

const doOtherThingPromise = new Promise((resolve,reject)=>{
  setTimeout(function(){
      // did something 
    resolve ('Second data'); 
  },1000);
});

doSomethingPromise
.then(data=>console.log(data))
.catch(error=>console.log(error));

```
Executando uma depois a outra promise

```Javascript
////Promisses 
const doSomethingPromise = new Promise((resolve,reject)=>{
  setTimeout(function(){
   // did something 
  resolve('First data'); 
  },1000); 
});

const doOtherThingPromise = new Promise((resolve,reject)=>{
  setTimeout(function(){
      // did something 
    resolve ('Second data'); 
  },1000);
});

doSomethingPromise
.then(data=>{
  console.log(data);  
  return doOtherThingPromise;
})
.then(data2=>console.log(data2))
.catch();

```
Usando função para garantir o tempo de execução e incluindo um tratamento de erro global para ambos as promisses encadeadas

```Javascript
////Promisses 
////Promisses 
const doSomethingPromise = ()=> new Promise((resolve,reject)=>{
  setTimeout(function(){
   // did something 
  resolve('First data'); 
  },1000); 
});

const doOtherThingPromise = () => new Promise((resolve,reject)=>{
  setTimeout(function(){
      // did something 
    resolve ('Second data'); 
  },1000);
});

doSomethingPromise()
.then(data=>{
  console.log(data);  
  return doOtherThingPromise();
})
.then(data2=>console.log(data2))
.catch(error => console.log('Ops',error)); /// tratamento global de erro 

```
Callback hell resolvido por promise

```Javascript
////Promisses 
const doSomethingPromise = ()=> 
new Promise((resolve,reject)=>{
   
  setTimeout(function(){
   // did something 
  resolve('First data'); 
  },1000); 
});

const doOtherThingPromise = () => 
  new Promise((resolve,reject)=>{
     setTimeout(function(){
      // did something 
      resolve ('Second data'); 
  },1000);
});

doSomethingPromise()
.then(data=>{
  console.log(data.split(''));  
  return doOtherThingPromise();
})
.then(data2=>console.log(data2.split('')))
.catch(error => console.log('Ops',error)); /// tratamento global de erro 

```
Executando em paralelo ( o then só é executado após o fim da promise)

```Javascript
////Promisses 
const doSomethingPromise = ()=> 
new Promise((resolve,reject)=>{
   
  setTimeout(function(){
   // did something 
  resolve('First data'); 
  },1000); 
});

const doOtherThingPromise = () => 
  new Promise((resolve,reject)=>{
     setTimeout(function(){
      // did something 
      resolve ('Second data'); 
  },1000);
});

Promise.all([doSomethingPromise(),doOtherThingPromise()]).then(data => {
  console.log(data[0].split(''));
  console.log(data[1].split(''));
});

```
No Promisse all caso haja interrupção de uma , cancela-se o funcionamento das duas funções

```Javascript
////Promisses 
const doSomethingPromise = ()=> 
new Promise((resolve,reject)=>{
   
  setTimeout(function(){
   // did something 
  resolve('First data'); 
  },1000); 
});

const doOtherThingPromise = () => 
  new Promise((resolve,reject)=>{
    throw new Error("ops");
     setTimeout(function(){
      // did something 
      resolve ('Second data'); 
  },1000);
});

Promise.all([doSomethingPromise(),doOtherThingPromise()]).then(data => {
  console.log(data[0].split(''));
  console.log(data[1].split(''));
}).catch(err=>{
  console.log(err);
});

```
Retornando a que resolver primeiro

```Javascript
////Promisses 
const doSomethingPromise = ()=> 
new Promise((resolve,reject)=>{
   
  setTimeout(function(){
   // did something 
  resolve('First data'); 
  },1500); 
});

const doOtherThingPromise = () => 
  new Promise((resolve,reject)=>{
     setTimeout(function(){
      // did something 
      resolve ('Second data'); 
  },1000);
});

Promise.race([doSomethingPromise(),doOtherThingPromise()]).then(data => {
  console.log(data);
});
```
### 4.2 Fetch Async await Eventemmiter

Fetch é uma nova API com o mesmo intuito da antiga xmlhttpRequest , fazer requisições, mas utiliza promises
Fetch retorna uma promise . O exemplo mostra uma requisição

```Javascript
fetch('/data.json').then(responseStream=>{
   responseStream.json().then(data=>{
       console.log(data);
   });
  })

```
Caso haja um erro de rede será pego no catch

```Javascript
fetch('http:localhost:8081/data.json') /// erro de rede nao existe esta porta 
.then(responseStream=> responseStream.json())
.then(data=>{
       console.log(data);
   }).catch(err=> {
        console.log("Erro de rede",err);
   });
  

```
Outro exemplo , agora com erro de nome de arquivo inexistente

```Javascript
fetch('http:localhost:8080/datassss.json') /// erro de fim inesperado de input json
.then(responseStream=> responseStream.json())
.then(data=>{
       console.log(data);
   }).catch(err=> {
        console.log("Erro de rede",err);
   });

```
Tratando o erro para nao tentar parsear para json

```Javascript
fetch('http:localhost:8080/data222.json') 
.then(responseStream => {
    console.log(responseStream)
    if(responseStream.status===200){
        return responseStream.json();
    }else {
        throw new Error('Request error');
    }
})
.then(data=>{
       console.log(data);
   }).catch(err=> {
        console.log("Erro de rede",err);
   });
```
por default o segundo parametro do fetch eh um get. mas podemos forçar um post

```Javascript
fetch('http:localhost:8080/data.json',{
    method:'post',
    body:JSON.stringfy
}) /// erro de fim inesperado de input json
.then(responseStream => {
    console.log(responseStream)
    if(responseStream.status===200){
        return responseStream.json();
    }else {
        throw new Error('Request error');
    }
})
.then(data=>{
       console.log(data);
   }).catch(err=> {
        console.log("Erro de rede",err);
   });
```
### Async / Await

A partir do ES7 , forma de criar promises de maneira mais simples e lidar com promises dentro de promises de maneira mais simples
O programa abaixo retorna uma promise já resolvida

```Javascript
const simpleFunc = async ()=> {
  return 12345;
};

console.log(simpleFunc().then(data=>{
  console.log(data); 
} ));
console.log(simpleFunc());
```
Tratando erros

```Javascript
const simpleFunc = async ()=> {
  throw new Error ('oh no'); 
  return 12345;
};

simpleFunc()
  .then(data=>{
  console.log(data); 
} )
.catch(err=>{
  console.log(err);
});

```
Await : Espera que outras promises sejam resolvidas. O await aguardou a resolução da promise e retorno o dado

```Javascript
const asyncTimer = () => new Promise((resolve,reject)=> {
  setTimeout(()=> {
    resolve(12345);
  },1000);
});


const simpleFunc = async ()=> {
  const data = await asyncTimer();
  return data;
};

simpleFunc()
  .then(data=>{
  console.log(data); 
} )
.catch(err=>{
  console.log(err);
});

```
Await pode tornar o processamento asíncrono sequencial

```Javascript
const asyncTimer = () => new Promise((resolve,reject)=> {
  setTimeout(()=> {
    resolve(12345);
  },1000);
});


const simpleFunc = async ()=> {
  const data = await asyncTimer();
  console.log(data);
  const dataJSON = await fetch ('/data.json').then(resStream=> 
    resStream.json()
    );
  return dataJSON;
};

simpleFunc()
  .then(data=>{
  console.log(data); 
} )
.catch(err=>{
  console.log(err);
});
```
Processando de maneira paralela

```Javascript
const asyncTimer = () => new Promise((resolve,reject)=> {
  setTimeout(()=> {
    resolve(12345);
  },1000);
});


const simpleFunc = async ()=> {
  const data = await Promise.all([
      asyncTimer(),
      fetch ('/data.json').then(resStream=> resStream.json())])
  return data;
};

simpleFunc()
  .then(data=>{
  console.log(data); 
} )
.catch(err=>{
  console.log(err);
});

```
### como funciona async/await

Promise -> programação asíncrona
colocar async em uma function faz com que ela se torne uma promise

resolve termina a execução de uma promise . sem resolve ela nunca termina

promise dá uma sintax melhor para callback

const text = await promise ; /// espera a promise terminar para prosseguir

console.log (await promise) ; /// aguarda para logar

funções nao asincronas (map, reduce, ... ) nao podem usar await pois nao sao asinc

para que um erro seja capturado dentro de uma promisse, é necessário colocar await antes da chamada do then senao o tratamento do erro nunca será chamado

await -> transforma o codigo em sincrono

async function () {
const result = await coinFlip
.then(resultado => `O resultado é : ${result}`)
.then(resultado => `Alguem disse que  é : ${text}`)
}
/// bom para Api o retorno de uma query vai para outra query que vai para outra query  ....

### Aplicando e praticando os conceitos - event emiter

Programação asíncrona dentro do node . Event emiter é exclusivo do node .
para utiliza-lo promeiro temos que importar a classe event emiter do módulo events.
Ao emitir o evento , o emiter o consumiu

```Javascript
const EventEmitter = require('events');

const emitter = new EventEmitter ();

emitter.on('User logged',data => {
    console.log(data); 
});

emitter.emit('User logged' , {user : 'Celso' });
```
Extendendo uma classe

```Javascript
const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        this.emit('User loged',data);
    }
}

const users = new Users ();

users.on('User logged',data => {
    console.log(data); 
});

users.userLogged({user : "Luiz "}); 
```
Trava o segundo login , users.once só permite 1 login

```Javascript
const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        this.emit('User loged',data);
    }
}

const users = new Users ();

users.once('User logged',data => {
    console.log("Ola" + data); 
});

users.userLogged({user : "Luiz "}); 
users.userLogged({user : "joao "}); 
```
Lidando com programação asincrona

```Javascript
const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        setTimeout(()=>{
        this.emit('User loged',data);
    },2000);
    } 
}

const users = new Users ();

users.on('User logged',data => {
    console.log("Ola" + data); 
});

users.userLogged({user : "Luiz "}); 
users.userLogged({user : "joao "}); 
```
Event target trabalha com a api do browser eventListner

```Javascript

```
```Javascript

```
### 5 Tratamento e exceções

### 5.1 como Identificar erros

Variaveis const nao sofrem hoisting. O JS interrompe a execução caso ocorra um erro.  ```Javascript
console.log(name);
const name = 'Luiz';
console.log('keep going');

```
Podemos usar o try  catch 
```Javascript
try{
    console.log(name); 
    const name = 'Luiz';
  
}catch(err){
    console.log('Error' , err); 
}
console.log('keep going');  /// seria impresso 
```
Utilizando a classe Error para gerar um erro e fornecer uma resposta customizada

```Javascript
try{
    const name = 'Luiz';
    const myError = new Error ('custom error'); 
    throw myError;
}catch(err){
    console.log('Error' , err); 
}finally{
    console.log('keep going'); 
}

```
Extendendo a classe error

```Javascript
class CustomError extends Error { 
    constructor({message,data}){
        super(message);
        this.data = data; 
    }
}

try{
    const name = 'Luiz';
    const myError = new CustomError ({
        message: 'custom message error',
        data: {
            type:'Server error' 
        }
    }); 

    throw myError;

}catch(err){
    if(err.data.type ==='Server error')
    {

    }
    else {
  
    }
    console.log('Error' , err); 
    console.log(err.data);
}finally{
    console.log('keep going'); 
}


```
### 5.2 Debugging parte 1

Podemos utilziar a aba do chrome Networl dentro do modo desenvolvedor (cntrl + shift +i) PAra entender quais requisições estão sendo feitas, os arquivos que estão sendo utilizados ,etc.

### 5.2 Debugging parte 2

como identificar erros dentro do próprio código ?
Pretty print -> remove a mimificação , característica de sites em produção para que consigamos debugar o código .
Ao encontrar um erro colocar um breakpoint e dar reload. A Execução será interrompida exatamente na linha do erro.
Pressionando esc um console é aberto e tudo que for digitado será executado exatamente onde está o breakpoint
Outra opção é colocar no código a palavra debbuger; Isto irá interromper o código como se fosse um breakpoint

### 5.2 Debugging com console log

console.warn  amarelo
console.error  vermelho
console.trace  informações de onde o código foi executado
console.group agrupa as mensagens de console
console.endgroup final agrupa as mensagens de console

tempo de execução de um trecho
console.time('log time');
setTimeout(() => {
console.timeEnd('log time');
},2000);

console.table ( formata arrays e objetos)

console.assert (1===1 , 'Ops' ) ; se for falso mostra ops
console.log('%c style log) , 'color:blue'; 'font-size:40x')

Na aba sources , podemos debugar o style e ver como as mudanças ficam em tempo real , m udando o tamanho de botoes , cores , etc

### Conceitos aplicados a qualidade de código e automação de testes em JS

### 5.1 Testes TDD e BDD

#### Testes automatizados :

unitários (menor parte do programa, componentes ,métodos, classes, funções , etc),
integrados (testam a integração entre os componentes , como elas se comunicam etc. )
e funcionais (ou end-to-end , blackbox) (testa a integração do seu sistema com outros sistemas)

piramide de testes : unitários (base) -> integrados -> funcionais (topo)

#### Testes automatizados  ou manuais :

usabilidade , aceitação do usuário, protótipos, funcionais ex: alpha beta , carga , segurança , etc....

#### Test Driven Developoment (TDDD) Desenvolvimento orientado a testes

Cria os testes antes de escrever o código é um dos pulares do extreme programming e consiste em testar e refatorar em pequenos cilcos onde vc escreve o teste antes do código , faz o mesma passar e refatota o código
Escrita do teste -> escrita do código -> refatoração

Vantagens :
Feedback rápido
maior segurança
codigo mais limpo
produtividade

#### Behavior Driven Development (BDD) Desenvolvimento orientado a comportamento

Técnica de desenvolviemnto ágil que visa integrar regras de negócio a linguagens de programação
Descreve o comportamento dos componentes de maneira que reflita o negócio em si.
Escreve o teste antes do codigo com o comportamento esperado do codigo

Pilares
testes
documentação
exemplo

vantagens
compartilhamento de conhecimento
documentação dinâmica
visão do todo desenvolvedor e negocio falam a mesma linguagem

### 5.2 Mocha, Chai e Sinon

Mocha : Ferramenta para executar testes ( test-runner) . Descritivo segue os padroes do BDD. Pode ser utilizando em node ou no browser .
No terminal do Vs :

npm init -y
npm i --save-dev mocha

alterar o package.json para executar o mocha

```Javascript
{
  "name": "wwwroot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "mocha": "^8.1.0"
  }
}
```
criar o diretorio test ( usado pelo mocha)
criar o arquivo math.spec.js dentro do diretorio (esse é o padrao TDD)

```Javascript
const assert = require('assert');
const Math = require ('../src/math.js');

describe ('Math class',function (){ 
   it('Sum two Numbers',function () /// it descreve o comportamento esperado 
   {
        const math = new Math();
        assert.equal(math.sum(5,5),10); /// valida se dois valores sao iguais 
   });  
});

```
Criei o diretorio src com o arquivo math.js dentro

```Javascript
class Math {
   sum = function sum(){ };
}

module.exports =Math; 
```
rodei o npm run test
erro -> undefined ==10 o teste executado deveria retornar 10 e  retorna undefined.

Acertando a classe math para fazer a conta corretamente

```Javascript
class Math {
   sum = function sum(a,b){return a+b };
}

module.exports =  Math;  /// o mocha nao retorna mais o erro 
```
Limpando a classe (TDD) também chamada de refatorar

```Javascript
class Math {
   sum(a,b){return a+b };
}

module.exports =  Math; 
```
Tornando math assíncrona

```Javascript
class Math {
   sum(a,b,callback){
      setTimeout(() => {
         callback(a+b);
      },0);
   };
}
module.exports =  Math; 
```
e alterando mathspec para chamada assíncrona , percebemos que o código continua passando  , pois é assíncrono (no meu , diferente do vídeo,  talvez por ser uma versão mais atual, já mostra erros de validação)

```Javascript
const assert = require('assert');
const Math = require ('../src/math.js');

describe ('Math class',function (){ 
   it('Sum two Numbers',function () /// it descreve o comportamento esperado 
   {
        const math = new Math();
        math.sum(5,5,(value)=>
        {
            assert.equal(value,10); /// valida se dois valores sao iguais 
        })
  
   });  
});


```
Precisamos então de uma maneira de validar valores assíncronos usando mocha
Acrescente done no argumento da funcao dentro do it . atenção ! moca recomenda nao usar arrow fucntion

```Javascript
const assert = require('assert');
const Math = require ('../src/math.js');

describe ('Math class',function (){ 
   it('Sum two Numbers',function (done) /// it com done aguarda o done ser invocado 
   {
        const math = new Math();
        this.timeout(3000); /// por isso nao usamos arrow function para 
                            /// poder usar o this deste contexto , se usassemos arrow 
                            ///function o this se referenciaria ao describe 
        math.sum(5,5,(value)=>
        {
            assert.equal(value,10); /// valida se dois valores sao iguais 
            done();
        })
   });  
});

```
Escrevendo testes para funcoes que ainda nao existem

```Javascript
const assert = require('assert');
const Math = require ('../src/math.js');

describe ('Math class',function (){ 
   it('Sum two Numbers',function (done) /// it com done aguarda o done ser invocado 
   {
        const math = new Math();
        this.timeout(3000); /// por isso nao usamos arrow function para 
                            /// poder usar o this deste contexto 
        math.sum(5,5,(value)=>
        {
            assert.equal(value,10); /// valida se dois valores sao iguais 
            done();
        })
   });  
   it ('Multiply two numbers '); /// teste pendente 
});

```
it.only executa somente este teste

```Javascript
it.only ('Multiply two numbers',function(){
       const math = new Math();
       assert.equal(math.multiply(5,5),25);
   });
```
it.skip pula o teste

```Javascript
  it.skip ('Multiply two numbers',function(){
       const math = new Math();
       assert.equal(math.multiply(5,5),25);
   });
```
mocha hooks (before each)
executa codigo e evita repetições
outros hooks : before , after e afterEach

```Javascript

const assert = require('assert');
const Math = require ('../src/math.js');

let value =0; 

describe ('Math class',function (){ 
    ///hook 
    beforeEach(function (){
        value = 0; 
    });


   it('Sum two Numbers',function (done) /// it com done aguarda o done ser invocado 
   {
        const math = new Math();
        this.timeout(3000); /// por isso nao usamos arrow function para 
                            /// poder usar o this deste contexto 
  
        value =5; 

        math.sum(value,5,(value)=>
        {
            assert.equal(value,10); /// valida se dois valores sao iguais 
            done();
        });
   });  
   it ('Multiply two numbers',function(){
       const math = new Math();
       assert.equal(math.multiply(value,5),0);
   });
});
```
### 5.3 Chai

O moca nao possui uma ferramenta de assert. Ele usa uma ferramenta built in do node.
O assert nao eh tao legíveis (os its, describes)  na hora de comparar objetos. Para melhroar isso usamos o chai https://www.chaijs.com/api/
npm i --save-dev chai
que é uma ferramenta de asserts tornando os testes mais descritivos

```Javascript
const assert = require('assert');
const Math = require ('../src/math.js');
const expect = require ('chai').expect;

let value =0; 

describe ('Math class',function (){ 
    ///hook 
    beforeEach(function (){
        value = 0; 
    });


   it('Sum two Numbers',function (done) /// it com done aguarda o done ser invocado 
   {
        const math = new Math();
        this.timeout(3000);   
        value =5; 

        math.sum(value,5,(value)=>
        {
            expect(value).to.equal(10); /// mais legível 
            done();
        });
   });  
   it ('Multiply two numbers',function(){
       const math = new Math();
       expect(math.multiply(value,5)).to.equal(0); /// mais legível 
   });
});


```
Utilizando para validar objetos

```Javascript
 it ('Multiply two numbers',function(){
       const math = new Math();
       const obj = {
           name : 'Luiz'
       };

       expect(obj).to.have.property('name'); /// mais legível 
   });
```
Comparando objetos , cuidado !

```Javascript
  it.only ('Multiply two numbers',function(){
       const math = new Math();
       const obj = {
           name : 'Luiz'
       };
       const obj2 = {
        name : 'Luiz'
    };
    /// const obj2=obj; /// tornaria a comparação verdadeira 
       expect(obj).to.equal(obj2); /// problemas pois a referencia eh diferente  
       ///expect(obj).to.deep.equal(obj2); /// seriam iguals to deep faz uma comparação dos valores dos objetos 
   });
```
### 5.4 Sinon

útil para testar métodos de objetos. Adicionei o método printSum na classe math como testar ?

```Javascript
class Math {
   sum(a,b,callback){
      setTimeout(() => {
         callback(a+b);
      },0);
   };

   multiply(a,b){
      return(a*b);  
   };
   printSum(req,res,a,b){
      res.load('index',a+b);
   };

}

module.exports =  Math; 
```
Adicionar uma função espiã que diz se o método foi invocado (spy) na propriedade load do objeto res

```Javascript
it.only ('Calls req with sum and index values ',function(){
    const req= {};
    const res = {
        load:sinon.spy()
    };
    const math = new Math();
    math.printSum(req,res,5,5);
    expect(res.load.calledOnce).to.be.true;

```
Verificando se o primeiro argumento é index

```Javascript
   it.only ('Calls req with sum and index values ',function(){
    const req= {};
    const res = {
        load:sinon.spy()
    };
    const math = new Math();
    math.printSum(req,res,5,5);
    expect(res.load.args[0][0]).to.be.equal('index');
 });
```
Verificando se o segundo argumento é soma

```Javascript
   it.only ('Calls req with sum and index values ',function(){
    const req= {};
    const res = {
        load:sinon.spy()
    };
    const math = new Math();
    math.printSum(req,res,5,5);
    expect(res.load.args[0][1]).to.be.equal(10);
 });
```
Confirma que o método nao foi chamado (stub)

```Javascript

   it.only ('Calls req with sum and index values ',function(){
    const req= {};
    const res = {
        load : function load(){
            console.log('called');
        }
    };
    sinon.stub(res,'load');
    const math = new Math();
    math.printSum(req,res,5,5);
    expect(res.load.args[0][0]).to.be.equal('index');
 });

```
Passou pela checagem

```Javascript
 it.only ('Calls req with sum and index values ',function(){
    const req= {};
    const res = {
        load : function load(){
            console.log('called');
        }
    };
    sinon.stub(res,'load').returns('xadsa');
    const math = new Math();
    math.printSum(req,res,5,5);
    expect(res.load.args[0][0]).to.be.equal('index');
 });

```
```Javascript

```
## CSS

https://github.com/luizrosalba/homecomstyledcomponents

## ReactJs

### Introdução ao ReactJS

https://github.com/luizrosalba/IntroReactJs

### Conheça a tecnologia ReactJS

- Não é um framework
- É uma biblioteca JS para criar interfaces de usuário
- Criado em 2011 por jordan walke no facebook
- Baseado em xhp um framework para criação html no php
- Utilizado no mural de noticias de ferramentas
- problemas de renderização , escalabilidade , etc
- 2012 Instragram
- 2013 Tornou-se Open source
- 2015 React Native (mobile)
- 2015 UWP Universal windows plataform (desktop)
- Netflix
- é uma linguagem declarativa (não quer saber se uma condição é satisfeita par ser exibida a interface)
- pode ser usada em celulares , pwa , frontend , backend (nextjs)

### Aprenda a configurar o ReactJS

- Renderização
- React DOM toda renderização é feita em nós raíz
- a renderização é a menor parte para construir uma interface no react
- o browse tem o DOM
- a renderização de um componente React no DOM é feita Utilizando o ReactDOM.render.
- o react nao trabalha em cima do dom diretamente, utiliza o Dom virtual que controla tudo que está no DOM
- Sempre que há uma mudança no html o react faz uma diferença e somente no pedaço onde há atualização é feita uma nova renderização

### Components

- Deixa tudo modular ?
- componentes e props
- tornar componentizavel é bom
- react trabalha bem com reaproveitamento de código
- pode trabalhar como função ou classe
- Js não tem classe , tem protótipo
- Quando JS é transpilado as classes são transformadas em protótipos
- components - src - index
- npm i
- npm run start
-

### Renderizando elementos

- Estado e ciclo de vida
- Inicialização
- Montagem
- Atualização
- Desmontagem
  ![](img/Capturar.PNG)
- nenhum componente pai ou filho devem saber se outro componente possui estado ou nao
- o estado é apoenas local ao componente e c aso seja necessário enviar algum atributo para outro então é feito via props

### Ecossistema

Bibliotecas complementares

- React Router gerenciamento de estados
- Redux
- Material UI criação de interfaces
- Ant-Design
- Storybook criação de componentes
- Gastby
- Jest    teste
- React i18n Next  internacionalizacao

### Configuração

- React Create App (starta projetos com configuração básica, servidor , Jest ...
- Utiliza o react Scripts
- Task Runners e Bundlers Sizers
- npm init
- npm install --save react@16.8.6 react-dom@16.8.6 @react-scripts3.0.1
- pasta public -> pasta inicial do projeto
- - React requer um arquivo css
- react eh uma single page application (SPA) , baixa todo o prohjeto e renderiza uma  vez todas as rotas , toda vez que o user muda de rota , ele renderiza essa rota ( performace )

### JSX

- Não é HTML nem String
- É uma linguagem de marcação que permite criar estruturas do HTML com o poder do javascript
- React usa componentes
- Não é obrigatória a utilização do JSX mas facilita
- Browser nao intepreta JSX , para isso é necessario um transpilador para a aplicação entender o código (exemplo BABEL)
- para executar um JS dentro de um JSX deve estar entre chaves

### O que é webpack

### Integrando webpack ao desenvolvimento com ReactJS

- Webpack - Eslint
- -e um module bundler ( empacotador de modulos para aplicações js )
- gerar bundler será utilizano no HTML em ES5
- https://webpack.js.org/
- React script (aquele do facebook) utiliza webpack por trás
- Suporte : Fontes , CSS , Imagens , HTML , JS (JSON) , Plugins
- Entry - utilizando grafo , o webpack precisa de um ponto de entrada para buscar todos os modulos e dependencias
- Output
- DEtermina os bundlers que o webpack emite
- loaders - permite que o WP gerencie arquivos nao JS
- Plugins - Podem ser utilizados para otimizacao de pacotes, minificacao , injecao de scripts
- mode utilizados para abordagens de configurações. É possivle configurar modulos como production , development ou none
- production trás otimizacoes internas
  -criacao do webpack.config.js
- development é utilizado com tres plugins , UglifyJsPligin , ModuleConcatenationPlugin e NoEmitOn ErrosPlugin
- npm i --save-dev -D webpack webpack-cli
- npm i --save-dev -D webpack webpack-cli "build":"webpack --mode production"
- Se fazemos no package.json  criamos o bundler.js em modo produção
- "scripts": {
- "build": "webpack --mode production",
- se mudamos o ponto de entrada no webpack.config.js  para entry: './index.js', /// ponto de entrada
- conseguimos executar node.\dist\bundler.js
- npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
- com o preset env posso transpilar para es5 , es 6 ... para manter a compatibilidade com browsers mais antigos
- para o babel poder transpilar o react para es5 usamos o preset-react
- babelrc ->  como usamos o presetenv e o preset do react para o babel funcionar precisamos do arquivo babel rc
- adicionar os presets lá
- npm i react react-dom
- babelrc le os plugins e os presets
- criamos o app (index.js e app.jsx)
- npm run dev
- npm i webpack-dev-server
- "start:dev": "webpack-dev-server", já gera o servidor pra vc
- hotreloader a cada alteração ele atualiza a pagina automaticamente
- npm run start:dev
- http://localhost:8080/
- se vc adiciona um arquivo depois de gerar o bundle ele nao será importado para o projeto
-

### Instalação e Configuração do ESLint

- npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch
- npm run eslint
- npm i react react-dom react-scripts
- sourcemap - gera um mapeamento de todos os arquivos de uma forma fácil de  debugar
- no webpack adicionar devtool: 'source-map',
- npm run start:dev

### Aula 3 - Conceitos aplicados aos tipos de dados e condições da biblioteca

- Renderização condicional : Em React você pode criar componentes distintos ,que encapsulam o comportamento que você precisa. Você pode renderizar apenas alguns dos elementos , dependendo do estado da sua aplicação
- lesson3 - conditional
- npm i
- npm start
- dentro do app para pular linha < br />
- {hasCustomer &&  (Apresenta_botao) }
- {hasCustomer ?  (Apresenta_botao):(Cadastra_cliente) }
- o ideal é separar apresenta_botao e cadastra_cliente em renders , que serão executados observando o resutlado de hasCustomer

### Listas e Chaves

- npm i
- cada elemento deve ter sua key - neste caso usamos o id de customer para fazer a key . colocar o indice poderia dar problema se estivermos trabalhando com dois vetores . chaves devem ser unicas apenas entre elementos irmaos

```
import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Fulano de Tal',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'José Ciclano',
    skills: ['Reason']
  }
]

const App = () => {

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;
```
### Manipulando Eventos

- similar a mnanipular elementos do dom
- diferenças sintaxes:
- eventos em react são nomeadas usando camelCase ao invés de letras minúsculas
- com o jsx você passa uma função como manipulador de enventos ao invés de um texto

### Eventos

- npm i
- npm start
- passando eventos . "e" acessa o prototype do browser daquele elemento
-

```
import React from "react";

const showEvent = (e) => {
  console.log('evento clicado');
  console.log(e);
}

const Button = <button onClick={showEvent}> Mostrar Evento </button> 

const App = () => {
  const handleChange = (e) =>  {
    const {value} = e.target; 
    console.log(value);
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <input onChange={handleChange} /> 

      <div>
        <ul>
          {Button}
        </ul>
      </div>
    </div>
  );
};
export default App;
```
Mudando o contexto para dentro do app para acessar sem usar o this

```
import React from "react";


const App = () => {

  const name = 'Luiz Rosalba '

  const handleChange = (e) =>  {
    const {value} = e.target; 
    console.log(value);
  }

  const showEvent = (e) => {
    console.log('evento clicado');
    console.log(e);
    alert(name );
  }

  const Button = <button onClick={showEvent}> Mostrar Evento </button> 

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <input onChange={handleChange} /> 

      <div>
        <ul>
          {Button}
        </ul>
      </div>
    </div>
  );
};
export default App;
```
Adicionando um botao para deletar cada cliente na lista da aula anterior :

```
import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Fulano de Tal',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'José Ciclano',
    skills: ['Reason']
  }
]

const App = () => {

const handleClick = (e) =>{
  console.log('deletar cliente');
}

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <button onClick={handleClick}>Deletar Cliente </button>  </li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;
```
Passando o id como argumento para o manipilador de eventos

```
import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Fulano de Tal',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'José Ciclano',
    skills: ['Reason']
  }
]

const App = () => {

const handleClick = (e,id) =>{
  console.log('deletar cliente');
  alert(`ID do cliente : ${id}`)
}

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <button onClick={(e)=>handleClick(e,customer.id)}>Deletar Cliente </button>  </li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;
```
### Pensando do jeito React

- thinking react
- npm i
- deixar os componentes da forma mais livre possivel
- Começar com um mock  (simulam o comportamento de objetos reais de forma controlada. São normalmente criados para testar o comportamento de outros objetos. Em outras palavras, os objetos mock são objetos “falsos” que simulam o comportamento de uma classe ou objeto “real” para que possamos focar o teste na unidade a ser testada.)
- Separar a Ui em páginas (escopos) diferentes por exemplo , colocar listcustomer em um arquivo e importa-lo
- separar a UI em uma hierarquia de componentes
- Criar uma versão estátia  em react
- Identificar a representação minima mas completa da UI
- Identificar onde o state deve ficar
- adicionar o fluxo de dados inverso
- react é funcional e modular, deve estar todo separadinho em arquivos
- rotas do projeto são os containers (Views )

### Desenvolvimento de Aplicações para internet com ReactJS 



## Css componentes e elementos 
Como estilizar ? 
### inline 
Dentro do arquivo jsx 
- Pros  : Pratico , direta , ajuste  rapido  e testes de estilo 
- contra - manutenção 
```
import React from 'react';

// 1. Como estilizar uma lista usando estilos inline.

const listaEstilizada = {
  marginTop: '10px',
  border: '1px solid blue',
  padding: '25px'
};
```
- Os estilos pela tag style são feitos por um JSON onde o CSS é escrito CamelCase.
### classes 
- pros Modularizada define-se classes pelo atributo classname 
- contra dificil manutencao 
- pouca flexibilidade 
- conflitos de nomes (solução: Design patterns)
- arquivo ClassName.css
```
.div-style {
  display: flex; 
  flex-direction: column; 
  justify-content: space-around;
  margin-right: 20px;
}
``` 
e depois importa-se no codigo , usamos className e não class para poder importa-lo no react 
```
import './ClassName.css'
function Hello(){
    return <div className="div-style"> Ola mundo </div>
}
```
###  Css no JS 
- npm install --save styled-components
- A biblioteca styled components é exemplo de uma biblioteca em que se pode usar CSS in JS.
- pros:  manutenção facilidade para remover css estilos dinamicos performance injeção automatica de prefixos vendor 
```
const DivStyle = styled.div`
  color:blue;
  background: url('${props=> props.imageUrl}');
`; 
function Hello(){
    const url = 'https://exemplo'
    return <DivStyle imageUrl={url}> Olá </DivStyle>
}
``` 
-Manutenção 
-Facilidade de remover css 
- Estilos dinâmicos 
- Performance 
- Injeção automática de prefixos vendor 
```
Obs: Os fabricantes de browsers, por vezes, adicionam prefixos às propriedades experimentais ou fora dos padrões CSS, de modo que os desenvolvedores podem experimentá-las, enquanto —em teoria— as mudanças no comportamento dos navegadores não quebrarão o código durante o processo de padonização. Os desenvolvedores devem esperar para incluir a propriedade não pré-fixada até que o comportamento do navegador seja padronizado.

Os fabricantes de browsers estão trabalhando para parar de usar prefixos de fornecedores para recursos experimentais. Os desenvolvedores da Web têm vindo a usá-los em sites de produção, apesar de sua natureza experimental. Isso tornou mais difícil para os fornecedores de navegadores garantir a compatibilidade e trabalhar com novos recursos; também foi prejudicial aos navegadores menores que acabam forçados a adicionar prefixos de outros navegadores para carregar sites populares.

Ultimamente, a tendência é adicionar recursos experimentais por trás das bandeiras controladas pelo usuário e trabalhar com especificações menores que alcancem a estabilidade muito mais rápido.

Normalmente, os vendors usam esses prefixos:

-webkit- (Chrome, Safari, versões mais recentes do Opera.)
-moz- (Firefox)
-o- (Versões antigas do Opera)
-ms- (Internet Explorer)
Os vendedores também usam prefixos em APIs. Em interfaces, eles normalmente usam:

Webkit (Chrome, Safari, versões mais recentes do Opera.)
Moz (Firefox)
O (Versões antigas do Opera)
MS (Internet Explorer)
Em propriedades e métodos, eles normalmente usam:

webkit (Chrome, Safari, versões mais recentes do Opera.)
moz (Firefox)
o (Versões antigas do Opera)
ms (Internet Explorer)

```
## Stateful vs StateLess 
- Antigamente Funções não podiam gerenciar estados (stateless). A partir de 2018 isso mudou 
- A nomenclatura foi atualizada não usamos mais stateful e stateless: 
- Class components e Function Components 
- Com hooks estados são manipuláveis em function components (Stateless com Hooks )
- Dessa forma temos um código compatco com a vantagem de poder manipular estaods 
### Stateful 
- Stateful usa estados toda vez que trabalhamos com estados , destruimos uma copia anterior e trabalhamos com uma nova cópia do estado 
- Supondo um estado chamado shoe, setado inicialmente como ‘tênis’, podemos trocar o seu estado, por ex, usando this.setState({ shoe: 'sapatenis’ }).

![](img/state.PNG)
- ..\aplicacoes_internet_reactjs\src\aula-1\parte-2\TodoListStatefull.jsx
### Stateless 
- stateless não usa estados
- Podemos setar o estado inicial de um componente stateless com props.
- Não possui gerenciamento de estados no componente
- contruidos usando funções em js 
- ..\aplicacoes_internet_reactjs\src\aula-1\parte-2\TodoListStateless.jsx
### Stateless com Hooks 

A partir de 2018 , podemos fazer um componente funcional "stateless com estados" usando o hook useState 
- ..\aplicacoes_internet_reactjs\src\aula-1\parte-2\TodoListFunctional.jsx

```Javascript 

import React, { useState } from 'react';
/// componentes funcionais com estado 
const TodoListFunctional = () => {
/// hook para criacao de estados 
/// nome do estado (items) e uma funcao setter (setItems) para modificar o estado 
  const [items, setItems] = useState(['Tomate','Alface','Melancia']);
  const addItem = (item) => {
    setItems([...items, item]);
  }

  const removeItem = () => {
    setItems([...items.slice(1)])
  }

  return (
    <div className="bloco-lista">
      <p>Minha lista</p>
      <ul className="lista-estilizada">
        {items.map(item => <li>{item}</li>)}
      </ul>
      <button onClick={() => addItem('Batata-Frita2')}>Add Item</button>
      <button onClick={() => removeItem()}>Remove Item</button>
    </div>
  );
}

export default TodoListFunctional;


```

## Formulários
Mantem um estado interno 
- Em html 
``` 
<input>,
 <textarea> e 
 <select> 
 ```
 tem um estado interno aceitando atributo value 
- podemos mudar esse valor usando o atributo onChange 
- em react podemos controlar o estado ( O DOM tem seu proprio estado e o react tem seu proprio estado ) 
- state 
- set state 
## Componente controlado 
- O recomendado no react é fazer componentes controlados 

```Javascript
import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }); //// pega o event.target.value do dom 
  }

  handleSubmit(event) {
    alert('O nome enviado foi: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
```


```Javascript 
import React from 'react';

class SorveteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sabor: 'uva',
      casquinha: true,
      guardanapos: 'sim'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const { sabor, casquinha, guardanapos } = this.state;
    alert('Seu sabor escolhido foi ' + sabor + ', guardanapos ' + guardanapos + ' e casquinha ' + casquinha);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Escolha o sabor:
            <select name="sabor" value={this.state.sabor} onChange={this.handleInputChange}>
            <option value="uva">Uva</option>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="chocolate">Chocolate</option>
            <option value="morango">Morango</option>
          </select>
        </label>
        <label>
          <input type="checkbox" name="casquinha" checked={this.state.casquinha} onChange={this.handleInputChange} />
          Colocar na casquinha?
          </label>
        <label>
          Guardanapos?
            <div className="radio">
            <label>
              <input type="radio" id="guardanapos" name="guardanapos" value="sim" checked={this.state.guardanapos === 'sim'} onChange={this.handleInputChange} />
              sim
              </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" id="guardanapos" name="guardanapos" value="nao" checked={this.state.guardanapos === 'nao'} onChange={this.handleInputChange} />
              não
              </label>
          </div>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default SorveteForm;
```
## Componente não controlado 
- pega o estado do dom 
- o react observa estes estados através de uma referencia 
- a tag input é read-only (essa tag a gente nao consegue fazer com componente controlado, só com não controlado)

```Javascript
import React from 'react';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef(); /// definimos uma referencia para o campo input 
                                        /// definimos uma referencia para o campo input 
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Arquivo selecionado - ${
        this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Upload de arquivo:
          {/// usando ref a gente consegue pegar o estado deste componente read-only input no envio  
          }
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default FileInput;

```
Sobre Stateless components, é incorreto afirmar que:
Podemos setar o estado inicial de um componente stateless com props.

Para estilizar um componente de maneira inline, assinale abaixo a alternativa correta:
<MeuComponente style={{ marginBottom: '10px' }} />

Sobre a estilização em componentes, é correto afirmar que:
Os estilos pela tag style são feitos por um JSON onde o CSS é escrito CamelCase.

Sobre Stateful components, é correto afirmar que:
Supondo um estado chamado shoe, setado inicialmente como ‘tênis’, podemos trocar o seu estado, por ex, usando this.setState({ shoe: 'sapatenis’ }).

Podemos manipular a tag input do tipo file em um form usando:
Componentes não controlados.

Sobre as diversas formas de criar forms, é correto afirmar:
No uso de componentes não controlados, pegamos apenas a referência do estado do DOM.

Sobre stateless e stateful components, assinale a alternativa correta:
Com a chegada de hooks, podemos criar componentes funcionais com estados.

Sobre CSS in JS é correto afirmar que:
A biblioteca styled components é exemplo de uma biblioteca em que se pode usar CSS in JS.

Um exemplo de biblioteca utilizado para manipulação de forms é:
Formik.

Qual(is) componente(s) podemos utilizar em componentes controlados em React?
<textarea> e <select>.




## bibliotecas 
- forms no react são verbosos tem que escrever bastante para funcionar  
- é possível usar algumas biblios : 
- formik (recomendada pela documentação do react )
- Redux-forms 
# Flux 
- Arquitetura criada pelo Fb para comunicação entre componentes 
- falta de sincronização entre os componentes de notificação no facebook 
- haviam patterns para trafegar dados em aplicações web mas nada muito promissor 
-  Fb criou o flux e resolveu o problema
- padrão para trafego de dados unidirecional 
![](img/flux.PNG)

## Action  
- Formata a mensagem a ser enviada (telégrafo)
 ## Dispatcher
 - Sabe todos os callbacks para diferentes Stores  (telefonista)
 ## Store
 É um gerente supercontrolador, guarda a informação e todas as alterações tem que ser feitas por ele mesmo mais ninguem 
 ## View 
Gerente intermediario (middleware) recebe as notificações da store e passa os dados para as visões abaixo dela 
## Arquitetura Flux
Diversas implementações 
- Redux ( mais popular)
- Reflux
- Mobx 
- Vuex (Baseado em Redux e Elm)
- NgRx/store (badeada em REdux e RxJs)
- FB disponibiliza as libs para que você construa sua própria flux 
- não existe uma implementação padrão do flux 
- servem para comunicação entre componentes 
- centralizam a informação 
- One way data flow 
- Ideal é usar as stores para dados que vão ser compartilhados entre componentes, não todos os dados 
## Bibliotecas baseadas em Flux 
- Servem para comunicação entre componentes
- Centralizam a informação 
- Store não é um armazenamento central, o ideal é usar as stores para dados 
que vao ser compartilhados entre vários componentes 

# O que é Redux 
- Criado por Abramov e Clark em 2015 
- Redux é uma  implementação de flux 
- nao tem dispatcher 
- a camada de view é chamada de react pois vamos usala para trabalhar com react 
![](img/redux.PNG)
-Redux tem  3 princípios : 
- Single source of Thuth - uma única store 
- State é read-only 
- mudanças são feitas por funções puras ( estado imutável ) 

- Redux nao tem dispatcher 
- A camada de view eh chamada de react
- Reducer 

## actions 
- são como as do flux 
- apensa retornam um objeto de action formatado 
- As actions formatam a mensagem a ser enviada para o dispatcher.
## Store 
- unica store
- cuida de toda árvore de estados 
- reducers cuidam de descobrir qual estado muda 
## reducers 
- simplifica e divide o tarbalho da store
- se conecta ao root reducer que divide os estados em pequenos reducers para descobrir como lidar com eese estado 
- estados imutáveis 
## Views 
- Em react adiciona na camada de View 3 novos conceitos para conectar a View a Store (provider, connect() e selector )
- Provider wrapper da arvore de components, torna mais facil os componentes filhos se conectarem usando o connect 
- Connect()  função no react redux se o componente deseja pegar os updates do estado se envolve na função connect (High Order Component (HOC))
- Selector função que escrevemos que definem quais os estados do redux que queremos passar 
No root component:
O Provider recebe como atributo a store criada, usando-a onde ela for necessária para a aplicação.
## Aula 2.3 
Instalar o redux dev tools 
- https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR
- npm install react-redux
- npm install --save-dev redux-devtools
- usamos o redux dev tools e rodamos a aula 2 para ver que cada vez que o contador eh clicado vemos o estado anterior e o estado atual 
- criamos a pasta redux que tem o arquivo de actions  (mensagem enviada)
- vamos criar uma action que se comunica com store. Vamos criar uma store e reducers e conecta-los a nossa view (react)

- criamos um arquivo dentro da pasta redux -> actions -> actions.js com as actions (método mais simples de criar actions)

```Javascript
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
``` 
- criamos um arquivo dentro da pasta redux -> reducers ->  reductions.js com as reductions 

```Javascript
import { INCREMENT, DECREMENT } from '../actions/counter';

export const initialState = {
  count: 0 /// estado inicial da store 
}

///verifica qual action esta sendo disparada 
export function counterReducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    default: 
      return state; /// apenas retorna o valor nao faz o incremento do estado diretamente 
  }
}
```
indexjs (camada view = react)
- cria a store 
- associa os reducers a ela 
- 

```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; /// cria as stores e associa o redux a ela 
import rootReducer from './redux/reducers/rootReducer' /// centraliza os reducers
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore( rootReducer, composeWithDevTools(
    applyMiddleware(thunk)  /// conectando a store ao monitor 
));

ReactDOM.render(<Provider store={store}> /// Provider faz um wrapper e passa a store criada acima 
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

manipulando a store 

```Javascript
import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  state = { count: 0 }

/// cada evento de incremento ou decremento dispara um evento na store ( que pode ser visto no redux dev-tools do chrome )

  increment = () => {
    /// usa a action (ato de enviar a mensagem) através do dispatch  para fazer o pedido de alteração para a store 
    this.props.dispatch({ type: 'INCREMENT' }); /// cada um dispara um evento na store , não temos dispatch , ams por questões de engerharia usamos o nome dispatcher
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' }); /// nao passamos o estado do counter para o componente, disparamos uma mensagem para incrementar e decrementar
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) { 
  return {
    count: state.counter.count /// passamos o estado referenciando o estado da store que estamos associando , 
                               /// e qual compoenente local está associado 
  };
}

export default connect(mapStateToProps)(Counter); /// connect pega o componente e conecta com a store (HOC)

```
Qual dos elementos de Flux não existe em Redux?
Dispatchers.

Uma diferença básica de Redux e Flux é:
Redux só possui uma store.

Sobre Flux, é correto afirmar que:
O Facebook criou esta arquitetura para sanar um problema no sistema de notificações.

A extensão do redux-devtools:
Serve para monitorar os estados de uma store Redux.

Sobre Redux, assinale a alternativa correta:
A action em Redux é como em Flux, com a diferença que ela retorna um objeto de action formatado.

No root component:
O Provider recebe como atributo a store criada, usando-a onde ela for necessária para a aplicação.

Quais são os três componentes da View em Redux?
Provider, connect e selector.

Qual das alternativas abaixo não é um princípio básico de Redux?
Es6 callback para todos os eventos.

Sobre o Dispatcher, é correto afirmar:
Sabe todos os callbacks para diferentes stores.

Sobre o Flux, assinale a alternativa correta:
As actions formatam a mensagem a ser enviada para o dispatcher.



# Aula 3 
## Comunicação avançada entre aplicações 

## rest http com react 

Apis HTTP 
Servem para conectar um ou mais servidores http 
- get 
- post 
- delete 
- put 
- fetch api (nativamente) Jquery ajax 
- Axios (lib http muito usada com react)
## Fetch Api 
Alguns browsers ainda nao suportam (talvez melhor usar node fetch)
- nativa do browser 
- Oferece uma alternatuva ai XMLHttpRequest() e jQuery.ajax()
- suporte a service workers
- algumas diferenças 
- nao envia nem recebe cookies ( precisa definir a opção cedentials)
- nao rejeita o statudos do erro HTTP (nem 400 nem 500)
- ele está mostrando como montar os métodos HTTP para nossa api "cientistas" aula 3 . 
![](img/get_fetchapi.PNG)
![](img/put_fetchapi.PNG)
![](img/post_fetchapi.PNG)
![](img/delete_fetchapi.PNG)


```Javascript
import { fetchCientistasPending, fetchCientistasSuccess, fetchCientistasError } from '../../../redux/actions/cientistas';

function fetchCientistas() {
  return dispatch => {
    dispatch(fetchCientistasPending());
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchCientistasSuccess(res)); /// sucesso atualiza os dados 
      })
      .catch(error => {
        dispatch(fetchCientistasError(error));
      })
  }
}

export default fetchCientistas;
```

Trabalhando com class component, procurar fazer o carregamento da listagem de serviços no inicio
do seu componente no componentDidMount. No componente componentWillMount (vai ser descontinuado no react 17 )pode dar probelmas como lista vazia  


```Javascript
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Topico1Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid #cecece;
`;

export const Topico1 = () => {
  const [cientistas, setCientistas] = useState([]);

  // Hook equivalente a componentDidMount()
  useEffect(() => {
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
      .then(response => response.json()) /// parseando a json 
      .then(data => {
        setCientistas(data) /// atualizando o esatdo 
      })
      .catch(error => {
        alert('Ops! Erro a seguir: ' + error);
      });
  }, []);

  return (
    <Topico1Block>
      <h1>Cientistas Brasileiras</h1> /// renderizando na tela 
      <ul>
        {cientistas.map((cientista, index) => (
          <Item key={index}>
            <div><b>nome:</b> {cientista.name}</div>
            <div><b>área:</b> {cientista.area}</div>
          </Item>
        ))}
      </ul>
    </Topico1Block>
  )
}

```



## Axios 
- Lib de HTTP API 
- Cross-Browser
- Pode monitorar o progresso de um request 
- melhor tratamento de erros 
- melhor teste 
- bem restrito ao pwa 
- npm add axios 
- métodos HTTP : 
![](img/get_axios.PNG)
![](img/put_axios.PNG)
![](img/post_axios.PNG)
![](img/delete_axios.PNG)


## Imutabilidade e Redux 

Imutabilidade : 
- uma vez criada não pode ser alterada 
- novas coleções podem ser craidas a partir de uma coleção anterior e uma mutação (setter) como um conjunto 
- novas coleções são criadas usando o máximo possível da estrutura original, reduzindo a cópia e aumentando a performance 
Benefícios : 
- Performance 
- Programação simples 
- Debugging simples ( detecção de mudanças)
- para ter performance em React use dados imutáveis 
- voce consegue usando o shouldComponentUpdate ou o React.PureComponent 
-  Exemplo : 
![](img/shouldcomponent.PNG)

- comparação entre virtual dom e o estado do componente dizem se precisa rerenderizar o componente 

- agora usando pure component
![](img/pure_component.PNG)

- estrutura mais simples 
- não são todos os casos que conseguimos controlar 
- o codigo abaixo nao funciona pois o pure componente faz uma coparação rasa entre os valores antigos e novos de this.props.words 
- o condigo muda words no handleClick do WorkAdder mas mesmo mudando as palavras, elas serão consideradas como iguais 

![](img/problemas.PNG)

- como vc muda o valor , você nao consegue trabalhr com ela 

- soluçaõ : 

- evitar mutar valroes ou estados 

![](img/sol1.PNG)
- Usando uma biblio de imutabilidade 
imutable.js 
![](img/sol2.PNG)

outras libs 
- immer 
- immutability-helper 
- seamless-immutable 

- Imutabilidade é pre-requisito no redux
- Redux e react-redux usam comparações rasas 
- manipulação de dados mais seguras 
- time-travel debugging 

- reducers dividem o objeto de estados em dominios por uma chave
- combinereducers checa mudanças usando comparação rasa 
- fazem a interação nos reducers 
- criam um novo objeto de estado a partir dos estados retornados por cada reducer 
- connect gera componentes que fazem comparação rasa com o estado root 
- retornam o valor para a função mapStateToProps , verificando quem precisa de rerender 
- Por que não funciona com objetos mutáveis ? 
![](img/porque.PNG)

## REdux + Rest 

- Exemplo : Sistema de loggin ou notificações 
- manter a sincronia independente da tela onde estiver 
- uma maneira facil seria armazenar os dados do serviço no redux 
- solução : Middlewares 
### Redux Middlewares 
- Camada entre o disparo de uma ação e o momento que ela atinge o reducer 
- Utilizados para uma variedade de unções entre elas chamadas de apis de serviço 

![](img/1.PNG)


![](img/2.PNG)


![](img/3.PNG)

- problema : mas e seu eu quisesse fazer um crash report usando a mesma estrutura ? 


![](img/4.PNG)

![](img/5.PNG)

![](img/6.PNG)

![](img/7.PNG)

- fazendo um currying 

![](img/8.PNG)


![](img/9.PNG)

- só expoe um subconjunto da store api para o middleware >: dispatch e o getstate 
- fica dificil saber se store.dispatch(action) vai realmente percorrer  a cadeia do middleware de novo 
- opera em cima de createStore ao invés da store em si 

- usando o applymidware do redux 
![](img/10.PNG)

- middlewares mais usados : 
- redux-thunk 
- redux-saga

- um thunk é uma função que chama outra função 
![](img/thunk.PNG)

- npm add redux-thunk 

-  iremos chamar a api de cientistas para dentro do redux 

## Aula 4 - Conceitos de Qualidade de código e automação de testes em React 

- TDD e BDD com JEST 
- DeBugging 
- Tratamento de erros 

## TDD 
Desenvolviemnto orientado a teste 
- escreve um codigo pra testar codigo 
- QA : Quality Assurance Testador 
![](img/TDD.PNG)
- Teste Unitário  (função , componente, serviço ,página ... )
- Teste End-to-End (E2E) (ponta a ponta)
- JEST (usa um linguagem Js chamada Jasmine https://jasmine.github.io/) 
- REact-testing-Library (bom para testar componentes)
- Shallow 
- Enzyme 
- Chai 
- Mocha 
- Selenium 
- Puppeteer 

- npm add --dev @testing-library/react

primeiro os testes mais básicos depois os mais completos 

## BDD 
Behavior-Driven Development 
- Une especificação, teste automatizado e premissa de teste (documento de teste)
- Sintaxe Gherkin 
- Representa a especificação através de steps para definir cenários 
- descreve cada funcionalidade por features 
- 
Funcionalidade: Loing 
  Texto com  a descrição da funcionalidade
Cenário: Como um usuário valido , posso logar no sistema 
  Dado que estou na tela de Login 
  Quando digitar credenciais válidas
  E clicar no botão de login 
  Então devo acessar a Home do sistema 
Cenário: Como um usuário invalido , devo visualizar uma mensagem de erro e continuar na página de Login 
  Dado que estou na tela de Login 
  Quando digitar credenciais inválidas
  E clicar no botão de login 
  Então devo ver uma mensagem de erro
  E devo estar na tela de login 

- Jest-cucumber
- npm add --dev jest-cucumber (existe uma extensão para Vs code para .feature)
- Chai 

## Debbugin 

Depuração , processo de encontrar e reduzir defeitos de um software 

- Chome devtools 
- Redux devtools monitora a store 
- react devtools 

- LightHouse (dentro do inspect do chrome devtools : gera um report
de acessibilidade, boas práticas , etc do meu site )

## Tratamento de erros 
- Resiliência de Software (quando falha o que é mostrado ? )
- Segurança 
- Ex SomaSegura: Verifica se os argumentos existem , se são do tipo number senao retorna -1 
- em forms eh interessante tratar a entrada para evitar roubo de informações 
- ex: evitar caracteres especiais 
- tratar se só numeros em campo número , etc 
- evitar datas inválidas 
- usuário ou senha inválidas ( evita o roubo de senha por tentativa e erro evitar somente usuario ou somente senha invávaida) 
-
- Tratamento de componentes : 
- Em Js usamos PropTypes 
- Podemos usar linguagens tipadas como typescript definindo interfaces 

import React from 'react';
import PropTypes from 'prop-types';

export const Basic = ({ name }) => (
    <p>Meu nome é {name}</p>
)

Basic.propTypes = {
    name: PropTypes
}





## SCRUM

## DDD e Padrões de Arquitetura

### Conceitos introdutórios e o que é um banco de dados

SGDB - Sistemas gerenciadores de banco de dados

- DDL Linguagem de definição -> Definição da estrutura dos dados
- DML Linguagem de Manipulação -> Recuperação e alteração da informação
- DQL Dicionario de Dados  - > banco de dados dentro do banco de dados que guarda a estrutura

### Modelos de Banco de dados

- Modelo Flat - tabelas com os dados diretamente
- Modelo Hierárquico  - divisão da informação em árvore hierárquica  (já nao é mais utilizado) (ex: registro do windows) (redundância de informações)
- Modelo Relacional - mais utilizado atualmente conjunto de tabelas flat que se relacionam obedecendo algumas regras
- existem vários outros modelos : redes (grapho) , Orientado a objetos . objeto relacional (OO + relacional) , Big data

### Bando de dados Relacionais (SGDBR ou em ingles RDBMS)

- Tabelas : Entidades que agrupam as informações
- Linhas : Registros ou tuplas
- colunas : Classificação ou definição do que significa cada informação
- chaves:  Primaria (unicidade do registro ) ou   foreing key (estrangeira) herança da chave primaria de uma outra tabela que cria o relacionamento entre duas tabelas

### Modelagem

- 1 Modelo Conceitual - MER
- 2 Modelo lógico - Implementação
  DER (diagrama de entidade relacionamento) Um desenho que mostra como o modelo se comporta, mostrando como as entidades se relacionam.
- Dados que não dependem de nenhum outro para existir são chamados de entidades forte ex: usuarios , produtos
- Dados que dependem de nenhum outro para existir são chamados de entidades fracas  ex: tabela venda depende de produtos e usuarios
- Exemplo de um relacionamento M x N  ( entidade associativa)
- no modelo der existe uma notação que vem ao lado da entidade M(1..N) significa que precisa de no minimo 1 e pode ter varios
- no modelo der existe uma notação que vem ao lado da entidade N(0..N) significa que pode nao ter nenhuma ou N vendas
- no modelo der existe uma notação que vem ao lado da entidade 1(1..1) 1 venda precisa ter 1 e no maximo 1 cliente
- Relacionamentos 1X N , M x N
  ![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/Capturar3.PNG?raw=true)

![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/333.PNG?raw=true)

- Transação atomica - 1 venda sem nenhum item
- Normalização 1 a 5
- 1,2,3 mais comuns
- Modelo relacional pode ser criado sem normalizaçao mas pode gerar problemas de controle
- 1ª forma normal -> Existencia de valores unicos na mesma coluna ex : 2 telefones na mesma coluna
- Se houver dois telefones ou duas informações , essa informação precisa ser quebrada em uma nova coluna ou nova entidade (tabela com relação de chave estrangeira)
- 2ª forma normal  resolve o problema da digitação errada ou duplicidade de linhas . Onde havia vendedor com escrita errada , cria-se apenas dois registros ex vendedor ou consultor
- 3 ª forma normal - os valores devem ser dependendes da chave primaria e não podem ser dependentes de valores que nao são chave (total depende de valor e quantidade o que pode gerar problemas na hroa de armazenar informações pois o usuario pode alterar uma coluna e o totla nao será atualizado)
- Obs: Só podemos estar na segunda forma se aplicamos a primeira e assim por diante

### SGDBR - SQL

- DDL - Data definition languange
- Create
- DML Linguagem de Manipulação
- Insert, Delete, Update
- DQL Dicionario de Dados
- Select ... from ... where ... groupby ... having ... orderby

Exemplo : Select quantidade ,valor , descricao from Item_venda Join Produto On Codigo = Cod.Produto Where Valor > 5
![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/4444.PNG?raw=true)

- Funções de conjunto - Sun , min , max, avg dentre outras que podem ser utiizadas para aplicar uma operação a collunas de um BD
- Exemplo de query de funções de conjunto :

![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/55555.PNG?raw=true)

- Indexadores Um index é uma pequena tabela extraida da tabela original apenas com as colunas que desejamos ordenar . Ela é física (armazenada no servidor )e memória (estará ocupando memória) . Podemos criar quantos indices forem necessarios para uma tabela . Indices afetam os recursos no dml . Ao incluir uma nova linha o sistema precisará fazer a mesma coisa no index

### Transactions

- Consumo e tratamento de informações em um nivel de isolamento. O sistema gerenciador de banco de dados deve permitir a concorrencia de recursos para muitos usuarios (transactions , ou aquilo que se pode fazer dentro de uma sessão).  Cada operação realiza dentre de um BD é tratada como uma transação independente, tem começo , meio e fim .
- O padrão de isolamento é o reading commited. Pode-se ler aquilo que já foi aplciado no banco
- Em uma transação diversos usuarios podem sobrepor informações
- Ex :
- Inicio (Insert, Delete, Update)
- resolução (commit ou rollback )
- Fim ( novos dados ou dados originais)
- Conceito ACID
- Atomicidade Todas as operações são executadas com sucesso, commit ou rollback , mesmo com a conexão interrompida
- Consistencia Unicidade de chaves, restrições de integridade lógica , etc (não posso infringir regras do modelo)
- Isolamento   Varias transações podem acessar simultaneamento o mesmo registro ou parte do registro. REspeita-se a ordem de chegada
- Durabilidadae  Depois do commit , mesmo com erros, queda de energia, etc as alterações devem ser aplicadas

### SGDBR na prática

-SGDBs-R (relacionais) :

- Todos tem versões com features reduzidas para aprendizagem ou pequenos negócios
- ORACLE , Microsoft Sql Server , IBM DB2 ,
- PostGreSql (gratuito) , Mysql , Sqlite (embarcados , não é bom para sistemas distribuidos, mas pode rodar até mesmo no celular )
- Instalamos o postgree sql
- no chrome http://127.0.0.1:16751/browser/
- Server
- Nome
  _ connections localhost port 5432
- postgree - local onde serão salvos os metadados ( dicionario de dados) nada deve ser alterado ali
- criamos uma nova database chamada aula
- schema : mapeia o quesito logico da operação
- fomos em aula , botao direito , query tool
- executamos no query editor :

```Javascript
create table client
(codigo numeric(10) not null primary key ,
nome varchar (100) not null , 
telefone varchar(15))
```
- clicando no play a tabela será criada e dando um refresh na database aula você vera a table client
- Comando ddl (criacao etc;) nao necessitam de commit cuidado , pois nao tem volta. dar um drop na tabela nao tem volta
- Inserimos

```Javascript
insert into client (codigo,nome,telefone)
values(1,'Lorem Ipsum', '(88)- 8888 9999')
```
- e para que seja acplicada aplicamos commit
- ao realizar um select * from client vemos o usuario adicionado
- ele se tornou o usuario postgre no ubuntu para mostrar que podemos fazer o mesmo pela linha de comando
- sudo su postgre
- executou psql
- create table client (codigo numeric(10) not null primary key , nome varchar (100) not null ,  telefone varchar(15));
- insert into client (codigo,nome,telefone) values(1,'Lorem Ipsum', '(88)- 8888 9999');

### A arquitetura de aplicações móveis e internet das coisas

### Internet das coisas

- arpanet
- Protocolo MQTT (message queue telemassage transport)  é um protocolo de mensagens assíncronas (machine to machine - M2M) mais utilizado para IOT (linguagem que o smartphone rodando android) para se comunicar com a cloud
- free rtos -> sistema operacional real time
- Modelo publish / subscribe -> modelo de comunicação do MQTT
- Publicador/ Publisher:  Quem envia dados para um tópico, emissor.
- Subscrito/ Subscriber:  Pessoa que está inscrita no tópico e recebe os dados, receptor.
- Broker: Intermédio de comunicação entre Publicador e Subscrito, responsável por receber, enfileirar e enviar as mensagens.
- Payload: Conteúdo da mensagem enviada.
- Cliente/Client: Elemento capaz de interagir com o Broker, seja para enviar, receber ou os dois.
- Mensagem: Pacote de dados trocados entre Clientes e Broker.
- Tópico: Endereço para o qual os dados serão encaminhados.
- Unsubscribe: Deixar de assinar um tópico.

![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/Capturar2.PNG?raw=true)

- pub mqtt://my-tracker.com/identificador_usuario/gps/position{'lat:-23.53,'Ion':-43.81}
- topico(ex: /gps/position) : endereço onde se entrega a informação , definido pelo usuario
- mqtt     :// my-tracker.com  /identificador_usuario   /gps      /position            {'lat:-23.53,'Ion':-43.81}
- protocolo    broker           identificador           sensor    tipo de informaçao
- mqtt://my-tracker.com/+/gps/position{'lat:-23.53,'Ion':-43.81}
- + é um caractere corigna que faz com que o broker entregue a posição geográfica de todos os usuarios
- pub mqtt://my-tracker.com/identificador_usuario/gps/+
- pega todas as informações do gps
- mqtt://my-tracker.com/+/#
- é um caractere corigna que recebe todas as informações de todos os sensores de todos os usuarios
- QOS -> niveis de qualidade de serviço
- QoS 0 (at most once)- A mensagem deve ser recebida no máximo uma vez, podendo ser recebida uma vez ou nenhuma, não há confirmação de recebimento.
- QoS 1 (at least once)- A mensagem deve ser recebida pelo menos uma vez, podendo uma mesma mensagem ser recebida uma ou mais vezes, há confirmação de entrega de uma mensagem.
- QoS 2 (exactly once)- A mensagem deve ser recebida uma única vez, confirmação de recebimento de uma única mensagem.
- prova de conceito
  app android -> mosquito -> node.js-> banco de dados mysql
  Mosquito -> Broker executável em linux que consegue publicar dados de um android
- minimo produto viavel
  GPS embarcado -> HiveMq-> akkaScala JVM ->banco de dados nosql
- Solução
  GPS embarcado -> aws iot core -> aws kinesis firehose -> aws s3
- IOT na prática
  GPS embarcado -> aws iot core -> aws data stream -> aws lambda -> aws elasticCacheRedis-> Aws EC2 -> FeathersJSBackend -> Dashboard

### Web Service

- Soluções para que aplicações se comuniquem independentemente de linguagem, software e hardwares utilizados
- Inicialmente foram criados para troca de mensagens usando xlm(extensible markup language) sobre o protocolo http sendo identificado por uri (uniform resource identifier)
- Podemos dizer que serviços web são api's que se comunicam por meio de redes sobre o protocolo http
- Uma aplicação x acessa um web service que faz troca de  mensagens com a aplicação y usando , xml , json, yaml ...
```
SOAP
REST
XML
JSON
```

linguagens de marcação -> usadas para comunicação entre aplicações

### Estrutura Soap

SOAP = simple object access protocol

- Baseado em xml para acessar serviços web por http
- É uma definição de como serviços web se comunicam
- Desenvolvido para facilitar integrações entre aplicações em diferentes linguagens
- Independe de plataforma e software
- Meio de transporte genérico pode ser usado por outros protocolos além do http

XML = Extensible Markup Languange

- criada na décade de 90 pela W3C
- Facilita a separação de conteúdo
- Não tem limitação de criação de tags

Estrutura SOAP

- O soap message possui uma estrutura unica que deve ser sempre seguida
- soap envelope (container) -> soap header -> soap body
- Envelope é usado para encapsular toda a mensagem soap
- header elemento que possui informações de atributos e metadados da requisição
- body contem os detalhes da mensagem

ex :

```Javascript
<soap:Envelope xmlns:soap="endereço/soap-envelope"> 
<soap:Header> 
</soap:Header> 
<soap:Body>
<m:MetodoEndereco xmlns:m="endereco/endereco"> 
<m:Cidade> nomecidade </m:Cidade>
<m:CEP> numcep </m:CEP>
<m:Numero> num </m:Numero>
<m:Endereco>
</soap:Body>
</soap:Envelope> 
```
### Entendendo o que é WSDL e XSD

WSDL

- Web Service Description Language
- Descreve Web Services funciona como um contrado do serviço
- A descrição é feita em um documento XML, onde é descrito o serviço , especificiações de acesso , portas, métodos ,etc;

XSD

- XML Schema Definition
- É um schema no formato XMl usado para definir a estrutura de dados que será validada no xml
- Funciona como uma documentação de como deve ser montado o SOAP Message (XML) que será enviado através do Web Service
- http://www.soapclient.com/xml/soapresponder.wsdl
  Programa para abrir e identificar com mais facilidade métodos dentro de um soap
  ele também consegue retornar a requisição dos dados em SOAP
- https://www.soapui.org/.

documentation => Descrição do que o serviço faz

Python zeep -> cliente soap para python

### Aprenda o que são REST, API e JSON

Rest

- Representational State Transfer
- É um estilo de arquitetura de software que define a implementação de um serviço web
- Podem trabalhar com os formatos XML , JSON ou outros
- utiliza http para definir a operação que está sendo efetuada
  ![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/Capturar.PNG?raw=true)

API :

- Application Programmin Interface
- São conjuntos de rotinas documentadas e disponibilizadas por uma aplicação para que outras aplicações possam consumir suas funcionalidades
- Popular com o aumento dos serviçoes web
- Facebook , Twitter , Telegram , Wzap , Github ...
- Apis podem ser rest , json , etc...

Métodos HTTP :

- GET  solicita a representação de um recurso ( ex pegar um tweet)
- POST solicita a criação de um recurso (ex criar um tweet)
- DELETE solicita a exclusão de um recurso
- PUT  solicita a atualização de um recurso (ex atualiza o texto do twwt)

Para um serviço web ser considerado rest, deve seguir esta arquitetura . get representa, post cria, delete exclui e put atualiza.

JSON

- JSON Javascript Object Notation  ( apesar de poder ser usada em qquer linguagem)
- Formatação leve utilizada para troca de mensagens entre sistemas
- Usa-se de uma estrutura de chave e valor e também de listas ordenadas
- Um dos formatos mais populares

ex:

```Javascript
{
 "nome": "Os vingadores". 
 "ano": "2019", 
 "personagens":[
 {
  "nome": "Thanos" 
 },
 {
  "nome": "thor" 
 },
 {
  "nome": "Hulk" 
 }
 ]
}
```
### Integração com REST e métodos HTTP na prática

Código de Estado (Status Code)

Usado pelo servidor para avisar o cliente sobre o estado da operação solicitada

- 1xx - informativo (ex: recebido , aceito , mas ainda nao terminou)
- 2xx sucesso  (solicitação aceita , processada com sucesso)
- 3xx redirecionamento (ação necessária para o cliente ex mudança de site)
- 4xx erro do cliente
- 5xx erro do servidor

Lista de Códigos de estado

- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

Programa para simular trocas de msg http

- https://www.postman.com/downloads/
- É possivel usar o python e o javascript para utilizar comandos HTTP.

## Introdução a arquitetura de sistemas

### Monolito

figura de monolito
Pros:

- Baixa complexidade
- Monitoramento simplificado
  Contra :
- Stack Unico
- Compartilhamento de recursos
- Acoplamento
- Mais complexa a escalabilidade

![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/monolito.PNG?raw=true)

Servidor (BD -> varias instancias <- http proxy)  <- web app e mobile app

### microserviços 1

Um serviço para cada aplicação Cluster . Os serviços se comunicam e se completam. O proxy de dentro do cluster decide qual serviço
responsável por uma determinada demanda .

Pros:

- stack dinâmica
- Simples escalabilidade
  Contra :
- Monitoramento complexo
- provisionamento complexo  (docker)
- Acoplamento

![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/microservico.PNG?raw=true)

### microserviços  2

Não há mais canal de comunicação direta (message broker). se 2 para de funcionar nao quebra o serviço 1 . Não há comunicação direta entre serviços . Com o MB quando o serviço retorna , ele peg todas as mensagens do mB e se atualiza. SE o MB quebrar a arquitetura inteira quebra.
Pros:

- stack dinâmica
- Simples escalabilidade
- Desacoplamento
  Contra :
- Monitoramento mais complexo que o microserviço 1 (MB entre cada serviço)
- provisionamento complexo  (docker)
  ![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/micro2.PNG)

### microserviços  3

Se comunica através de um gerenciador de pipelines . Os serviços estão desacoplados. O serviço 1 faz sua parte e quebra se for necessario o serviço 2 estiver offline. O pipeline deve saber voltar no serviço 1 (rollback)  e reverter o que foi feito .
Pros:

- stack dinâmica
- Simples escalabilidade
- Desacoplamento
- Menor Complexidade
  Contra :
- Plataforma inteira depende do gerenciador de pipeline
- provisionamento complexo  (docker)

![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/micro3.PNG?raw=true)

### Gerenciamento de erros e volume de acesso

Onde é mais complexo :
-Processos assíncronos ( Microserviço #2)

- Pipeline

Solução

- Dead letter queue (fila separada do MB)
- Filas de re-tentativas

## UX e UI

- Briefing , Imersão e Unpack
- Briefing -> Entender o que é o projeto : Objetivo , entender o porquê do trabalho
- Imersão -> Contexto , público , stakeholders, histórico , estratégia, demandas , reclamações ,etc
- Unpack -> Em um sprint Design , o primeiro dia é conhecido como "unpack" nessa etapa podemos ouvir várias informações diferentes.

### wireframes , grids e hierarquia

- Estrutura  como os objetos devem ser posicionados no layout (papel e caneta)
- Conteudo  como serão colocados os conteúdos para ajudar na usabilidade e interatividade do usuario
- Hierarquia informativa como o conteúdo será organizado e apresentado
- Funcionalidade  como será a usabilidade em cima da interface/ em relação ao comportamento , como interagir com o usuario ? como ele se comporta ?
- Grid alinhamento e espaçamento
- Grid : Podemos masi facilmente detemrinar o fluxo de leitura que queremos que o nosso leitor tenha
- Lembre-se sempre de dar atenção ao alinhamento e espaçamento tanto de textos quanto de elementos gráficos focando na responsividade
- Luzes , sombras , consistencia e padrão
- Luzes e sombras : Recursos qeu garantem movimento , profundidade , sobreposicao e contraste a interface
- é importante separar elementos , menus , demarcar areas importantes e indicar possíveis ações em seu projeto
- Consistência e padrão : o projeto deve manter o mesmo tom de redação (ux writer) o mesmo padrão visual (design System) e am esma consistencia em diversos devices (Ux design)
- se preocupar com o tamanho de tela , o app deve ser capaz de ser reproduzido em diversos tamanhos de tela

### Cores da interface

- Saber usar cores não é uma tarefa facil (UI design)
- Psicologia das cores
- cores quentes = consumo
- cores frias = tranquilidade
- Paleta primaria (Azul (fria )  laranja (quente) e cinza(neutra) )
- cor deve seguir a marca que estamos usando
- cores secundárias
- verde - sucesso
- amarelo - aviso
- erro - laranja
- notificação laranja -claro
- cinza - mensagem

### Gradiente ou degrade vem sendo aplicado no redesing de alguns logos ex: instagram

- profundidade e impacto visual

### tipografia

- Qual escolher ?
- Faz o link entre personalidade e a mensagem que queremos passar
- Classificação de fontes :  serifadas , sem serifa , cursivas e decorativas
- Serifadas : Apresentam pequenos traços e prolongamentos. Seriedade e tradicionalidade  (ex: times New Roman)
- Sem serifa (sans-serif) não tem linhas extras no final das letras , são consideradas modernas e dinâmicas. Leitura melhor, arredondadas.
- Cursivas (script) abrange as fontes manuscritas ou caligráficas -> elegante pessoal e exclusivo ou divertido e descontraído
- decorativas ou fantasia (display) Fontes destinadas a chamarem sua atenção. Geralemnte são mais inunsitadas que práticas e devem ser usadas em pequenas doses para efeito e propósitos específicos

### tamanho e peso

- ABNT Times new roman , tamanho 12 , espaçamento 1.5 , bom no papel
- O tamanho padrão de texto no browser é 16 px. (padrão para design digital)
- Peso : É a grossura dos caracteres de um tipo (propriedade fonte-weght). Normal , bold , bolder e lighter
- obs : helvética pode ter pesos entre 100 e 900 onde 100 Thin até 900 heavy

### Componentes da Interface do Usuário

- IconografiaComunicar uma mensagem por uma linguagem visual
- Manter os ícones simples
- Traduzem de forma simples a informação que devem passar
- Combine ícones com palavras
- escolha ícones familiares
- utilize espaçamento
  consistência elementos ecomuns para usar em seus ícones paleta de cores . nao mais de tres cores par manter o design clear nao tenha medo de repetir elementos em todos os seus ícones
- imagem nao é decoração (UX)
- Contexto relevante - Usuarios reagem a imagens melhor que a textos
  -relevância

### Guias de estilo  ( manual da marca )

- criado pelo designer que criaram a identidade visual e a correta aplicação da marca
- Preserva a uniformidade e coerenciada comunicação da marca

### Conceitos em projetos

- Padrão visual para diferentes telas
- Responsividade O brasil é um dos paises que mais cresce em smartphones
- Mobile first - pensar primeiro no mobile e depois em outras telas
- Responsividade - Abrange atingir todas as telas com o app celular , tablet monitor
- O futuro do e-commerce é celulares (app commerce )
- Navegar com uma mão
- Google resize window resize
- Empatir e inclusão Acessibilidade
- Conhecer e pesquisar o usuário é fundamental
- Entender acessibilidade uxdesign.blog.br oque fazer e o que nao fazer sobre acessibilidade

### Prototipagem

- Utilidade atualizar modelo de negócios e criar novos produtos ou serviços
- Fidelidade do protótipo (baixa ou alta fidelidade) baixa é interessante para não criar expectativas
  ![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/dasdasd.PNG?raw=true)

### Portfolio , Clientes e apresentação

- Fundamental !
- Demonstra profissionalismo - problema e solução

## BootStrap

### Construindo páginas para internet com Bootstrap

https://github.com/luizrosalba/Bootstrap

Aprenda sobre o framework Bootstrap

- Bootstrap : Framework para dev de sites responsivos (todos os devices)
- framework mais conhecido
- divide a tela em até 12 partes
- dentro da pasta css arquivos css identados arquivos min sem identação (mimificado)
- container com borda
- container-fluid  pagina toda
- text-center

## Node JS

https://github.com/luizrosalba/ArquiteturainternanoNodeefilas.md/blob/master/README.md

## TDD e BDD

https://github.com/luizrosalba/node-tdd/edit/master/README.md

### node-tdd

Exemplo de desenvolvimento de API em Node.js usando TDD

### Instalar dependências

```
npm install
```
### Criar container para o banco MongoDB com Docker

Execute o arquivo para gerar o container:

```
./runDocker.sh
```
*Obs.: O Docker precisa estar instalado. Instruções de como instalar o Docker em Windows, Mac e Linux, veja [este post](https://blog.umbler.com/br/containers-102-primeiros-passos-para-realizar-a-instalacao?a=7e8480pk).*

### Executando os testes

Para executar os testes unitários, use o comando:

```
mpm run test:unit
```
Para executar os testes de integração, use o comando:

```
pm run test:integration
```
### Referências

[Documentação do Express](https://expressjs.com)

[Documentação do Sinon.js](https://sinonjs.org) - módulo para uso de *stubs*, *mock* e *spy*

[Documentação do Mocha](https://mochajs.org) - módulo de execução de suites de teste

[Documentação do Chai](https://www.chaijs.com) - módulo para fazer asserções

[Documentação do SuperTest](https://github.com/visionmedia/supertest) - módulo que emula e abstrai requisições HTTP

### Observações

Este código faz parte do curso **_Desenvolvimento Back-end com Node.js_** na [Digital Inovation One](https://digitalinnovation.one).

## Node JWT

https://github.com/luizrosalba/node-jwt/edit/master/README.md

Exemplo de API em Node.js usando JWT

### Instalar dependências

```
    npm install
```
### Gerando certificados

O algorítmo de encriptação do token usa o conteúdo de arquivos de certificados que contém as chaves pública e privada. Para gerar estes arquivos, execute o arquivo:

```
$ ./generateKeys.sh
```
A senha solicitada pelo comando pode ficar em branco. Os arquivos **_private.key_** e **_public.key_** serão gerados na pasta **_src_**.

### Iniciar o servidor

Para iniciar o servidor Express, use o comando:

```
   npm start
```
### Referências

[Documentação do Express](https://expressjs.com)

[Documentação do JsonWebToken](https://github.com/auth0/node-jsonwebtoken)

### Observações

Este código faz parte do curso **_Desenvolvimento Back-end com Node.js_** na [Digital Inovation One](https://digitalinnovation.one).

## Redis

### Tarefas em Background usando node e redis

- Instalei o docker https://hub.docker.com/
- Docker é uma plataforma de código aberto, desenvolvido na linguagem Go e criada pelo próprio Google.
  Por ser de alto desempenho, o software garante maior facilidade na criação e administração de ambientes isolados,
  garantindo a rápida disponibilização de programas para o usuário final.
- O Docker tem como objetivo criar, testar e implementar aplicações em um ambiente separado da máquina original,
  chamado de container. Dessa forma, o desenvolvedor consegue empacotar o software de maneira padronizada.
  Isso ocorre porque a plataforma disponibiliza funções básicas para sua execução,
  como: código, bibliotecas, runtime e ferramentas do sistema.

Um arquivo Docker pode ser formado por diversas camadas diferentes, onde se dividem em dois grupos:

- Imagens: elas são formadas por diferentes camadas. Com a sua utilização, o usuário pode facilmente compartilhar
  um aplicativo ou um conjunto de serviços em diversos ambientes. Quando há alguma alteração na imagem,
  ou uso de um comando como executar ou copiar, é criada uma camada.

-Containers: são formadas na reutilização das camadas. Um container é o local onde estão as modificações da
aplicação que está em execução. É por meio dele que o usuário pode modificar uma imagem.

- Permite Reversão
- permite Implantação rápida
- criei uma conta
- realizei o tutorial de instalação od docker desktop para windows gerando assim um container docker -tutorial rodando na porta 80
- não consegui startar o container do tutorial (ocorreu algum erro de portas ... )
- Para o Labs vou precisar do redis , para criar este container executei :
  docker run --name redis -p 6379:6379 -d -t redis:alpine
- Pelo amor do deus divino , quando for criar o container, crie com acesso a porta 80. para mudar isso depois é um inferno !!
- eu criei um arquivo explicando como adicionar o acesso a essa porta neste mesmo repositorio do github
- Ele usou a imagem padrão do  Linux 687e7ed93cd5 4.19.76-linuxkit #1 SMP Tue May 26 11:42:35 UTC 2020 x86_64 Linux
- agora pelo docker desktop eu tenho acesso a esta máquina virtual :D
  posso acompanhar os containers criados pelo comando :
- docker ps

insatlei o yarn

- apk add yarn
- yarn --version
- usar o Visual Studio Code com o container :
- adicionar a extensao do docker
- adicionar a extensão do remote container
- criar a paste :
- no VS F1
- remote containers : attach to running container
- está pronto para usar !
- criei uma pasta em ~/.vscoder-server/teste2
  Instalei o yarn express nodemailer dotenv
- yarn add express nodemailer dotenv
  Instalei o gitignore no container para subir o codigo para o git
- busquei o pacote gitignore , já me deu a opção de instalar no container e instalei com um clique
- abri a pasta teste2
- adicionei o git no container
  RUN apk update && apk upgrade && apk add --no-cache bash git openssh
- fui pra pasta teste2 e adicionei o controle git
- yarn add git
- Ele já atualizou as dependencias do projeto no json com o git

```Javascript
{
  "dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "git": "^0.1.5",
    "nodemailer": "^6.4.11"
  }
}
```
- dentro da pasta2 git init
  Initialized empty Git repository in /root/.vscode-server/teste2/.git/
  criei um arquivo .gitignore com a seguinte linha : node_modules
- isso faz com que o git ignore os modulos do node na hora de fazer os meus commits
- Adicionei o nodemon no projeto
  yarn add nodemon sucrase -D
  -Criei o arquivo nodemon.json dentre de teste2
  criei a pasta src e dentro dela coloquei servers.js
- import 'dotenv/config';
  dotenv permite usar variaveis de ambiente
- Criei o arquivo .env na pasta teste 2 e coloquei a o comando : PORT=8080
  .env é bom para usar com variaveis imutaveis como credeciasi de acesso , servidor etc...
- editei e meu server.js ficou assim :

```Javascript
import 'dotenv/config';
import express from 'express'; 

import UserController from './app/controllers/UserControllers'
const app = express();

app.use(express.json());

app.post('/users',UserController.store);

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
  
});
```
e rodei no terminal para iniciallizar o servidor :

- yarn start
- Obs : VAriaveis de ambiente são carregadas qquando o servidor sobre , qquer alteração nelas o servidor deve reiniciar
- dentro da pasta src eu criei a pasta app > controllers > UserController.js
- yard add password-generator
  agora a senha vai ser gerada automaticamente (server.js) . Editando o arquivo UserControllers.js

```Javascript
import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail'

export default {
     async store(req,res){
        const { name , email   } = req.body ; 
        const user = {
            name, 
            email, 
            password : passwordGenerator(15,false)
        };
  
  
         await  Mail.sendMail({
             from:'DIO <contato@batata.com.br>',
             to: `${name}<${email}>`,
             subject : "Cadastro de usuário",
             html: `Olá, ${name}, bem vindo a DIO.`
         })


        return res.json(user);
     }
 }
```
-yarn start

-criamos uma pasta lib dentro de app com o arquivo Mail.js

```Javascript
import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

export default nodemailer.createTransport(mailConfig)
```
- Usamos o mailtrap.io para simular uma caixa de email
- https://mailtrap.io/inboxes
- criamos a pasta config/mail.js

```Javascript
export default{
    host: process.env.MAIL_HOST, 
    port: process.env.MAIL_PORT, 
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
}
```
```Usei minhas credenciais no .env para enviar o emal
PORT = 8080

MAIL_HOST = smtp.mailtrap.io
MAIL_PORT = 2525
MAIL_USER= ---
MAIL_PASS= ----

```
<s>Não consegui enviar o email pois o meu container nao tem um servidor http , não consigo fazer o post que gera o usuario , a senha aleatória e manda o email. preciso instalar um servidor http para tanto. </s>

- não precisei de nada disso. o nodemon já inicia o servidor n porta 8080 com o nodejs com as configurações realizadas no arquivo server.js Consegui fazer o post usando o postman desta forma :

![](https://github.com/luizrosalba/Tarefasem-background-utilizando-Nodejs-e-Redis/blob/master/Capturar.PNG?raw=true)

- O professor então fala que uma fila em background poderia ajudar em situações onde muitos usuarios estivessem se cadastrando e nao recebendo o email por causa do await estar demorando muito
- Solução : criar uma fila de processamento em background
- criar o processo que cria a fila
- criamos o registrationmail.js dentro da pasta jobs
- Eu coloquei o pc em modo suspender e deu problema ao reiniciar. Quando reiniciou o docker nao queria abrir os containers por causa do ISS do WIndows. Desativei e funcionou
- Bull Ferramenta encontrada no github para gerenciamento de filas
- tinha uma kue mas parou de ser utilizada (sempre ficar de olho na ultima data do commit)
- criamos o arquivo RegistrationMAil dentro de uma pasta jobs

```Javascript
import Mail from '../lib/Mail'

export default {
    key : 'RegistrationMail',
    options: {
        delay:5000,
        priority:3
    },

    async handle({data}){ ///desestruturacao evita data.data
        const {user} = data; 

        await  Mail.sendMail({
            from:'DIO <contato@batata.com.br>',
            to: `${user.name}<${user.email}>`,
            subject : "Cadastro de usuário",
            html: `Olá, ${user.name}, bem vindo a DIO.`
        })
    }
}
```
- E removemos o await do Mail.js
- criamos um arquivo redis.js dentro da pasta config

```Javascript
export default { 
    host: process.env.REDIS_HOST, 
    port: process.env.REDIS_PORT, 

}
```
e no arquivo .env adicionar
REDIS_HOST = 127.0.0.1
REDIS_PORT = 6379

- Dentro da pasta lib criamos o Queue.js
- adicionamos o bull
- yarn add bull
- percebi que coloquei o config dentro da pasta app  , deveria estar fora , depois corrijo isso
- criamos um index.js dentro de jobs com a linha

```
export {default as RegistrationMail} from './RegistrationMail';
```
Adicionamos um arquivo Queue.js dentro de lib

```Javascript
import Queue from 'bull'; 
import redisConfig from '../config/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job=> ({
    bull: new Queue (job.key,redisConfig),
    name: job.key,
    handle:job.handle,
    options: job.options,
}))

export default{
    queues, 
    add(name,data){
        const queue = this.queues.find(queue=>queue.name===name); /// validação so adicioan se a fila existe 
        return queue.bull.add(data,queue.options); /// adiciona o job na fila 
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);
            queue.bull.on('failed',(job,err) => {
                console.log('Job failed' , queue.key,job.data);
                console.log(err);
            });
        })
    }
}
```
Adicionamos o bull
criamos um queue.js dentro de src para ouvir se há ou nao um processo na fila

```Javascript
///criamos outro arquivo para processar em threads diferentes a fila 
import 'dotenv/config';
import Queue from './app/lib/Queue';
Queue.process();
```
- Adicionamos o bull-board apk add bull-board para visualizar o servidor em
  http://localhost:8080/admin/queues

```embaixo do start no package.json
"queue": "nodemon src/queue.js"
```
- Sentry : https://sentry.io/
- programa muito interessante que fica rodando dentro do servidor buscando exceções
  e nosso server.js ficou assim

```Javascript
import 'dotenv/config';
import express from 'express'; 
import BullBoard from 'bull-board';

import UserController from './app/controllers/UserControllers'
import Queue from './app/lib/Queue'

const app = express();
BullBoard.setQueues(Queue.queues.map(queue=>queue.bull));/// para cada fila , adiconar no bull 


app.use(express.json());
app.use('/admin/queues',BullBoard.UI);///adicionando o bull em uma rota

app.post('/users',UserController.store);

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});
```
## Node Hapi

https://github.com/luizrosalba/node-hapijs

## Node Mongoose

https://github.com/luizrosalba/node-ongoose/edit/master/README.md

## Construindo sexy APIs usando arquitetura serverless

Construindo sexy APIs usando arquitetura serverless,

### Serverless

Exemplo : Um server rodando em node.js onde você se preocupa prioritariamente
com a rota a ser construída

Vantagens :

- Roda uma função
- Paga-se o quante se usa
- Escalabilidade
- Facilidade no bootspraping
- Facilidade de por outros triggers

### Azures Functions x  AWs

- AWS mais recursos (Aws lambda , Googleecloud Functions , OpenWhisk... )
- Azure mais facil de se trabalhar serverless
- Serverless é muito usado para disparar triggers quando algo acontece
- Também para criar APIs
- listNotes ();
- createNote();
- updateNote();
- deleteNote ();
- azure functions core tools :
- https://docs.microsoft.com/pt-br/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash#v2
- Extensão do vccode : Azure Functions

### Criando uma API

- CRUD de produtos
- cria uma pasta c:\Users\escr\azure_func
- func init
- opção 2 node
- opção 1 javascript
- criou o dir e o json
- func new (cria uma nova funcao)
- template (triggers) - 8 HTTP trigger
- function name : GetProducts
- code .
- sim
- toda config pronta
- alteramos o index.js para :

```
module.exports = async function (context, req) {
    context.res =  { 
        status:200, 
        body: 'Hello World'
    }
}
```
- no terminal : func host start
- funciona !
- tiramos o metodo post da function.json
- definindo o nome da rota

```
{
  "bindings": [
    {
      "authLevel": "function",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["get"],
      "route": "products"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```
- funciona : http://localhost:7071/api/products
- https://github.com/IgorHalfeld/digital-innovation-one-demo
- copiamos o github para mongoclient.js em shared
- npm i mongodb
- em index.js

```
const createMongoClient = require('../shared/mongoClient');

module.exports = async context => {
  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');
  const res = await Products.find({});
  const body = await res.toArray();
  
  closeConnectionFn();
  context.res = { status: 200, body };
};
```
- http://localhost:7071/api/products retorna os produtos cadastrados no banco que o prof. criou em mongodb+srv://god:dog@cluster0-dfsvs.mongodb.net/dgo?retryWrites=true&w=majority
- trazendo só p id
- func new
- 8 HTTP TRIGGER
- GetProductByID
- no functions

```
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["get"],
      "route": "products/{id}"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```
- no index

```
const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { id } = req.params;

  if (!id) {
    context.res = {
      status: 400,
      body: 'Provide a product id on params',
    };
    return;
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');
  const body = await Products.findOne({ _id: ObjectID(id) });

  closeConnectionFn();
  context.res = { status: 200, body };
};
```
- retorna o produto
- http://localhost:7071/api/products/5ddb00d8d90791a2afee4055
- Rota para criar produtos
- func new
- 8
- CreateProduct
- index.js

```
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const product = req.body || {};

  if (product) {
    context.res = {
      status: 400,
      body: 'Product is required',
    };
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');

  try {
    const products = await Products.insert(product);
    closeConnectionFn();
    context.res = { status: 201, body: products.ops[0] };
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error on insert product',
    }; 
  }
};
```
- no function.json

```
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["post"],
      "route": "products"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```
- no postman
- criar o body raw

```
{
    "nome" : "curso" , 
    "price": 3 
}
```
-POST  http://localhost:7071/api/products/

- 201 created
- ao dar get percebemos o produto criado

```
  {
    "_id": "5f45667fc4d15216d86e6efe",
    "nome": "curso",
    "price": 3
  }
```
- func new
- 8
- UpdateProduct
-
- no index

```
const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { id } = req.params;
  const product = req.body || {};

  if (!id || !product) {
    context.res = {
      status: 400,
      body: 'Provide a product and product id on params',
    };
    return;
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');

  try {
    const products = await Products.findOneAndUpdate(
      { _id: ObjectID(id) },
      { $set: product },
    );
    closeConnectionFn();
    context.res = { status: 200, body: products };
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error on insert product',
    }; 
  }
};
```
na function

```
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["put"],
      "route": "products/{id}"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```
- put http://localhost:7071/api/products/5f45667fc4d15216d86e6efe
  com o body raw para atualizar o preco para 4 reais

```
{
    "nome" : "curso" , 
    "price": 4 
}
```
- funciona !
  Criando o delete
- func new
- 8
- Delete Product
  no index

```
const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { id } = req.params;

  if (!id) {
    context.res = {
      status: 400,
      body: 'Provide a product id on params',
    };
    return;
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');

  try {
    await Products.findOneAndDelete({ _id: ObjectID(id) });
    closeConnectionFn();
    context.res = {
      status: 200,
      body: 'Product deleted successfully!',
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error on delete product ' + id,
    };
  }
};
```
No Functions

```
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["delete"],
      "route": "products/{id}"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```
- DELETE http://localhost:7071/api/products/5f45667fc4d15216d86e6efe
- produto deletado com sucesso
- deploy no azure
- em todas as functions "authLevel": "anonymous", pois só uma function consegue acessar uma function
- clica com o botao direito sobre o painel do VS onde ficam os arquivos
- deploy to function app
- pay as you go  ( funcao ligada quando recebe )
- visual studio enterprise ( funcao sempre ligada )
- qeure reescreveR ?
- coloque o nome da nova funcao
- digital-innovation-one-api
- cria os resources
- no painel function apps
- na funcao que vc criou , no submenu cors
- allowed Origins * ( libera o acesso pra todos os dominios )
- sua api :
  https://digital-innovation-one-api.azurewebsites.net/api/products
- commit
- publish  azurefunc
- https://github.com/luizrosalba/azure_func

```





```
## Clean Code

https://github.com/luizrosalba/clean-code-javascript
