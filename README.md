# Resumo dos meus Estudos ! 



**Table of Contents**



**Table of Contents**

[TOCM]

[TOC]

#H1 header
##H2 header
###H3 header
####H4 header
#####H5 header
######H6 header
#Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")
##Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
####Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
#####Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
######Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

##Headers (Underline)

H1 Header (Underline)
=============

H2 Header (Underline)
-------------

###Characters
                
----

~~Strikethrough~~ <s>Strikethrough (when enable html tag decode.)</s>
*Italic*      _Italic_
**Emphasis**  __Emphasis__
***Emphasis Italic*** ___Emphasis Italic___

Superscript: X<sub>2</sub>，Subscript: O<sup>2</sup>

**Abbreviation(link HTML abbr tag)**

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

###Blockquotes

> Blockquotes

Paragraphs and Line Breaks
                    
> "Blockquotes Blockquotes", [Link](http://localhost/)。

###Links

[Links](http://localhost/)

[Links with title](http://localhost/ "link title")

`<link>` : <https://github.com>

[Reference link][id/name] 

[id/name]: http://link-url/

GFM a-tail link @pandao

###Code Blocks (multi-language) & highlighting

####Inline code

`$ npm install marked`

####Code Blocks (Indented style)

Indented 4 spaces, like `<pre>` (Preformatted Text).

    <?php
        echo "Hello world!";
    ?>
    
Code Blocks (Preformatted text):

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

####Javascript　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

####HTML code

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

###Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩 Xiamen

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面
                
----

## Html5

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
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

when the + operator is used with a String value, it is called the concatenation operator. 

## Criando arrays 

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

## Nested arrays 

Site bom com documentação 

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

var myArray = [[],[]];

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];// Retorna 8 

## Inicializando 
O método fill é um método mutável, ele irá mudar o objeto em si, e retorná-lo, não somente uma cópia do objeto.
```Javascript
arr.fill(valor[, ínicio = 0[, fim = this.length]]) 
[1, 2, 3].fill(4);               // [4, 4, 4]   preenche com 4 tudo 
[1, 2, 3].fill(4, 1);            // [1, 4, 4]   preenche com 4 a partir da posicao 1 
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]   preenche com 4 a partir da posicao 1 até 2 
Array(3).fill(4);                // [4, 4, 4]   preenche um vetor de tres posições com 4 
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}
```
## Alterando vetores (arrays)
```Javascript
var removedFromMyArray=array.push();  /// adiciona ultima pos
var removedFromMyArray=array.pop();  /// remove ultimo pos
var removedFromMyArray=array.shift(); // remove primeiro pos e retorna o elemento removido 
const tamanho  = myArray.unshift(["Paul",35]); /// adiciona na primeira posicao ao ser aplicado, retorna o tamanho do array  
const alimentos = frutas.concat(salgados) ; // faz um merge concatenando em alimentos o array salgados e frutas 
```

## Iterando vetores (arrays)
```Javascript
const arr = [1,2,3,4,5];  
arr.forEach((value,index) => {console.log(`${index}:${value}`)});

frutas.forEach((fruta,index,arr) => console.log(index,fruta,arr));

```

### Iterando todos os elementos de um array 
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


## Métodos de Arrays

### slice :  
Imutável Fatia o array 
```Javascript
const arr = [1,2,3,4,5];  
Arr.slice(0,2); // [1,2]
Arr.slice(2); // [3,4,5]
Arr.slice(-1); // [5]
Arr.slice(-3); // [3,4,5]
```

### splice : 

Não é imutavel, Altera o array adicionando novos elementos enquanto remove elementos antigos 
```Javascript
const arr = [1,2,3,4,5];  
Arr.splice(2); // remove a partir da posicao 2 [3,4,5] 
console.log(arr); /// [1,2]
Arr.splice(0,0,'first'); // [] /// inicio, quanto itens remove o que adicionar a partir da primeira posicao 
console.log(arr); /// ["fisrt",1,2]; 

```
## map  
Retorna um novo array de mesmo tamanho iterando cada item de um array 
```Javascript
const arr = [1,2,3,4,5];  
arr.map (value => value *2); // retorna um novo array [2,4,6,8,10]

```
## flat  
Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth) 
```Javascript
const arr = [1,2,[3,4]];  
arr.flat(); // retorna um novo array com profundidade 1 [1,2,3,4]
arr.flat(2); // retorna um novo array com profundidade 2 , neste caso não terá diferenca mas se houvessem outros arrays dentro de arr só iria até a segunda camanda de arr 

```
## flatMap  
 Retorna um novo array assim como faz a função map e executa um flat de profundidade 1 

```Javascript
const arr = [1,2,3,4];  
arr.flatMap (value => [value *2]); // retorna um novo array [2,4,6,8]
arr.flatMap (value => [[value *2]]); // retorna um novo array [[2],[4],[6],[8]]
```
## keys  
retorna um array iterator que contem as chaves para cada elemento do array 
```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.keys();
arrIterator.next(); {value:0,done:false};
arrIterator.next(); {value:1,done:false};
arrIterator.next(); {value:2,done:false};
arrIterator.next(); {value:3,done:true};
```
## values : 
retorna um array iterator que contém os valores para cada elemento do array 
```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.values();
arrIterator.next(); {value:1,done:false};
arrIterator.next(); {value:2,done:false};
arrIterator.next(); {value:3,done:false};
arrIterator.next(); {value:4,done:true};
```
## entries : 
retorna um par chave valor para cada elemento do array 
```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.values();
arrIterator.next(); {value:[0,1],done:false};
arrIterator.next(); {value:[1,2],done:false};
arrIterator.next(); {value:[2,3],done:false};
arrIterator.next(); {value:[3,4],done:true};
```
## Buscar elementos 

## find 
Retorna o primeiro item de um array que satisfaz uma condição 
```Javascript
const arr = [1,2,3,4];  
const firstGreatherThanTwo = arr.find (value => value > 2) ; /// 3 

```

## findIndex 
Retorna o indice do primeiro item de um array que satisfaz uma condição 
```Javascript
const arr = [1,2,3,4];  
const firstGreatherThanTwo = arr.findIndex (value => value > 2) ; /// 2
```

## filter
 Retorna um array com todos os elementos que satisfazem uma condição 
```Javascript
const arr = [1,2,3,4];  
const allValuesGreatherThanTwo = arr.filter (value => value > 2) ; /// [3,4]

```

## indexOf 
Retorna o primeiro índice em que um elemento pode ser encontrado em um array 
```Javascript
const arr = [1,3,3,4,3];  
const firstIndexOfItem = arr.indexOf(3); /// 1

```

## lastIndexOf 
Retorna o ultimo índice em que um elemento pode ser encontrado em um array 
```Javascript

const arr = [1,3,3,4,3];  
const firstIndexOfItem = arr.indexOf(3); /// 4
```

## includes 
Retorna um booleano verificando se determinado elemento existe no array 
```Javascript
const arr = [1,3,3,4,3];  
const hasItemOne = arr.includes(1); /// true 
const hasItemTwo = arr.includes(2); /// false 

```
## some 
Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição 
```Javascript
const arr = [1,3,3,4,3];  
const hasSomeEvenNumber = arr.some (value => value % 2 ===0 ) ; /// true
```
## some 
Retorna um booleano verificando se todos os itens de um array satisfazem uma condição 
```Javascript
const arr = [1,3,3,4,3];  
const allEvenNumbers = arr.every (value => value % 2 ===0 ) ; /// false
```

## some 
Retorna um booleano verificando se todos os itens de um array satisfazem uma condição 
```Javascript
const arr = [1,3,3,4,3];  
const allEvenNumbers = arr.every (value => value % 2 ===0 ) ; /// false
```
## sort 
ordenacao de acordo com condição 
```Javascript
students.sort((current,next) => current.grade - next.grade) /// ordena do menor pro maior 
students.sort((current,next) => next.grade - current.grade) /// ordena do maior pro menor 
```
## reverse 
inverte o array 
```Javascript
const arr = [1,2,3,4,5];  
arr.reverse(); /// [5 , 4 , 3 , 2 , 1]
```
## join 
transformando um array em outro tipo de dados 
join junta todos os elementos de um array separados por um delimitar e retorna uma string 
```Javascript
const arr = [1,2,3,4,5];  
arr.join('-'); /// "1-2-3-4-5"
```
## reduce
Retorna um novo tipo de dado iterando cada posicao de um array 
```Javascript
const arr = [1,2,3,4,5];  
arr.reduce ((total,value)=> total+= value, 0); /// para cada item executa afuncao o primeiro arg eh o retorno comeca com um inteiro com valor 0 
```

## Escopo 

Variables which are used without the var keyword are automatically created in the global scope.(mesmo dentro de funções)
var dentro de função cria uma variavel com escopo local
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

## Undefined 
se uma função nao retorna nada , seu retorno é undefined. 
=== compara valor e tipo 

### /// switch case faz === nas comparações 
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
### Retornando undefined
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

### /// desafio da musica 

```javascript

// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  
  if (value=="" && collection[id].hasOwnProperty(prop))  /// se value for vazio delete e tiver a prop 
    delete collection[id][prop]; /// remove a prop 

  if (prop!="tracks" && value!="")  /// se prop nao for track e value nao estiver vazia 
  {
      collection[id][prop]=value; 
  }
  if (prop=="tracks" && value!="")  /// se prop for tracks e value nao estiver vazia 
  {
    if (!collection[id].hasOwnProperty(prop)) /// se nao tem tracks 
    collection[id][prop]=[value]; /// cria e inicializa 
    else /// se jah tem tracks 
    collection[id][prop].push(value); /// pusha value para o  final de tracks 
  }
  return collection;
}

//updateRecords(5439, "tracks", "Take a Chance on Me")
//updateRecords(2548, "tracks", "")
console.log (collection);
```


### gerar numero entre dois intervalos excluindo o max  
```Javascript
function randomRange(myMin, myMax) {
  // Only change code below this line
  
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  
  // Only change code above this line
}
```



### parseInt ,
Em outras bases The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
```Javascript
function convertToInteger(str,radix) {
  return parseInt(str,radix);
}
convertToInteger("10011",2); /// converte a string para um inteiro na base binaria 


```

###  a função recursiva 

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



## ES6

#  Javascript algorithms and data Structues certification 
Cursando o Javascript algorithms and data Structues certification 
## ES6 let e var 
let foi introduzido no Es6 para evitar os problemas da variável pública var a variable with the same name can only be declared once

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

## ES6 const

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
trying to reassign a variable declared with const will throw an error. 
A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.Pode mudar cada elemento mas nao pode mudar o vetor inteiro 

"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

## ES6 Object.freeze
To ensure your data doesn't change, JavaScript provides a function Object.freeze(nome_objeto) to prevent data mutation.


## ES6 arrow function 
Nova Sintaxe que permite simplificar a declaração de funções. magic recebe o resultado da função ou seja uma data. 

const magic = () => {
  "use strict";
  return new Date();
};

Quando a função nao tem corpo pode-se omitir o return 
const myFunc = () => "value"; 

## Argumentos em uma arrow function : 

// doubles input value and returns it
const doubler = (item) => item * 2;

// the same function, without the argument parentheses
const doubler = item => item * 2;

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;

### parametro default em arrow functions 
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

### parametro rest em arrow functions 

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.


const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
} 


### Operador Spread : 
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

const spreaded = ...arr; // will throw a syntax error

/// copia todo conteudo de arr1 em arr2 
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

### correspondecia desestruturante Destructuring Assignment
Extrai informações de um objeto de maneira visualmente limpa
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

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


### Destructuring Assignment mudando o nome da variavel ao usar Destructuring Assigment

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today:highToday,tomorrow:highTomorrow}= HIGH_TEMPERATURES;

// Only change code above this line

### Destructuring Assignment variáveis vindas de um objeto encapsulado 

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

### Destructuring Assignment variáveis vindas de um array

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5


let a = 8, b = 6;
// Only change code below this line

[b,a] = [a,b]; 

### Usando Destructuring com parametro rest para redesignar variaveis 

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

The rest element only works correctly as the last variable in the list.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  
  const  [,,...arr]= list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

### Use Destructuring Assignment to Pass an Object as a Function's Parameters

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}

ou ainda 
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}

Use destructuring assignment within the argument to the function half to send only max and min inside the function.

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


### Create Strings using Template Literals
A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.


Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.

### 
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

## ES6: Write Concise Object Literal Declarations Using Object Property Shorthand


ES6 adds some nice support for easily defining object literals.

Consider the following code:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

const getMousePosition = (x, y) => ({ x, y });


## ES6: Write Concise Declarative Functions with ES6

When defining functions within objects in ES5, we have to use the keyword function as follows:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};


With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};


## ES6: Use class Syntax to Define a Constructor Function

ES6 provides a new syntax to create objects, using the class keyword. It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

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

It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
Notes:

UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

## ES6: Use getters and setters to Control Access to an Object

You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.


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
Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.



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

## ES6: Create a Module Script 
utilizando um script 

<html>
  <body>
    <!-- Only change code below this line -->
  <script type="module" src="filename.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>

ES6: Use export to Share a Code Block
Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

export const add = (x, y) => {
  return x + y;
}
The above is a common way to export a single function, but you can achieve the same thing like this:

const add = (x, y) => {
  return x + y;
}

export { add };
When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

export { add, subtract };


const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase();
}

export { uppercaseString,lowercaseString };

## ES6: Reuse JavaScript Code Using import

import { add, subtract } from './math_functions.js';


## ES6: Use * to Import Everything from a File

import * as myMathModule from "./math_functions.js";

## ES6: Create an Export Fallback with export default

you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}

There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const


## ES6: Import a Default Export

import add from "./math_functions.js";

The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

## ES6: Create a JavaScript Promise

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});


## ES6: Complete a Promise with resolve and reject

A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");// Change this line
  } else {  
    reject("Data not received");// Change this line
  }
});


## ES6: Handle a Fulfilled Promise with then

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

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

## ES6: Handle a Rejected Promise with catch

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















## ES6 Avancado 
## CSS
## ReactJs
## SCRUM
## DDD e Padrões de Arquitetura 
## Docker 
## BootStrap 
## node JS 
## TDD e BDD 
## Node JWT 
## REdis 
## Node Hapi 
## Node Mongoose 

