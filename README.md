# Resumo dos meus Estudos !

---

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

### Criando arrays

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

### slice

Imutável Fatia o array

```Javascript
const arr = [1,2,3,4,5];  
Arr.slice(0,2); // [1,2]
Arr.slice(2); // [3,4,5]
Arr.slice(-1); // [5]
Arr.slice(-3); // [3,4,5]
```

### splice

Não é imutavel, Altera o array adicionando novos elementos enquanto remove elementos antigos

```Javascript
const arr = [1,2,3,4,5];  
Arr.splice(2); // remove a partir da posicao 2 [3,4,5] 
console.log(arr); /// [1,2]
Arr.splice(0,0,'first'); // [] /// inicio, quanto itens remove o que adicionar a partir da primeira posicao 
console.log(arr); /// ["fisrt",1,2]; 

```

### map

Retorna um novo array de mesmo tamanho iterando cada item de um array

```Javascript
const arr = [1,2,3,4,5];  
arr.map (value => value *2); // retorna um novo array [2,4,6,8,10]

```

### flat

Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth)

```Javascript
const arr = [1,2,[3,4]];  
arr.flat(); // retorna um novo array com profundidade 1 [1,2,3,4]
arr.flat(2); // retorna um novo array com profundidade 2 , neste caso não terá diferenca mas se houvessem outros arrays dentro de arr só iria até a segunda camanda de arr 

```

### flatMap

Retorna um novo array assim como faz a função map e executa um flat de profundidade 1

```Javascript
const arr = [1,2,3,4];  
arr.flatMap (value => [value *2]); // retorna um novo array [2,4,6,8]
arr.flatMap (value => [[value *2]]); // retorna um novo array [[2],[4],[6],[8]]
```

### keys

retorna um array iterator que contem as chaves para cada elemento do array

```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.keys();
arrIterator.next(); {value:0,done:false};
arrIterator.next(); {value:1,done:false};
arrIterator.next(); {value:2,done:false};
arrIterator.next(); {value:3,done:true};
```

### values

retorna um array iterator que contém os valores para cada elemento do array

```Javascript
const arr = [1,2,3,4];  
const arrIterator = arr.values();
arrIterator.next(); {value:1,done:false};
arrIterator.next(); {value:2,done:false};
arrIterator.next(); {value:3,done:false};
arrIterator.next(); {value:4,done:true};
```

### entries

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

### find

Retorna o primeiro item de um array que satisfaz uma condição

```Javascript
const arr = [1,2,3,4];  
const firstGreatherThanTwo = arr.find (value => value > 2) ; /// 3 

```

### findIndex

Retorna o indice do primeiro item de um array que satisfaz uma condição

```Javascript
const arr = [1,2,3,4];  
const firstGreatherThanTwo = arr.findIndex (value => value > 2) ; /// 2
```

### filter

Retorna um array com todos os elementos que satisfazem uma condição

```Javascript
const arr = [1,2,3,4];  
const allValuesGreatherThanTwo = arr.filter (value => value > 2) ; /// [3,4]

```

### indexOf

Retorna o primeiro índice em que um elemento pode ser encontrado em um array

```Javascript
const arr = [1,3,3,4,3];  
const firstIndexOfItem = arr.indexOf(3); /// 1

```

### lastIndexOf

Retorna o ultimo índice em que um elemento pode ser encontrado em um array

```Javascript

const arr = [1,3,3,4,3];  
const firstIndexOfItem = arr.indexOf(3); /// 4
```

### includes

Retorna um booleano verificando se determinado elemento existe no array

```Javascript
const arr = [1,3,3,4,3];  
const hasItemOne = arr.includes(1); /// true 
const hasItemTwo = arr.includes(2); /// false 

```

### some

Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

```Javascript
const arr = [1,3,3,4,3];  
const hasSomeEvenNumber = arr.some (value => value % 2 ===0 ) ; /// true
```

### every

Retorna um booleano verificando se todos os itens de um array satisfazem uma condição

```Javascript
const arr = [1,3,3,4,3];  
const allEvenNumbers = arr.every (value => value % 2 ===0 ) ; /// false
```

### sort

ordenacao de acordo com condição

```Javascript
students.sort((current,next) => current.grade - next.grade) /// ordena do menor pro maior 
students.sort((current,next) => next.grade - current.grade) /// ordena do maior pro menor 
```

### reverse

inverte o array

```Javascript
const arr = [1,2,3,4,5];  
arr.reverse(); /// [5 , 4 , 3 , 2 , 1]
```

### join

transformando um array em outro tipo de dados
join junta todos os elementos de um array separados por um delimitar e retorna uma string

```Javascript
const arr = [1,2,3,4,5];  
arr.join('-'); /// "1-2-3-4-5"
```

### reduce

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

/// desafio da musica

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

```### parseInt ,

Em outras bases The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

```Javascript
function convertToInteger(str,radix) {
  return parseInt(str,radix);
}
convertToInteger("10011",2); /// converte a string para um inteiro na base binaria 


```

### a função recursiva

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

Regular Expressions: Remove Whitespace from Start and End
Seleciona e remove um texto do inicio e final de uma string

```Javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log (result);

```

### Scripts Interessantes

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

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```


```

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

### Javascript algorithms and data Structues certification

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

ex: const name = 'A'; name = 'B'; /// nao consigo alterar

const user = { name : 'A'; }; user.name = 'B' ; /// consigo alterar

user = { name : 'B'; }; /// nao dá certo

Tipos e variáveis
Obs : Retorna typeof retorna o tipo da variável

####string = texto

lenght,replace(procura e muda) ,slice (fatia da string), substr
tipo : https://www.w3schools.com/js/js_strings.asp métodos : https://www.w3schools.com/js/js_string_methods.asp Conversão : parseFloat (com casas decimais) parseInt (sem casas decimais)

number = numero (int, float,NAN etc... )
tipo : https://www.w3schools.com/js/js_numbers.asp métodos : https://www.w3schools.com/js/js_number_methods.asp

boolean = true ou false ,
null = nulo -> null sempre é object.(typeof null retorna object)
undefined= existe mas nao foi inicializada. Undefined é um tipo e não um object. (typeof undefined retorna undefined)
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

function = também é um objeto , mas que pode ser chamado array = um objeto que tem relação com os itens dele , relacionando cada item com o tipo atribuido

// symbol cria um tipo unico

Permite atributos privados dentro de objetos e classes, simulando um objeto do tipo enum. Não é enumerable (isso é vc nao consegue enumerar ela como uma chave dentro de um for)

ex da propriedade enumerable :

for (const key in user ){ if (user.hasOwnProperty(key)){ console.log(${key}) /// so mostra as chaves que nao sao symbols }

}

/// pode ser contornado pela função get.OwnPropertySymbols() /// ai o for consegue listar

ou também pode ser usado o método Reflect.ownKeys(user); /// o metodo reflect consegue forçar a listagem de symblos

ex1) const symbol1 = Symbol(); const symbol2 = Symbol();

symbol1 === symbol2 ; / / retorna falso , cada um tem um tipo unico

ex2) const symbol1 = Symbol('name'); const symbol2 = Symbol('name');

const user = { [symbol1]: 'ABC', [symbol2]: 'DEF', } /// vc nao consegue sobrescrever essa propriedade mesmo elas tendo o mesmo atributo (name), ele vai criar dois symbols com name

### Aula2.1 Tipos e variáveis

Obs : Retorna typeof retorna o tipo da variável

### string = texto

### lenght,replace(procura e muda) ,slice (fatia da string), substr

tipo :
https://www.w3schools.com/js/js_strings.asp
métodos :
https://www.w3schools.com/js/js_string_methods.asp
Conversão :
parseFloat (com casas decimais)
parseInt  (sem casas decimais)

### number = numero (int, float,NAN etc... )

tipo :
https://www.w3schools.com/js/js_numbers.asp
métodos :
https://www.w3schools.com/js/js_number_methods.asp

### boolean = true ou false ##### null = nulo  -> null sempre é object.(typeof null retorna object)

### undefined= existe mas nao foi inicializada. Undefined é um tipo e não um object. (typeof undefined retorna undefined)

### object =

ex:
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

### funções de object:

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

### symbol cria um tipo unico

Permite atributos privados dentro de objetos e classes, simulando um objeto do tipo enum.  Não é enumerable (isso é vc nao consegue enumerar ela como uma chave dentro de um for)

ex da propriedade enumerable :

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

### Aula 2.2 Functions_Operators

#### ES 6 Arrow function

// ES5
var x = function(x, y) {
return x * y;
}

// ES6
const x = (x, y) => x * y;   /// se colocar mais de uma expressão tem que colocar o return

const x = (x, y) => { return x * y };  /// boa pratica colocar return sempre

#### Funções também são objetos e podem receber propriedades !

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

Criado no Es6 como uma simplificação de protótipos , uma supersintaxe de funções , por baixo
dos panos é criado um prototype

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

### Orientação a objetos e desing patterns

DP são soluções gerais para problemas recorrentes em desenvolvimento de um software
Não se trata de um framework ou um código , mas uma definiçao de alto nivel de como um problema pode ser solucionado

Pattern Languange -> 1978 Christopher Alexander Sara , Murray  253 tipos de problemas / desafios de projetos

formato de um patterns :

Nome, Exemplo, contexto , problema, solução.

1987 kent e ward 5 padroes de projetos ->

1994 Gof Erich, Richard , Ralph John  DP Elements of Reusable OO Software -> Tipos Criação , estruturais e comportamentais

Padroes de criação : abstraem e / ou adiam o processo de criação dos objetos , tornamm o sistema independete de como seus objetos são criados , compostos e representados
mais famosos :
Abstract Factory
Builder
Factory Method
Prototype
Singleton

Padroes esttruturais :

Se preocupam com a forma como classes e objetos sao compostos para formar estruturas maiores : Adapter, Bridge, Composite, Decorator , Facade , Business Delegate , Flyweight, Proxy

Padroes Comportamentais :
Algoritmos e atribuições de responsabilidades entre os objetos, não descrevem apenas padroes classe se objetos , mas tb de comunicação entre os objetos : Chain of Responsibility , Command, Interpreter , Iterator, Mediator , Observer , State, Strategy , Template Method e visitor

Patterns mais usados em Js : Factory , Singleton , Decorator , Observer e Module

Factory > Funções que retornam um objeto sem a necessidade de chamalas com new são consideradas factory

Singleton > cria um unica instancia de uma funcao construtora e retorna-la toda vez que for necessário utilizala (ex: JQuery) , mesmo que você crie uma nova instancia , ela sempre retornará o mesmo valro

Decorator > Uma funcão que recebe outra função como parametro e altera seu comportamento sem modifica-la explicitamente

Observer >  A instancia (subscriber) mantem uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças de estado (no VUE a propriedade notify ,toda vez que há uma mudança de estado quem estiver escutando será notificado ) manter uma lista no observer , criar uma função subscribe , outra unsubscribe e notify

Mdoule > Permite organizar o corido sem a necessidade de expor variáveis globais No ES6 (export default)

### ES6 let e var

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

### ES6 const

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.
trying to reassign a variable declared with const will throw an error.
A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.Pode mudar cada elemento mas nao pode mudar o vetor inteiro

"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

### ES6 Object.freeze

To ensure your data doesn't change, JavaScript provides a function Object.freeze(nome_objeto) to prevent data mutation.

### ES6 arrow function

Nova Sintaxe que permite simplificar a declaração de funções. magic recebe o resultado da função ou seja uma data.

const magic = () => {
"use strict";
return new Date();
};

Quando a função nao tem corpo pode-se omitir o return
const myFunc = () => "value";

#### Argumentos em uma arrow function :

// doubles input value and returns it
const doubler = (item) => item * 2;

// the same function, without the argument parentheses
const doubler = item => item * 2;

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;

#### parametro default em arrow functions

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
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

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

### ES6: Write Concise Object Literal Declarations Using Object Property Shorthand

ES6 adds some nice support for easily defining object literals.

Consider the following code:

const getMousePosition = (x, y) => ({
x: x,
y: y
});
getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

const getMousePosition = (x, y) => ({ x, y });

### ES6: Write Concise Declarative Functions with ES6

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

### ES6: Use class Syntax to Define a Constructor Function

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

### ES6: Use getters and setters to Control Access to an Object

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

### ES6: Create a Module Script

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

### ES6: Reuse JavaScript Code Using import

import { add, subtract } from './math_functions.js';

### ES6: Use * to Import Everything from a File

import * as myMathModule from "./math_functions.js";

### ES6: Create an Export Fallback with export default

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

### ES6: Import a Default Export

import add from "./math_functions.js";

The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

### ES6: Create a JavaScript Promise

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});

### ES6: Complete a Promise with resolve and reject

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

### ES6: Handle a Fulfilled Promise with then

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

### ES6: Handle a Rejected Promise with catch

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
