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

Quantifier Cheat Sheet

```JS
+ once or more
A+	One or more As, as many as possible (greedy), giving up characters if the engine needs to backtrack (docile)
A+?	One or more As, as few as needed to allow the overall pattern to match (lazy)
A++	One or more As, as many as possible (greedy), not giving up characters if the engine tries to backtrack (possessive)
* zero times or more
A*	Zero or more As, as many as possible (greedy), giving up characters if the engine needs to backtrack (docile)
A*?	Zero or more As, as few as needed to allow the overall pattern to match (lazy)
A*+	Zero or more As, as many as possible (greedy), not giving up characters if the engine tries to backtrack (possessive)
? zero times or once
A?	Zero or one A, one if possible (greedy), giving up the character if the engine needs to backtrack (docile)
A??	Zero or one A, zero if that still allows the overall pattern to match (lazy)
A?+	Zero or one A, one if possible (greedy), not giving the character if the engine tries to backtrack (possessive)
{x,y} x times at least, y times at most
A{2,9}	Two to nine As, as many as possible (greedy), giving up characters if the engine needs to backtrack (docile)
A{2,9}?	Two to nine As, as few as needed to allow the overall pattern to match (lazy)
A{2,9}+	Two to nine As, as many as possible (greedy), not giving up characters if the engine tries to backtrack (possessive)
A{2,}A{2,}?A{2,}+	Two or more As, greedy and docile as above.
Two or more As, lazy as above. Two or more As, possessive as above.
A{5}	Exactly five As. Fixed repetition: neither greedy nor lazy.
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
/// ["J","e","n","n","y","8","6","7","5","3","0","9"]
```

Regular Expressions: Match Single Characters Not Specified
Negando caracteres (^dentro de parenteses)
For example, /[^aeiou]/gi matches all characters that are not a vowel.
Note that characters like ., !, [, @, / and white space are matched -
the negated vowel character set only excludes the vowel characters.

```Javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); 
// Change this line
console.log(result);
///[" ","b","l","n","d"," ","m","c","."]
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

```Js
const ghostSpeak = 'booh boooooooh';
const regexpSpooky = /bo{3,}h/;
console.log(ghostSpeak.match(regexpSpooky));
// expected output: Array ["boooooooh"]

const modifiedQuote = '[He] ha[s] to go read this novel [Alice in Wonderland].';
const regexpModifications = /\[.*?\]/g;
console.log(modifiedQuote.match(regexpModifications));
// expected output: Array ["[He]", "[s]", "[Alice in Wonderland]"]

const regexpTooGreedy = /\[.*\]/g;
console.log(modifiedQuote.match(regexpTooGreedy));
// expected output: Array ["[He] ha[s] to go read this novel [Alice in Wonderland]"]
```

Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

```Js
function translatePigLatin(str) {
        const regpig = /^([^aeiou]+)(.*$)/g;
        const regpig2 = /^([aeiou])(.*)$/g;
        let str2 = "";
        //console.log(regpig2.test(str)) ;
        if (regpig.test(str))
        {
            str2 = str.replace(regpig,'$2$1'.concat('ay') );
            return str2;
        }
        if (regpig2.test(str)){
            str2 = str.replace(regpig2, '$1$2'.concat('way') ) ;
            return str2;
        }
        return str;
    return str;
  }
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".

