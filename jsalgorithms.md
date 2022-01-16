```

Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

```JS
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

```

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

Troca um letra maiuscula por espaço mais a letra

```JS
  str = 'thisIsSpinalTap'; 
  let s = str.replace(/([A-Z])/g, ' $1');
  console.log(s); ///this Is Spinal Tap
```

As you can see, the replace method acts on a string and returns a string. It takes two parameters: the string to be replaced and with what it will be replaced.

The first parameter can be either a string or a regular expression. Here we can use the power of regular expressions to replace complex search patterns with some string.

The second parameter could also be a function. To demonstrate it, let's check out an example:

```JS

var str = "This is a test string";

var newStr = str.replace(/\w+/g, function(match) {
 return match.split("").reverse().join("");
});

console.log(newStr);    //prints "sihT si a tset gnirts"

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

### Scripts Prontos

Cria grupos sequenciais de tamanho n em um vetor

```Js
function chunkArrayInGroups(arr, size) {
  let arr2 = [];
  for (let i = 0 ; i < arr.length; i=i+size )
  {
    arr2.push(arr.slice(i, i+size));
  }   
  return arr2;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); /// [[0,1,2,3] ,[4,5,6,7],[8]] 
```

// Remove todos os negativos
//  separa todos os impares em um numero par +1

```Js
let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// expected output: [4, 1, 4, 20, 16, 1, 18]
```

Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

Passed
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
Passed
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
Passed
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
Passed
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
Passed
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
Passed
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

```JS

function dropElements(arr, func) {
  let saida = [];

  
  for (let i=0; i<arr.length; i ++ )  {
    if(func(arr[i])) {
      saida= arr.slice(i,arr.length);
      return saida ;  
    }  
  }   
return saida; 
}



dropElements([1, 2, 3], function(n) {return n < 3; });
```

Validador de telefone
JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Passed
telephoneCheck("555-555-5555") should return a boolean.

Passed
telephoneCheck("1 555-555-5555") should return true.

Passed
telephoneCheck("1 (555) 555-5555") should return true.

Passed
telephoneCheck("5555555555") should return true.

Passed
telephoneCheck("555-555-5555") should return true.

Passed
telephoneCheck("(555)555-5555") should return true.

Passed
telephoneCheck("1(555)555-5555") should return true.

Passed
telephoneCheck("555-5555") should return false.

Passed
telephoneCheck("5555555") should return false.

Passed
telephoneCheck("1 555)555-5555") should return false.

Passed
telephoneCheck("1 555 555 5555") should return true.

Passed
telephoneCheck("1 456 789 4444") should return true.

Passed
telephoneCheck("123**&!!asdf#") should return false.

Passed
telephoneCheck("55555555") should return false.

Passed
telephoneCheck("(6054756961)") should return false

Passed
telephoneCheck("2 (757) 622-7382") should return false.

Passed
telephoneCheck("0 (757) 622-7382") should return false.

Passed
telephoneCheck("-1 (757) 622-7382") should return false

Passed
telephoneCheck("2 757 622-7382") should return false.

Passed
telephoneCheck("10 (757) 622-7382") should return false.

Passed
telephoneCheck("27576227382") should return false.

Passed
telephoneCheck("(275)76227382") should return false.

Passed
telephoneCheck("2(757)6227382") should return false.

Passed
telephoneCheck("2(757)622-7382") should return false.

Passed
telephoneCheck("555)-555-5555") should return false.

Passed
telephoneCheck("(555-555-5555") should return false.

Passed
telephoneCheck("(555)5(55?)-5555") should return false.

```JS
function telephoneCheck(str) {
  let regexes =[];
  
  regexes.push(/^([0-9]{3}-)[0-9]{3}-[0-9]{4}$/);///sem parentesis 555-555-5555
  regexes.push(/^[1]{1} [0-9]{3}-[0-9]{3}-[0-9]{4}$/);///um na frente e sem parentesis 1 555-555-5555
  regexes.push(/^[1]{1} \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/);///um na frente e com  parentesis 1 (555)-555-5555
  regexes.push(/^[0-9]{10}$/);///seguidos
  regexes.push(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/);///com tracos 555-555-5555
  regexes.push(/^(\([0-9]{3}\))[0-9]{3}-[0-9]{4}$/);///com parentesis (555)555-5555
  regexes.push(/^[1]{1}\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/);///um na frente e com  parentesis 1(555)555-5555 sem espaco 
  regexes.push(/^[1]{1} [0-9]{3} [0-9]{3} [0-9]{4}$/);///um na frente e sem parentesis e sem traco 1 555 555 5555
  
  

  
  //console.log(regexes[0].test(str));
  
  let saida = regexes.some(e => 
    e.test(str)
  );
  console.log(saida);
  return saida ;
}

function programa()
{
        //console.log(
          telephoneCheck("555-555-5555");
          telephoneCheck("1 555-555-5555");
          telephoneCheck("1 (555) 555-5555");
          telephoneCheck("5555555555");
          telephoneCheck("555-555-5555");
          telephoneCheck("(555)555-5555");
          telephoneCheck("1(555)555-5555");
          telephoneCheck("555-5555");
          telephoneCheck("5555555");
          telephoneCheck("1 555)555-5555")
          telephoneCheck("1 555 555 5555")
          telephoneCheck("1 456 789 4444")
          telephoneCheck("2 (757) 622-7382")
          telephoneCheck("2 757 622-7382")
        //);
 } 

```

Scripting: Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Passed
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

Passed
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

```JS
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.forEach(element => {
    if (element.hasOwnProperty("avgAlt"))
      {
        var c = Math.pow(earthRadius + element.avgAlt, 3);
        var b = Math.sqrt(c / GM);
        let pre = 2.0*Math.PI;
        let T = Math.round(pre * b);
        delete element["avgAlt"];
        element["orbitalPeriod"]=T;
      }
  });
  
  return arr;
}



function programa()
{
      console.log(
        orbitalPeriod([{name: "iss", avgAlt: 413.6}, 
        {name: "hubble", avgAlt: 556.7}, 
        {name: "moon", avgAlt: 378632.553}]) 
      );
} 

```

JavaScript Algorithms and Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Passed
palindrome("eye") should return a boolean.

Passed
palindrome("eye") should return true.

Passed
palindrome("_eye") should return true.

Passed
palindrome("race car") should return true.

Passed
palindrome("not a palindrome") should return false.

Passed
palindrome("A man, a plan, a canal. Panama") should return true.

Passed
palindrome("never odd or even") should return true.

Passed
palindrome("nope") should return false.

Passed
palindrome("almostomla") should return false.

Passed
palindrome("My age is 0, 0 si ega ym.") should return true.

Passed
palindrome("1 eye for of 1 eye.") should return false.

Passed
palindrome("0_0 (: /-\ :) 0-0") should return true.

Passed
palindrome("five|_/|four") should return false.

```JS
function palindrome(str) {
   let saida =  formata(str);
  //console.log(saida)   
  let norm = saida.join(""); 
  let inv = saida.reverse().join("");
  return (norm===inv);
}


function formata(texto){
            let entrada = (texto.trim());
            let ent1=entrada.normalize().replace(/ +/g,"")
            let ent2=ent1.toLocaleLowerCase();  
            let ent3 = ent2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
            let arr = ent3.split("");
            return (arr);
}

function programa()
{

      console.log(
        palindrome("A man, a plan, a canal. Panama")
      );
 } 


```

JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Passed
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP

Passed
rot13("SERR CVMMN!") should decode to FREE PIZZA!

Passed
rot13("SERR YBIR?") should decode to FREE LOVE?

Passed
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

```JS


function soma13 (val){
  if ((val+13)>90){
    return ((val-13));
  }
  else 
    return (val+13);
}


function rot13(str) {
  let saida=[];
  let arr = str.split("");
  //console.log(arr);
  let atual;
  for (let i = 0; i < arr.length ; i++) 
      {
      
        if (arr[i].match(/[.?,\/#!$%\^&\*;:{}=\-_`~() ]/g))
        {
          saida.push(arr[i]);  
        }
        else {
          atual = arr[i].charCodeAt(0);
          saida.push(String.fromCharCode(soma13(atual)));  
        }
      }
return saida.join("");
}

console.log(rot13("SERR YBIR?"));
```

Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Passed
addTogether(2, 3) should return 5.
Passed
addTogether(23, 30) should return 53.
Passed
addTogether(5)(7) should return 12.
Passed
addTogether("http://bit.ly/IqT6zt") should return undefined.
Passed
addTogether(2, "3") should return undefined.
Passed
addTogether(2)([3]) should return undefined.

```JS
function ehNumero (ent){
  return (typeof (ent)==='number');
}
function addTogether(){
      let x = arguments[0];
      let y = arguments[1];
    if (!ehNumero(arguments[0])) return undefined;
    if ((arguments[1]) && !ehNumero(arguments[1])) return undefined;
    if (arguments[1] && ehNumero(x) && ehNumero(y))
    {
      return (x+y);
    }
    else 
    {
        return  function(y)
          {
            if(ehNumero(y)) return x + y;
          }
    }
};

function programa()
{
   
   
     console.log(addTogether(2, 3));
     console.log(addTogether(23, 30));
     console.log(addTogether(5)(7));///IIFE
     console.log(addTogether("http://bit.ly/IqT6zt") );
     console.log(addTogether(2, "3"));
     console.log(addTogether(2)([3]));
   
} 

```

JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Passed
convertToRoman(2) should return "II".

Passed
convertToRoman(3) should return "III".

Passed
convertToRoman(4) should return "IV".

Passed
convertToRoman(5) should return "V".

Passed
convertToRoman(9) should return "IX".

Passed
convertToRoman(12) should return "XII".

Passed
convertToRoman(16) should return "XVI".

Passed
convertToRoman(29) should return "XXIX".

Passed
convertToRoman(44) should return "XLIV".

Passed
convertToRoman(45) should return "XLV"

Passed
convertToRoman(68) should return "LXVIII"

Passed
convertToRoman(83) should return "LXXXIII"

Passed
convertToRoman(97) should return "XCVII"

Passed
convertToRoman(99) should return "XCIX"

Passed
convertToRoman(400) should return "CD"

Passed
convertToRoman(500) should return "D"

Passed
convertToRoman(501) should return "DI"

Passed
convertToRoman(649) should return "DCXLIX"

Passed
convertToRoman(798) should return "DCCXCVIII"

Passed
convertToRoman(891) should return "DCCCXCI"

Passed
convertToRoman(1000) should return "M"

Passed
convertToRoman(1004) should return "MIV"

Passed
convertToRoman(1006) should return "MVI"

Passed
convertToRoman(1023) should return "MXXIII"

Passed
convertToRoman(2014) should return "MMXIV"

Passed
convertToRoman(3999) should return "MMMCMXCIX"

```JS
function decToRoman(B1,B2,B3,val)
{
  var answer = "";
  // Only change code below this line
  switch (val){
    case 1:
    answer=B1;
    break;
    case 2:
    answer=B1+B1;
    break;
    case 3:
    answer=B1+B1+B1;
    break;
    case 4:
    answer=B1+B2;
    break;
    case 5:
    answer=B2;
    break;
    case 6:
    answer=B2+B1;
    break;
    case 7:
    answer=B2+B1+B1;
    break;
    case 8:
    answer=B2+B1+B1+B1;
    break;
    case 9:
    answer=B1+B3;
    break;
    default:
    answer="";
    break;
  }
  // Only change code above this line
  return answer;
}

function convertToRoman(num) {
  
  let b= [
        "I","V","X",
        "X","L","C",
        "C","D","M",
        "M","Vbar","Lbar"];
  let arr = num.toString().split("");
  let arrRev = arr.reverse();
  let saida =[];
  arrRev.forEach( (e,i) => {
    let eInt=parseInt(e);
    if (i===0) saida.push(decToRoman(b[0],b[1],b[2],eInt));
    if (i===1) saida.push(decToRoman(b[3],b[4],b[5],eInt)) ;
    if (i===2) saida.push(decToRoman(b[6],b[7],b[8],eInt)) ;
    if (i===3) saida.push(decToRoman(b[9],b[10],b[11],eInt)) ;
  });
  return(saida.reverse().join(""));
}


function programa()
{
        console.log(
        convertToRoman(1000)
        );
 } 
```

Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

Achatando um vetor sem usar flat

```Js
function achatarMais(arr){
   return arr.reduce((acc, val) => 
   Array.isArray(val) ? 
   acc.concat(achatarMais(val)) : 
   acc.concat(val), []);
};


function steamrollArray(arr) {
  let saida = achatarMais(arr);
  return saida;
}


function programa()
{
   console.log(
     steamrollArray([1, [2], [3, [[4]]]])
   );
} 
```

Intermediate Algorithm Scripting: Make a PersonPassed
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

Object.keys(bob).length should return 6.

bob instanceof Person should return true.

bob.firstName should return undefined.

bob.lastName should return undefined.

bob.getFirstName() should return "Bob".

bob.getLastName() should return "Ross".

bob.getFullName() should return "Bob Ross".

bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").

bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").

bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").

bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").

bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").

```JS
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var nomeCompleto = firstAndLast;
  this.getFullName = function() {
    return nomeCompleto ;
  }

  this.getFirstName =  function() {
    return (nomeCompleto.split(" ")[0]);
  }
  this.getLastName =  function() {
    return (nomeCompleto.split(" ")[1]);
  }
  
  this.setFirstName= function (first) 
  {
    nomeCompleto= first + " " + nomeCompleto.split(" ")[1];
  }

  this.setLastName = function (last)
  {
    nomeCompleto= nomeCompleto.split(" ")[0] + " " + last;
  }

  
  this.setFullName = function (firstAndLast)
  {
    nomeCompleto = firstAndLast;
  }
};


var bob = new Person('Bob Ross');
bob.getFullName();
console.log(Object.keys(bob).length);




function programa()
{
   
   
     console.log(
       bob.getFullName()
     )
     ;
   
} 


    // cidfunc[0][1]*0.01+
    // cidfunc[1][1]*0.05+
    // cidfunc[2][1]*0.1+
    // cidfunc[3][1]*0.25+
    // cidfunc[4][1]*1.0+
    // cidfunc[5][1]*5.0+
    // cidfunc[6][1]*10.0+
    // cidfunc[7][1]*20.0;


```

Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

addTogether(2, 3) should return 5.
addTogether(23, 30) should return 53.
addTogether(5)(7) should return 12.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.

```JS

```

Intermediate Algorithm Scripting: Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

Passed
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
Passed
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
Passed
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
Passed
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false
Passed
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true
Passed
truthCheck([{"single": "yes"}], "single") should return true
Passed
truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
Passed
truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
Passed
truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false

```JS


function truthCheck(collection, source) {
    let bool = collection.every ( 
      item =>  
        (item.hasOwnProperty(source) 
    ));  /// checa se todos tem a propriedade
    if (!bool) return bool; /// se algum nao tiver para
    /// verificar se cada argumento apos 
    // ser traduzido é verdadeiro 
  return collection.every(e=>(e[source]?true:false));
}


function programa()
{
   console.log(
    truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, 
    {"user": "Dipsy", "sex": "male", "age": 3}, 
    {"user": "Laa-Laa", "sex": "female", "age": 5}, 
    {"user": "Po", "sex": "female", "age": 4}], "age")
   );
} 

```

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
Passed
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"

```JS
function binToChar(val)
{
  return String.fromCharCode(parseInt(val,2));
}

function binaryAgent(str) {
  let arr= str.split(" ");
  return arr.reduce( (acc,val) => 
      acc.concat(binToChar(val))  
     ,[]
  ).join("");
}
function programa()
{
   console.log(
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
   );
} 
```

Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
Passed
convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
Passed
convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
Passed
convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
Passed
convertHTML("Schindler's List") should return "Schindler&apos;s List".
Passed
convertHTML("<>") should return "&lt;&gt;".
Passed
convertHTML("abc") should return "abc".

```Js

Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.

///verifica se todos sao multiplos do valor atual
function verificaMMCArr (arr,valatual){
 return arr.every(function(currentValue) {
    return (valatual %currentValue === 0);
  });
}

function smallestCommons(arr) {
  let ordenado = arr.sort((current,next) =>  current - next);  
  let todosValOrd=[];
  
  for (let i = ordenado[0];i<=ordenado[1];i++)
  {
    todosValOrd.push(i);
  }
  
  let val=ordenado[1];

  do 
  {
    if (verificaMMCArr(todosValOrd,val))
      return val ; 
    else 
      val++
  }while(val<Number.MAX_SAFE_INTEGER);
}
```

```JS

function convertHTML(str)
{
  let trocas = [
        {'&':'&'},
        {'<':'<'},
        {'>':'>'},
        {'"':'"'},
        {"'":'''},
        ];
      return trocas.reduce((accum,par) => 
        accum.replace(new RegExp(Object.keys(par)[0],'g'),par[Object.keys(par)[0]]),str);
        ///acumula todas as alterações do regex no str de saida 
}
convertHTML("Dolce & Gabbana");
```

Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

```Js
function sumFibs(num) {
  let fibbo = [1,1];
  let i=1;
  while(fibbo[i]<num)
  {
    let fib = fibbo[i]+fibbo[i-1]; 
    if (fib<=num)fibbo.push(fib);
    i++;
  }
  console.log(fibbo);
  return fibbo.reduce((accum,num) => num%2===0?
  accum+0:num+accum,0);
        ///acumula todas as alterações do regex no str de saida 
}

```

Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

```Js
function primo (num){
  if (num===1) return false ; /// 2 
  if (num===2) return true ; /// 2 
  if (num%2===0 ) return false ; /// par 
  ///testar somente até metade 
  let metade = (num/2-0.5); /// inteiro 
  for (let i=3;i<=metade;i++) /// testa só até metade
  {
    if (num%i===0) return false ; 
  }
  return true; /// passou por todos os testes 
}
function sumPrimes(num) {
  let arr=[];
  for (let i=1;i<=num;i++)
  {
    if (primo(i)) arr.push(i);
  }
  //console.log(arr);
  return arr.reduce((accum,num) => num+accum,0);
}

function programa()
{
    console.log(sumPrimes(977));
} 
```

Faz uma verificação de safe HTML

```Js
  function convertHTML(str)
{
  let trocas = [
        {'&':'&'},
        {'<':'<'},
        {'>':'>'},
        {'"':'"'},
        {"'":'''},
        {'`':'`'},
        {'\n':'<br>'},
        {' ':' '}
        ];

      return trocas.reduce((accum,t) => 
        accum.replace(new RegExp(Object.keys(t)[0],'g'),t[Object.keys(t)[0]]),str);
}

```

Verifica se todas as letras da segunda palavra estão presentes na primeira palavra ignorando Case

```Js
function mutation(arr) {
  let pal1= arr[0].toLowerCase();
  let pal2= arr[1].toLowerCase();
  for (let letra of pal2)
  {
    if (!pal1.includes(letra))  return false;
  }
  return true;
}

console.log(mutation(["Alien", "line"])); /// true 
```

Filtra ps elementos em um vetor usando a variável
reservada arguments (algoritmo mutável)

```JS
function destroyer(arr) {
 let alvo=arguments[0];
 for (let i = 1 ; i < arguments.length; i++)
 {
      alvo= alvo.filter( val => val!==arguments[i]);
 }
 arr = alvo; 
 return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

```

Dado um JSON com um número qualquer de keys filtra um segundo vetor para que este
só apresente os valores que tiverem um , ou os dois , ou os tres .... keys
concidentes com o primeiro vetor.

```JS
function whatIsInAName(collection, source) {

  var arr = [];
  // Only change code below this line
  

///ver se tem a propriedade e ver se ela é igual a key 

for (const key in source){
    //console.log(key);
    collection = (collection.filter ( item =>  (item[key]===source[key]) )); 
}
arr = (collection);
  // Only change code above this line
  return arr;
}

/*

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
should return 
[{ first: "Tybalt", last: "Capulet" }].

Passed
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) 
should return 
[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

Passed
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
should return 
[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

Passed
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) 
should return 
[{ "apple": 1, "bat": 2, "cookie": 2 }].

Passed
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) 
should return 
[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

Passed
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) 
should return 
[]

*/
```

Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Passed
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Passed
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Passed
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

```Js
    function achaPar(letra) {
      let saida2 = [];
      let answer = "";
      switch (letra) {
        case "A":
          answer = "T";
          break;
        case "T":
          answer = "A";
          break;
        case "C":
          answer = "G";
          break;
        case "G":
          answer = "C";
          break;
        default:
          answer = "erro";
          break;
      }
      saida2.push(letra);
      saida2.push(answer);
      return saida2;
    }

    function pairElement(str) {
      let saida = []
      let arr = str.split("");
      arr.forEach(letra => saida.push(achaPar(letra)));
      return saida;
    }

pairElement("GCG");

```

Verifica a diferenca entre dois vetores

```JS
function diffArray(arr1, arr2) {
  var newArr = [];
      arr1.forEach( val1 =>  {
        if(!arr2.includes(val1)) 
          newArr.push(val1); 
      } );
      arr2.forEach( val2 =>  {
        if(!arr1.includes(val2)) 
          newArr.push(val2); 
      })
  return newArr;
}
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
 /// [ 1, 'calf', 3, 'piglet', 7, 'filly' ]
```

Retorna o menor indice para inserção de um vetor em outro vetor

```JS
function getIndexToIns(arr, num) {
   let vals = arr.sort((current,next) =>  current - next);  
   let pos = 0 ; 
   for (let val of vals)
   {
      if (val<num) {pos++;} ; 
   }
  return pos;
}
```

Converte para boleano e adiciona no vetor se for true

```JS
function bouncer(arr) {
  let arr2=[];
  for (let val of arr)
  {
    if (Boolean(val))arr2.push(val);
  }
  return arr2;
}

bouncer([7, "ate", "", false, 9]);
```

Insere o vetor um na posicao n do vetor 2

```Js
function frankenSplice(arr1, arr2, n) {
  let arr3=[...arr2];
  arr3.splice(n,0,...arr1);
  return arr3;
}
(frankenSplice([1, 2, 3], [4, 5], 1)); /// [4,1,2,3,5]
```

Coloca cada letra maiuscula no começo de uma sentança

```Js
function titleCase(str) {
  let arr= str.toLowerCase().split(" ");
  let arr2= [];
  for (let pal of arr)
  {
      let letra = pal[0].toUpperCase();
      letra += pal.substr(1,pal.length);
      arr2.push(letra);
      //console.log(arr2);
  }
  str = arr2.join(" ");
  return str;
}

console.log(titleCase("I'm a little tea pot"));
```

Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
fearNotLetter("abce") should return "d".
Passed
fearNotLetter("abcdefghjklmno") should return "i".
Passed
fearNotLetter("stvwx") should return "u".
Passed
fearNotLetter("bcdf") should return "e".
Passed
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

```JS

    function fearNotLetter(str) {
      let saida;
      //console.log(s.length);
      let arr = str.split("");
      let atual, proximo;
      for (let i = 0; i < arr.length - 1; i++) 
      {
        atual = arr[i].charCodeAt(0);
        proximo = arr[i + 1].charCodeAt(0);
        //console.log(atual + " " + proximo);
        if (atual !== proximo - 1)
          return String.fromCharCode(atual + 1);
      }
      return saida;
    }

```

```JS
Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
          let pal = after;
          let saida = "";
         if  (before[0] === before[0].toUpperCase() ) {
          pal =  after[0].toUpperCase().concat(after.slice(1,after.length))
          saida = str.replace(before,pal);
         }
         else {
          after = after.toLowerCase();
          saida = str.replace(before,after);         
         }
          return saida;
}

myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
Passed
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
Passed
myReplace("I think we should look up there", "up", "Down") should return "I think we should look down there".
Passed
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
Passed
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
Passed
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".


```

Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
Passed
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
Passed
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
Passed
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
Passed
spinalCase("AllThe-small Things") should return "all-the-small-things".

```JS
function spinalCase(str) {
  const trim = str.trim();
  const espacoMaiusculas = trim.replace(/([A-Z])/g, ' $1');
  const espacoUnder = espacoMaiusculas.replace(/_/g, ' ');
  const lower = espacoUnder.toLowerCase();
  const sep = lower.split(" ");
  const filtro = sep.filter(item => item !==""); /// filtra espaços vazios
  const junto = filtro.join("-");
  str=junto;
  return str;
}
console.log(spinalCase('The_Andy_Griffith_Show'));
```

Verifica o tipo da variavel

```JS
function booWho(bool) {
  (bool = (typeof bool==="boolean") ?true:false);
  return bool;
}
 console.log(booWho(null));  /// false 
 console.log(booWho(false));  /// true é boleana 
```

Retorna o valor do primeito elemento que atende a condição

```Js
function findElement(arr, func) {
  let num ;
  num = arr.find (func);
  return num;
}
 console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));// 2
```

Retorna a palavra repetida n vezes

```Js
function repeatStringNumTimes(str, num) {
  let newstr=str;
  if (num<=0) return ""; 
  else 
  {
     for (let i = 1 ; i < num ; i++)
     {
       newstr+=str;
     }
     console.log(newstr); ///abcabcabc
  }
  return newstr;
}
repeatStringNumTimes("abc", 3);
```

Retorna se a palavra termina com uma dada string

```JS
function confirmEnding(str, target) {
  let tamLetra = target.length;
  let compara = (str.substr(-tamLetra, tamLetra));  // '(-3, 2): hi'
  str = (compara.localeCompare(target)?false:true);
  //console.log(str);
  return str;
}
confirmEnding("Bastian", "n"); /// true , bastian termina com n
```

Retorna um vetor contendo os maiores valores de cada vetor

```JS
function largestOfFour(arr) {
  let temp =[]; 
  for (let vec of arr)
  {
    let valUnicos = [...new Set(vec.sort((current,next) => next - current))];      
    temp.push(valUnicos[0])
  }
  arr = [...temp] ;
  //console.log(arr);
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); ///  [5,27,39,1001]
```

Fatorial sem recursividade

```Js
function factorialize(num) {
  if (num <=0) return 1;
  for (let i=(num-1);i>=1;i--) num*=i; 
  return num;
}
factorialize(5);
```

Inverte uma palavra

```Javascript
function reverseString(str) {
   const arr = str.split("");
   arr.reverse();
   str = arr.join("");
   return str;
}
console.log(reverseString("hello")); /// olleh
```

Converte um vetor inteiro de uma vez só para um tipo de dados

```Javascript
Vi  = Vi.map((x) =>parseInt(x));
```

Retorna a maior palavra

```Js
function findLongestWordLength(str) {
  const arr = str.split(" ");
  let maior = 0; 
  for (let pal of arr)
  {
    if ((pal.length)>maior) maior = pal.length;
  }
  //console.log(maior);  
  return maior;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

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
function compare(a, b) {
  ...

  //invert return value by multiplying by -1
  return comparison * -1;
}
```
