# Resumo dos meus Estudos !

Fonte : Modern full stack ,   Aulas DIO , Internet , freecode
-------------------------------------------------------------

### NVM

gerenciador de versoes no nodejs

nvm ls -> lista as versoes instaladas
nvm use versão -> muda a versão
nvm list available
https://docs.microsoft.com/pt-br/windows/nodejs/setup-on-windows

Abra o repositório do Windows-NVM no navegador da Internet e selecione o link Baixar Agora.
Instale a versão atual do Node.js (para testar os aprimoramentos dos recursos mais recentes, mas com mais probabilidade de ter problemas do que a versão LTS): nvm install latest
Instale a versão mais recente do LTS estável do Node.js (recomendada) examinando primeiro qual é o número de versão atual do LTS: nvm list available, em seguida, instale o número de versão do LTS com: nvm install <version> (substitua <version> pelo número, ou seja: nvm install 12.14.0).

Baixe o arquivo nvm-setup.zip para obter a versão mais recente.
Depois de baixado, abra o arquivo zip e abra o arquivo nvm-setup.exe.

nvm install latest

## Git

Comandos importantes

# Comandos do Git

============
Um Resumo dos Comandos Git, lista de Comandos importantes do Git

Untracked, Unmodified, Modified e Staged.
-----------------------------------------

## Inicializando

removendo um dir do github mas nao local
git rm -r --cached myFolder
push


| Command | Description |
| - | - |
| `git init` | Inicializa um Repositório Local |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Cria uma copia local de um repositório Remoto |

## Basico

cria na mao o repositorio
daí :
git remote add origin https://github.com/luizrosalba/loja-bootstrap.git
daí
git push -u origin master
daí muda o branch padão no github


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

Qual o comando usado para listar as configurações do Git?
git config --list


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

### Stash

naming the stash

- git stash push -m "my_stash"

Where "my_stash" is the stash name.

Some more useful things to know: All the stashes are stored in a stack. Type:

- git stash list

This will list down all your stashes.

To apply a stash and remove it from the stash stack, type:

- git stash pop --index n

To apply a stash and keep it in the stash stack, type:

- git stash apply --index n

Where n is the index of the stashed change.

Notice that you can apply a stash and keep it in the stack by using the stash name:

- git stash apply my_stash_name


    
# Html

## Tags HTML

- criado em 1991
- tags com abertura e fechamento
- estrutura básica

```Javascript
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

```Javascript
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

```Javascript
<a> Link </a>
<a href = "linkedin.com/"> Link </a>
<a href = "mailtto:luizrosalba@gmail.com"> email </a>
```

## Seletores no CSS

- seletores são elementos html a,p,h1,h3
- dentro de chaves uma propriedade e um valor

```Javascript
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

```Javascript
.header{
    padding:10px
}
```

```Javascript
#header{
    padding:15px
}
```

- um id só pode ser usado uma vez na pagina
- cada elemento html é representado por uma caixa (box model)
- podem alterar sua aparencia![](https://github.com/luizrosalba/hmtl5css/blob/master/img/box_model.PNG?raw=true)
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

# HTML5

# Bootstrap

https://www.w3schools.com/bootstrap4/default.asp

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

```JS
var d = new Date();
var n = d.toJSON();
```

toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()	Converts a Date object to a string, using locale conventions
toString()	Converts a Date object to a string
toTimeString()	Converts the time portion of a Date object to a string
toUTCString()	Converts a Date object to a string, according to universal time
UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
valueOf()	Returns the primitive value of a Date object

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
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];
```

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

substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters
toString()	Returns the value of a String object
toUpperCase()	Converts a string to uppercase letters
trim()	Removes whitespace from both ends of a string
valueOf()	Returns the primitive value of a String object

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

#### Preenchendo

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

## ES6

### História e Conceitos :

ECMAScript 6 - >ES6, ECMAScript 6 ou ES2015, é simplesmente a mais nova versão do JavaScript.

TC39 -> Na verdade, o nome mais usado atualmente é ES2015. A ideia do comitê responsável (conhecido como TC39) pelas atualizações da linguagem é justamente fazer um release anual. Então nesse ano teremos o ES2016 (ou ES7). E assim sucessivamente. ES6 é o mais conhecido pela comunidade. Stage 0: strawman, Stage 1: proposal, Stage 2: draft, Stage 3: candidate e Stage 4: finished

O TC39 focou em alguns objetivos no desenvolvimento do ES6: Ser uma linguagem melhor para construir aplicações complexas Resolver problemas antigos do JavaScript Facilidade no desenvolvimento de libraries

babel -> a grande maioria dos browsers ainda não dão suporte ao ES6, então o que podemos fazer para contornar essa limitação? Podemos usar um transpiler como o Babel. O Babel transforma o seu código de ES6 para ES5 (versão que a maioria dos browsers dá suporte hoje).

javascript é interpretada -> código é executado de cima pra baixo sem compilar para linguagem de máquina

Tipagem é fraca ( não há verificação em todas as operações , ex: você pode somar inteiros com strings ) e dinâmica ( a partir da atribuição o tipo saberá o tipo da variável - inferência de tipo) , você pode atribuir a mesma variável a diferentes tipos

```Javascript
var x; // Now x is undefined 
x = 5;// Now x is a Number 
x = "John"; // Now x is a String
```

Typescript -> É um superset da linguagem, adiciona tipos e funcionalidades que o javascript nao tem por padrão (ex: enum)

Flow -> Semelhante ao typescript em relação a checagem de tipos , mas não é um superset da linguagem.

Funções de primeira classe : função pode ser atribuita a estrutura de dados e pode ser passada por argumentos ou retornadas por outras funções [https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/1-funcoes.js](https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/1-funcoes.js)

Closure -> Escopo léxico -> capacidade da funcao de lembrar o ambiente em que foi criada.

obs: console.log( `1- 0 é : " ${exemplo}<span> </span>`); -> mistura variável e texto na impressão

[https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/closure.js](https://github.com/luizrosalba/Introducao_ao_ES6/blob/master/closure.js)

Javascript algorithms and data Structues certification

Cursando o Javascript algorithms and data Structues certification

## Aulas

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

```Javascript
if (allowed) {
fnParam();
}

}
```

/// A funcao abaixo pode ser reescrita como

```Javascript
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
```

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

```Javascript
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
```

ternário

```Javascript
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
```

#### Operador Spread:

Introduzido no ES6

Itera cada item e passa um parametro

```Javascript
var parter = ['ombro','joelho'] ;
var musica = ['cabeca',...partes,'e,'pes'] ;
```

concatena dois arrays criando um novo array , no lugar de partes insere ombro joelho

```Javascript
function fn (x,y,z) {}
var args = [0,1,2];
fn(...args) ;  /// x = 0 , y = 1 , z = 2
```

#### Operador delete e typeof são unários

#### Operador in

```Javascript
var musica = new Array ["A", "B", "C"] ;

0  in musica /// true
"A" in musica; /// retorna false vc deve especificar o num do indice e nao o valor
"A" in musica[0]; /// retorna true
"lenght" in musica /// true pois length é uma propriedade de todo string
```

#### Operador binario instanceof

Verifica se um objeto é uma instancia

```Javascript
var dia = new Date (2018,12,17);
if (dia instance of Date) // true
```

#### for in e for of

```Javascript
for in -> retorna os valores de cada objeto 

for of ->  retorna o indice de cada objeto
```

Exemplo for in

```JS
 let str = "The quick brown fox jumped over the lazy dog";
 const arr = str.split(" ");
  for (let pal of arr)
  {
    console.log(pal);  
  }
```

saida retorna o indice de cada objeto
0
1
2
3
4
5
6
7
8
Exemplo for of

```JS
 let str = "The quick brown fox jumped over the lazy dog";
 const arr = str.split(" ");
  for (let pal of arr)
  {
    console.log(pal);  
  }
```

saida retorna os valores de cada objeto
The
quick
brown
fox
jumped
over
the
lazy
dog

#### continue

```Javascript
if (element %2 ===0 )
continue
```

pula a execução para os pares

### Aula 3.1 Orientação à objeto

At its core, software development solves a problem or achieves a result with computation. The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.

As its name implies, object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.

The object structure makes it flexible within a program. Objects can transfer information by calling and passing data to another object's methods. Also, new classes can receive, or inherit, all the features from a base or parent class. This helps to reduce repeated code.

Your choice of programming approach depends on a few factors. These include the type of problem, as well as how you want to structure your data and algorithms. This section covers object oriented programming principles in JavaScript.

#### Objetos e propriedades

Think about things people see every day, like cars, shops, and birds. These are all objects: tangible things people can observe and interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

These qualities, or properties, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. Here's an example using these concepts to create a duck object:

```Js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

// This prints "Aflac" to the console
Dot notation is used on the object name, duck, followed by the name of the property, name, to access the value of "Aflac".

#### Métodos

Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

```Js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac.
```

#### Sobre This

sayName: function() {return "The name of this duck is " + duck.name + ".";}

While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.
A way to avoid these issues is with the this keyword:

```Js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.

#### Construtores

Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
Here is an example of a constructor:

```Js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

- Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
- Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
- Constructors define properties and behaviors instead of returning a value as other functions might.

#### Operador new

```Js
let blueBird = new Bird();
```

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

```Js
blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
```

Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name; // => Elvira

#### Extend Constructors to Receive Arguments

Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

```Js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Then pass in the values as arguments to define each unique bird into the Bird constructor: let cardinal = new Bird("Bruce", "red"); This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2. The cardinal has these properties:

```Js
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2
```

The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

#### Verify an Object's Constructor with instanceof

instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

```JS
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```

#### Understand Own Properties

```JS
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); // prints [ "name", "numLegs" ]

```

#### Use Prototype Properties to Reduce Duplicate Code

Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use Bird’s prototype. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

```JS
Bird.prototype.numLegs = 2;
Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);  // prints 2
console.log(canary.numLegs);  // prints 2
```

Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

#### Iterate Over All Properties

You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

```JS
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

```JS
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

#### Understand the Constructor Property

There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

```JS
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true
```

Note that the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

```JS
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

Note
Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.

#### Change the Prototype to a New Object

Up until now you have been adding properties to the prototype individually:

```JS
Bird.prototype.numLegs = 2;
This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

```JS
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

#### Remember to Set the Constructor Property when Changing the Prototype

There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

```JS
duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works
```

To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

```JS
Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

#### Understand Where an Object’s Prototype Comes From

Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

```Js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

```Js
Bird.prototype.isPrototypeOf(duck);
// returns true
```

#### Understand the Prototype Chain

All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

```JS
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // yields 'object'
```

Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

```Js
Object.prototype.isPrototypeOf(Bird.prototype); // returns true
```

How is this useful? You may recall the hasOwnProperty method from a previous challenge:

```Js
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // yields true
```

The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

#### Use Inheritance So You Don't Repeat Yourself

There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:

```Js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

```Js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Since Animal includes the describe method, you can remove it from Bird and Dog:

```Js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

#### Inherit Behaviors from a Supertype

In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

```Js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

This and the next challenge will cover how to reuse Animal's methods inside Bird and Dog without defining them again. It uses a technique called inheritance. This challenge covers the first step: make an instance of the supertype (or parent). You already know one way to create an instance of Animal using the new operator:

```Js
let animal = new Animal();
```

There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

```Js
let animal = Object.create(Animal.prototype);
```

Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

```JS
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```

#### Set the Child's Prototype to an Instance of the Parent

In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.
Passaro agora é subtipo de animal

```JS
Bird.prototype = Object.create(Animal.prototype);
```

Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

```JS
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
```

duck inherits all of Animal's properties, including the eat method.

#### Reset an Inherited Constructor Property

When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:

```JS
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
```

But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set Bird's constructor property to the Bird object:

```JS
Bird.prototype.constructor = Bird; //// pode ser até depois da atribuição let duck = new Bird(); irá corrigir corretamente o  construtor 
duck.constructor // function Bird(){...}
```

#### Add Methods After Inheritance

A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, Bird is a constructor that inherits its prototype from Animal:

```Js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

```

In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function.

Functions are added to Bird's prototype the same way as any constructor function:

```Js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Now instances of Bird will have both eat() and fly() methods:

```Js
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
```

#### Override Inherited Methods

In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

```JS
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Then the ChildObject received its own methods by chaining them onto its prototype:

```JS
ChildObject.prototype.methodName = function() {...};
```

It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. Here's an example of Bird overriding the eat() method inherited from Animal:

```JS
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.

#### Use a Mixin to Add Common Behavior Between Unrelated Objects

As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

```JS
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
The flyMixin takes any object and gives it the fly method.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

```JS
bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"
```

Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

#### Use Closure to Protect Properties Within an Object from Being Modified Externally

In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

bird.name = "Duffy";

Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

```JS
function Bird() {
  let hatchedEgg = 10; // private variable

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
```

Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. In JavaScript, a function always has access to the context in which it was created. This is called closure.

#### Understand the Immediately Invoked Function Expression (IIFE)

A common pattern in JavaScript is to execute a function as soon as it is declared:
/// note que a funcao nem precisa de nome

```JS
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

#### Outro exemplo de IIFE

Chamando a funcao add com dois parêntesis

```JS
function add(x){
  return function(y){
    return x + y;
  };
}
var addTwo = add(2);
addTwo(4) === 6; // true
add(3)(4) === 7; // true
```

#### Use an IIFE to Create a Module

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

```JS
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

We can group these mixins into a module as follows:

```JS
let motionModule = (function () {
return {
  glideMixin: function(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
  },
  flyMixin: function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
  }
}
})(); // The two parentheses cause the function to be immediately invoked

```

Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

motionModule.glideMixin(duck);
duck.glide();

#### Herança

Baseada em protótipos
prototype : variável que armazena definições do projeto.
Sempre que criamos uma variável em javascrypt ele cria uma variavel __proto__ que aponta para o tipo da variável que criamos (construtor)

Toda função construtora tem um prototype

```Javascript
myText.__proto__.split é o mesmo que my myText.split ou ainda String.prototype.split

myText.__proto__.split === String.prototype.split /// true

myText.constructor === String ///true

__proto __ -> prototype -> constructor

new Foo(); /// um novo objeto é criado a partir da função construtora Foo herdando Foo.prototype
```

se a função construtora tem um retorno será respeitado. Senão será retornado o objeto criado em 1

```Javascript
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
```

obs  : função call passa um contexto para esta função ser executada

```Javascript
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
```

ex 3  : Nesta abordagem usamos o prototype que define o objeto cachorro tera qt deparas e movimentar por padrao
nao serão criadas as funcoes movimentar e latir , se new cachorro já foi dado e um novo objeto for criado , o cachorro terá esta nova propriedade

```Javascript
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
```

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

```Javascript
class Car {  // Create a class
  constructor(brand) {  // Class constructor
    this.carname = brand;  // Class body/properties
  }
}
mycar = new Car("Ford");  // Create an object of Car class
```

#### Class Keywords

Keyword	Description

- extends	Extends a class (inherit)
- static	Defines a static method for a class
- super	Refers to the parent class

#### Modificadores de Acesso

Js nao tem
Atualmente v 12 do node , mas ainda nao tem suporte nos browsers , controla o que é privado e publico nos browsers usa funções get e set para recuperar os atributos
sintaxe:

- hashtag_nomevar -> torna a variável privada

#### Encapsulamento

Oculta detalhes do funcionamento interno

pode-se usar metodos set e get (v12 do node) para setar e obter o valor de um atributo

#### Static

permite que acesse métodos e atributos sem instanciar uma classe

ex1: com funcoes , implementação de static do JS

```Javascript
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

### Programação Funcional

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

INPUT -> PROCESS -> OUTPUT

Functional programming is about:

1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2) Pure functions - the same input always gives the same output
3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

#### Understand Functional Programming Terminology

The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood swings are pretty common.

With that information, we'll need to revisit the getTea function from last challenge to handle various tea requests. We can modify getTea to accept a function as a parameter to be able to change the type of tea it prepares. This makes getTea more flexible, and gives the programmer more control when client requests change.
But first, let's cover some functional terminology:

Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter,
the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called higher order functions.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.

```Js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

#### Understand the Hazards of Using Imperative Code

Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that stores the name of the open pages.

```JS
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  //foi necessario trocar o splice ( mutavel ) por slice (imutavel )

  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

#### Avoid Mutations and Side Effects Using Functional Programming

If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function. Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.

Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

```Js
// The global variable
var fixedValue = 4;

function incrementer () { /// funcao pura 
  // Only change code below this line
  return fixedValue+1;

  // Only change code above this line
}
```

#### Pass Arguments to Avoid External Dependence in a Function

The last challenge was a step closer to functional programming principles, but there is still something missing.

We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

```Js
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (fixedValue) {
  return fixedValue+1;

  // Only change code above this line
}
```

#### Use the filter Method to Extract Data from an Array

Another useful array function is Array.prototype.filter(), or simply filter().

filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.

See below for an example using the filter method on the users array to return a new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback.

```JS
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
```

#### Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.
2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

```JS
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList,bookName) {
  let bookList2 = [...bookList];
  bookList2.push(bookName);
  return bookList2;
  
  // Change code above this line
}

// Change code below this line
function remove (bookList,bookName) {
  var book_index = bookList.indexOf(bookName);
  let bookList2 = [...bookList];
  if (book_index >= 0) {

    bookList2.splice(book_index, 1);
    return bookList2;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

```

#### Use the map Method to Extract Data from an Array

So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

See below for an example using the map method on the users array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.

```Js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]

```

#### Implement map on a Prototype

As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

It would teach us a lot about map to try to implement a version of it that behaves exactly like the Array.prototype.map() with a for loop or Array.prototype.forEach().

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.

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

#### Implement the filter Method on a Prototype

It would teach us a lot about the filter method if we try to implement a version of it that behaves exactly like Array.prototype.filter(). It can use either a for loop or Array.prototype.forEach().

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.

```JS
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
   for (let i = 0; i < this.length; i++) {
     if ( callback(this[i]) )
      newArray.push(this[i]);  /// this se refere ao objeto que chama a funcao (s)
  }
  // Only change code above this line
  console.log(newArray);
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

```

#### Return Part of an Array Using the slice Method

The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

Here's an example:

var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
// Sets newArray to ["Dog", "Tiger"]

### Remove Elements from an Array Using slice Instead of splice

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on. Here's an example:

```JS
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
```

// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
As we saw in the last challenge, the slice method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the slice method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the slice method instead of splice helps to avoid any array-mutating side effects.

```JS
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

#### Combine Two Arrays Using the concat MethodPassed

Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

```JS
[1, 2, 3].concat([4, 5, 6]);
```

// Returns a new array [1, 2, 3, 4, 5, 6]
Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.

```Js
function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```

#### Add Elements to the End of an Array Using concat Instead of push

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays. Compare concat to the push method. Push adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

```JS
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
```

// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way
Concat offers a way to add new items to the end of an array without any mutating side effects.

```JS
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

#### Use the reduce Method to Analyze Data

Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.

The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce. The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.

In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

See below for an example using reduce on the users array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.

```JS
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
```

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64
In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

```JS
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }
```

The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

#### Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.

```JS
const squareList = (arr) => {
  // Only change code below this line
  
  const filteredList = arr.filter( item => !(item%1) && item>=0)   
  const mapped = filteredList.map(item => item*item); 
  arr = [...mapped];
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

#### Sort an Array Alphabetically using the sort Method

The sort method sorts the elements of an array according to the callback function.

For example:

```JS

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
```

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

```JS
function alphabeticalOrder(arr) {
  // Only change code below this line
 
  arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
  return arr; 
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

```

### Return a Sorted Array Without Changing the Original Array

A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

hard coded

```JS
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let arr2 = arr.slice();
  return arr2.sort(function(a, b) { return a - b;});
}

  // Only change code above this line

nonMutatingSort(globalArray);
```

not hard coded

```JS
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  return arr.slice().sort(function(a, b) { return a - b;});
}

  // Only change code above this line

nonMutatingSort(globalArray);
```

#### Split a String into an Array Using the split Method

The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

```JS
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]
```

Since strings are immutable, the split method makes it easier to work with them.
Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

```JS
function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);
  // Only change code above this line
}
splitify("Hello World,I-am code");
```

### Combine an Array into a String Using the join Method

The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

Here's an example:

var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"
Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

```JS

function sentensify(str) {
  // Only change code below this line
  let arr = str.split(/\W/);
  return arr.join(" ");

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
```

#### Apply Functional Programming to Convert Strings to URL Slugs

The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that map and filter are special cases of reduce.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce"). You may have already noticed this on the freeCodeCamp site.

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

```JS
// Only change code below this line
function urlSlug(title) {
  const trim = title.trim();
  const lower = trim.toLowerCase();
  const sep = lower.split(" ");
  const filtro = sep.filter(item => item !=="");
  const junto = filtro.join("-");
  return  junto ; 
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));
```

#### Use the every Method to Check that Every Element in an Array Meets a Criteria

The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.

For example, the following code would check if every element in the numbers array is less than 10:

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
return currentValue < 10;
});
// Returns false

```JS
function checkPositive(arr) {
  // Only change code below this line
  return arr.every(function(currentValue) {
  return currentValue > 0;
  });
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

#### Use the some Method to Check that Any Elements in an Array Meet a Criteria

he some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 10:

var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
return currentValue < 10;
});
// Returns true
Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

```JS
function checkPositive(arr) {
  // Only change code below this line
  return arr.some(function(currentValue) {
  return currentValue > 0 ;
  });

  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

#### Introduction to Currying and Partial Application

The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

//Un-curried function
function unCurried(x, y) {
return x + y;
}

//Curried function
function curried(x) {
return function(y) {
return x + y;
}
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

//Impartial function
function impartial(x, y, z) {
return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
Fill in the body of the add function so it uses currying to add parameters x, y, and z.

```JS
function add(x) {
  // Only change code below this line
  return function(y) {
    return function(z){
       return x + y + z;
    }
  }
  // Only change code above this line
}
add(10)(20)(30);
```

### Desing patterns

DP são soluções gerais para problemas recorrentes em desenvolvimento de um software
Não se trata de um framework ou um código , mas uma definiçao de alto nivel de como um problema pode ser solucionado

Pattern Languange -> 1978 Christopher Alexander Sara , Murray  253 tipos de problemas / desafios de projetos

formato de um patterns :

Nome, Exemplo, contexto , problema, solução.

1987 kent e ward 5 padroes de projetos ->

1994 Gof Erich, Richard , Ralph John  DP Elements of Reusable OO Software -> Tipos Criação , estruturais e comportamentais

![](./img/design.PNG)

```Javascript
Padroes de criação (design pattern): abstraem e / ou adiam o processo de criação dos objetos , tornamm o sistema independete de como seus objetos são criados , compostos e representados
mais famosos :
Abstract Factory
Builder
Factory Method
Prototype
Singleton
```

#### Algoritmos  Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

```JS
function sumAll(arr) {
  const mapped =[];
  let i; 
  if (arr[0]>arr[1]) { /// era melhor dar um sort :( 
      let temp= arr[0]; 
      arr[0]=arr[1]; 
      arr[1]=temp; 
      }  ; 
  for (i=arr[0];i<=arr[1];i++) mapped.push(i)
  return mapped.reduce( 
    (total,value) => total+= value, 0 
    );
}

console.log(sumAll([1, 4]));
```

#### Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
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

Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Passed
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
Passed
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
Passed
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

```Js
function uniteUnique(arr) {
  let saida = [];
  let tam = arguments.length; 
  //console.log(tam);
  //console.log(arguments[2]);
  let valUnicos = [...new Set(arguments[0])];      
  //console.log(valUnicos);
  for (let i = 1 ; i < tam;i++)
  {
      arguments[i].forEach(element => {
        if (!arguments[0].includes(element))
        {
          valUnicos.push(element);
        }
      });
  }
  return valUnicos;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

```

#### Seek and DestroyPassed

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

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

destroyer([1, 2, 3, 1, 2, 3], 2, 3); /// [1,1]

```

#### Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

### Design PAtterns Padroes estruturais :

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

React Patterns :

- Contents
- Translations
- Element
- Component
- Expressions
- Props
- defaultProps
- Destructuring props
- JSX spread attributes
- Merge destructured props with other values
- Conditional rendering
- Children types
- Array as children
- Function as children
- Render prop
- Children pass-through
- Proxy component
- Style component
- Event switch
- Layout component
- Container component
- Higher-order component
- State hoisting
- Controlled input
- Translations
  These translations are not verified and links are not endorsements.
  Chinese

Element
Elements are anything inside angle brackets.

```JS
<div></div>
<Greeting />
```

Components return Elements.

Component
Define a Component by declaring a function that returns a React Element.

```JS
function Greeting() {
  return <div>Hi there!</div>;
}
```

Expressions
Use curly braces to embed expressions in JSX.

```JS
function Greeting() {
  let name = "chantastic";

  return <div>Hi {name}!</div>;
}
```

Props
Take props as an argument to allow outside customizations of your Component.

```JS

function Greeting(props) {
  return <div>Hi {props.name}!</div>;
}
defaultProps
Specify default values for props with defaultProps.

function Greeting(props) {
  return <div>Hi {props.name}!</div>;
}
Greeting.defaultProps = {
  name: "Guest"
};
```

Destructuring props
Destructuring assignment is a JavaScript feature.
It was added to the language in ES2015.
So it might not look familiar.

Think of it like the opposite of literal assignment.

```JS

let person = { name: "chantastic" };
let { name } = person;
Works with Arrays too.

let things = ["one", "two"];
let [first, second] = things;
```

Destructuring assignment is used a lot in function components.
These component declarations below are equivalent.

```JS

function Greeting(props) {
  return <div>Hi {props.name}!</div>;
}

function Greeting({ name }) {
  return <div>Hi {name}!</div>;
}
```

There's a syntax for collecting remaining props into an object.
It's called rest parameter syntax and looks like this.

```JS

function Greeting({ name, ...restProps }) {
  return <div>Hi {name}!</div>;
}
```

Those three dots (...) take all the remaining properties and assign them to the object restProps.

So, what do you do with restProps once you have it?
Keep reading...

JSX spread attributes
Spread Attributes is a feature of JSX.
It's a syntax for providing an object's properties as JSX attributes.

Following the example from Destructuring props,
We can spread restProps over our <div>.

```JS

function Greeting({ name, ...restProps }) {
  return <div {...restProps}>Hi {name}!</div>;
}
```

This makes Greeting super flexible.
We can pass DOM attributes to Greeting and trust that they'll be passed through to div.

<Greeting name="Fancy pants" className="fancy-greeting" id="user-greeting" />

Avoid forwarding non-DOM props to components.
Destructuring assignment is popular because it gives you a way to separate component-specific props from DOM/platform-specific attributes.

```JS

function Greeting({ name, ...platformProps }) {
  return <div {...platformProps}>Hi {name}!</div>;
}
```

Merge destructured props with other values
Components are abstractions.
Good abstractions allow for extension.

Consider this component that uses a class attribute for style a button.

```JS

function MyButton(props) {
  return <button className="btn" {...props} />;
}
This works great until we try to extend it with another class.
```

```JS

<MyButton className="delete-btn">Delete...</MyButton>
In this case, delete-btn replaces btn.
```

Order matters for JSX spread attributes.
The props.className being spread is overriding the className in our component.

We can change the order but now the className will never be anything but btn.

```JS

function MyButton(props) {
  return <button {...props} className="btn" />;
}
```

We need to use destructuring assignment to get the incoming className and merge with the base className.
We can do this simply by adding all values to an array and joining them with a space.

```JS

function MyButton({ className, ...props }) {
  let classNames = ["btn", className].join(" ");

  return <button className={classNames} {...props} />;
  
}
```

To guard from undefined showing up as a className, you could update your logic to filter out falsy values:

```JS

function MyButton({ className, ...props }) {
  let classNames = ["btn", className].filter(Boolean).join(" ").trim();

  return <button className={classNames} {...props} />;
}
```

Bear in mind though that if an empty object is passed it'll be included in the class as well, resulting in: btn [object Object].

The better approach is to make use of available packages, like classnames or clsx, that could be used to join classnames, relieving you from having to deal with it manually.

Conditional rendering
You can't use if/else statements inside a component declarations.
So conditional (ternary) operator and short-circuit evaluation are your friends.

```JS

if
{
  condition && <span>Rendered when `truthy`</span>;
}
unless
{
  condition || <span>Rendered when `falsy`</span>;
}
if-else
{
  condition ? (
    <span>Rendered when `truthy`</span>
  ) : (
    <span>Rendered when `falsy`</span>
  );
}
```

Children types
React can render children from most types.
In most cases it's either an array or a string.3

```JS

String
<div>Hello World!</div>
Array
<div>{["Hello ", <span>World</span>, "!"]}</div>
Array as children
```

Providing an array as children is a very common.
It's how lists are drawn in React.

We use map() to create an array of React Elements for every value in the array.

```JS333

<ul>
  {["first", "second"].map(item => (
    <li>{item}</li>
  ))}
</ul>
That's equivalent to providing a literal array.

<ul>{[<li>first</li>, <li>second</li>]}</ul>
This pattern can be combined with destructuring, JSX Spread Attributes, and other components, for some serious terseness.

<ul>
  {arrayOfMessageObjects.map(({ id, ...message }) => (
    <Message key={id} {...message} />
  ))}
</ul>
```

Function as children
React components don't support functions as children. However, render props is a pattern for creating components that take functions as children.

Render prop
Here's a component that uses a render callback.
It's not useful, but it's an easy illustration to start with.

```JS

const Width = ({ children }) => children(500);
The component calls children as a function, with some number of arguments. Here, it's the number 500.
```

To use this component, we give it a function as children.

```JS

<Width>{width => <div>window is {width}</div>}</Width>
We get this output.

<div>window is 500</div>
With this setup, we can use this width to make rendering decisions.

<Width>
  {width => (width > 600 ? <div>min-width requirement met!</div> : null)}
</Width>
```

If we plan to use this condition a lot, we can define another components to encapsulate the reused logic.

```JS

const MinWidth = ({ width: minWidth, children }) => (
  <Width>{width => (width > minWidth ? children : null)}</Width>
);
```

Obviously a static Width component isn't useful but one that watches the browser window is. Here's a sample implementation.

```JS

class WindowWidth extends React.Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth }, () =>
      window.addEventListener("resize", ({ target }) =>
        this.setState({ width: target.innerWidth })
      )
    );
  }

  render() {
    return this.props.children(this.state.width);
  }
}
```

Many developers favor Higher Order Components for this type of functionality. It's a matter of preference.

Children pass-through
You might create a component designed to apply context and render its children.

```JS

class SomeContextProvider extends React.Component {
  getChildContext() {
    return { some: "context" };
  }

  render() {
    // how best do we return `children`?
  }
}
```

You're faced with a decision. Wrap children in an extraneous <div /> or return children directly. The first options gives you extra markup (which can break some stylesheets). The second will result in unhelpful errors.

```JS

// option 1: extra div
return <div>{children}</div>;

// option 2: unhelpful errors
return children;
It's best to treat children as an opaque data type. React provides React.Children for dealing with children appropriately.

return React.Children.only(this.props.children);
```

Proxy component
(I'm not sure if this name makes sense)

Buttons are everywhere in web apps. And every one of them must have the type attribute set to "button".

```

<button type="button">
Writing this attribute hundreds of times is error prone. We can write a higher level component to proxy props to a lower-level button component.

const Button = props =>
  <button type="button" {...props}>
We can use Button in place of button and ensure that the type attribute is consistently applied everywhere.

<Button />
// <button type="button"><button>

<Button className="CTA">Send Money</Button>
// <button type="button" class="CTA">Send Money</button>
Style component
This is a Proxy component applied to the practices of style.

Say we have a button. It uses classes to be styled as a "primary" button.


<button type="button" className="btn btn-primary">
We can generate this output using a couple single-purpose components.
```

import classnames from "classnames";

```JS

const PrimaryBtn = props => <Btn {...props} primary />;

const Btn = ({ className, primary, ...props }) => (
  <button
    type="button"
    className={classnames("btn", primary && "btn-primary", className)}
    {...props}
  />
);
```

It can help to visualize this.

```JS

PrimaryBtn()
  ↳ Btn({primary: true})
    ↳ Button({className: "btn btn-primary"}, type: "button"})
      ↳ '<button type="button" class="btn btn-primary"></button>'
Using these components, all of these result in the same output.

<PrimaryBtn />
<Btn primary />
<button type="button" className="btn btn-primary" />
This can be a huge boon to style maintenance. It isolates all concerns of style to a single component.

Event switch
When writing event handlers it's common to adopt the handle{eventName} naming convention.


handleClick(e) { /* do something */ }

For components that handle several event types, these function names can be repetitive. The names themselves might not provide much value, as they simply proxy to other actions/functions.
``` JS

handleClick() { require("./actions/doStuff")(/* action stuff */) }
handleMouseEnter() { this.setState({ hovered: true }) }
handleMouseLeave() { this.setState({ hovered: false }) }
```

Consider writing a single event handler for your component and switching on event.type.

```JS

handleEvent({type}) {
  switch(type) {
    case "click":
      return require("./actions/doStuff")(/* action dates */)
    case "mouseenter":
      return this.setState({ hovered: true })
    case "mouseleave":
      return this.setState({ hovered: false })
    default:
      return console.warn(`No case for event type "${type}"`)
  }
}
```

Alternatively, for simple components, you can call imported actions/functions directly from components, using arrow functions.

<div onClick={() => someImportedAction({ action: "DO_STUFF" })}
Don't fret about performance optimizations until you have problems. Seriously don't.

Layout component
Layout components result in some form of static DOM element. It might not need to update frequently, if ever.

Consider a component that renders two children side-by-side.

```JS

<HorizontalSplit
  startSide={<SomeSmartComponent />}
  endSide={<AnotherSmartComponent />}
/>
```

We can aggressively optimize this component.

While HorizontalSplit will be parent to both components, it will never be their owner. We can tell it to update never, without interrupting the lifecycle of the components inside.

```JS

class HorizontalSplit extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <FlexContainer>
        <div>{this.props.startSide}</div>
        <div>{this.props.endSide}</div>
      </FlexContainer>
    );
  }
}
```

Container component
"A container does data fetching and then renders its corresponding sub-component. That’s it."—Jason Bonta

Given this reusable CommentList component.

```JS

const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li>
        {comment.body}-{comment.author}
      </li>
    ))}
  </ul>
);
```

We can create a new component responsible for fetching data and rendering the CommentList function component.

```JS

class CommentListContainer extends React.Component {
  constructor() {
    super()
    this.state = { comments: [] }
  }

  componentDidMount() {
    $.ajax({
      url: "/my-comments.json",
      dataType: 'json',
      success: comments =>
        this.setState({comments: comments});
    })
  }

  render() {
    return <CommentList comments={this.state.comments} />
  }
}
```

We can write different containers for different application contexts.

Higher-order component
A higher-order function is a function that takes and/or returns a function. It's not more complicated than that. So, what's a higher-order component?

If you're already using container components, these are just generic containers, wrapped up in a function.

Let's start with our Greeting component.

```JS

const Greeting = ({ name }) => {
  if (!name) {
    return <div>Connecting...</div>;
  }

  return <div>Hi {name}!</div>;
};
```

If it gets props.name, it's gonna render that data. Otherwise it'll say that it's "Connecting...". Now for the the higher-order bit.

```JS

const Connect = ComposedComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { name: "" };
    }

    componentDidMount() {
      // this would fetch or connect to a store
      this.setState({ name: "Michael" });
    }

    render() {
      return <ComposedComponent {...this.props} name={this.state.name} />;
    }
  };
```

This is just a function that returns component that renders the component we passed as an argument.

Last step, we need to wrap our Greeting component in Connect.

const ConnectedMyComponent = Connect(Greeting);
This is a powerful pattern for providing fetching and providing data to any number of function components.

State hoisting
function-component don't hold state (as the name implies).

Events are changes in state. Their data needs to be passed to stateful container components parents.

This is called "state hoisting". It's accomplished by passing a callback from a container component to a child component.

```JS

class NameContainer extends React.Component {
  render() {
    return <Name onChange={newName => alert(newName)} />;
  }
}

const Name = ({ onChange }) => (
  <input onChange={e => onChange(e.target.value)} />
);
Name receives an onChange callback from NameContainer and calls on events.

The alert above makes for a terse demo but it's not changing state. Let's change the internal state of NameContainer.

class NameContainer extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return <Name onChange={newName => this.setState({ name: newName })} />;
  }
}
```

The state is hoisted to the container, by the provided callback, where it's used to update local state. This sets a nice clear boundary and maximizes the re-usability of function component.

This pattern isn't limited to function components. Because function components don't have lifecycle events, you'll use this pattern with component classes as well.

Controlled input is an important pattern to know for use with state hoisting

(It's best to process the event object on the stateful component)

Controlled input
It's hard to talk about controlled inputs in the abstract. Let's start with an uncontrolled (normal) input and go from there.

```
<input type="text" />
When you fiddle with this input in the browser, you see your changes. This is normal.

A controlled input disallows the DOM mutations that make this possible. You set the value of the input in component-land and it doesn't change in DOM-land.


<input type="text" value="This won't change. Try it." />
Obviously static inputs aren't very useful to your users. So, we derive a value from state.

```

```JS
class ControlledNameInput extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return <input type="text" value={this.state.name} />;
  }
}
```

Then, changing the input is a matter of changing component state.

```JS
return (
  <input
    value={this.state.name}
    onChange={e => this.setState({ name: e.target.value })}
  />
);

```

This is a controlled input. It only updates the DOM when state has changed in our component. This is invaluable when creating consistent UIs.

If you're using function components for form elements, read about using state hoisting to move new state up the component tree.

### ES6 let e var

let foi introduzido no Es6 para evitar os problemas da variável pública var a variable with the same name can only be declared once

```Javascript
let camper = 'James';
let camper = 'David'; // throws an error
```

Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:
"use strict";
x = 3.14; // throws an error because x is not declared

When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

```Javascript
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

```Javascript
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

```Javascript
const magic = () => {
"use strict";
return new Date();
};
```

Quando a função nao tem corpo pode-se omitir o return

const myFunc = () => "value";

Argumentos em uma arrow function :

```Javascript
// doubles input value and returns it
const doubler = (item) => item * 2;

// the same function, without the argument parentheses
const doubler = item => item * 2;

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
```

parametro default em arrow functions

```Javascript
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

Parametro rest em arrow functions

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

let a = 8, b = 6;
// Only change code below this line

[b,a] = [a,b];
```

Usando Destructuring com parametro rest para redesignar variaveis

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

```Javascript
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

The rest element only works correctly as the last variable in the list.

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
const getMousePosition = (x, y) => ({
x: x,
y: y
});
```

getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

```Javascript
const getMousePosition = (x, y) => ({ x, y });
```

ES6: Write Concise Declarative Functions with ES6

When defining functions within objects in ES5, we have to use the keyword function as follows:

```Javascript
const person = {
name: "Taylor",
sayHello: function() {
return `Hello! My name is ${this.name}.`;
}
};
```

With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

#### Parte 2

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

strict

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

- Os estilos pela tag style são feitos por um JSON onde o CSS é escrito CamelCase.



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
- Fidelidade do protótipo (baixa ou alta fidelidade) baixa é interessante para não criar expectativas![](https://github.com/luizrosalba/FundamentosdeArquiteturadeSistemas/blob/master/dasdasd.PNG?raw=true)

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

## NPM

NPM, which stands for Node Package Manager, is a companion app that installs
alongside Node (though it is developed separately and can be updated on a different
schedule than Node). With it, you can download packages, which are reusable JavaScript
modules (and any supporting stuff they might need) from a central package registry (or a
private repository if you have one). The central repository you can find at
www.npmjs.com
You can visit it through a web browser and look through all the packages available,
which makes finding exactly what you need easy.

A Few More NPM Commands
Aside from install, there are many other NPM commands, but you’ll probably only use
a subset most of the time. For example, to find out what modules are installed in your
project, you can issue this command:

- npm ls
  Like on a *nix system, ls is short for list, and that’s what it does: lists the installed
  modules. What you’ll see is a textual tree that shows the modules and then the modules
  they depend on. In other words, more will likely be shown than just the modules you
  explicitly installed (some modules don’t have dependencies, but in the NPM ecosystem,
  those tend to be the exception rather than the rule).
  Tip  one very helpful tip i can give is that if you want to see just the top-level
  modules, whether in the global or local cache, you can add --depth=0 to the ls
  command.
  If you want to see what’s installed in global cache instead, you can do
- npm -g ls
  In fact, keep that -g option in mind because you can add that to most NPM
  commands to differentiate between the local and global caches.
  You can also update a given module:
- npm update express
  Just provide the name of the module to update, and NPM will take care of it, updating
  to the latest available version. If you don’t provide a package name, then NPM will dutifully
  update all packages. And yes, you can drop a -g on it either way to target the global cache.

### Initializing a New NPM/Node Project

Now, in all of this, I did skip one step that clearly is optional but is, in fact, typical, and
that’s initializing a new project. With most Node/NPM projects, you’ll also have a file
named package.json in the root directory of the project. This file is the project manifest
file, and it provides metadata information to NPM (and Node, at least indirectly) about
your project that it needs to do certain things. It will tell NPM what modules to install if
they haven’t been installed yet for one thing (which makes giving a project to another
developer very easy!). It will also contain information like the name and version of the
project, its main entry point, and lots of other information (most of which is optional, but
we’ll look at that a bit more in the next chapter).
While you can write this file by hand or even go entirely without it, it’s a good idea to
have it, and it’s a good idea to let NPM create it for you, which you can do by executing
this command:

- npm init

### Adding Dependencies

Now, let’s say you want to add that Express package I mentioned to this project. There
are two choices. First, you could edit package.json yourself, adding this element:
"dependencies": {
"express": "^4.16.1"
}
However, doing just that won’t have any effect. The module isn’t installed at this
point. To do that, you now must issue a command:

- npm
  NPM will now (using Node as a runtime, it should be mentioned, because NPM is
  just a JavaScript application that runs on Node) go fetch the Express package from the
  central repository, will determine all the dependencies it needs, and will download
  and install all of them in the node_modules directory under the current directory. All
  these modules are now in the project cache (not global cache, it should be noted) and
  ready for you to use (normally, you wouldn’t use the transient dependencies of Express
  directly, though you certainly could, but it’s good form to declare all the modules you
  intend to use explicitly in package.json as dependencies).
  Another alternative, and the one generally favored by developers, is not to edit the
  file directly and instead let NPM do it by issuing a command like this:
- npm install express --save
  This will cause NPM to add the dependency entry in package.json for you. This
  avoids the possibility of accidentally fat-fingering something and having a broken
  experience (or, worse, handing the project to another developer only to get the dreaded
  “It won’t even start up!” call).
- Note  You can also replace --save with --save-dev. this results in a
  devDependencies entry being added to package.json. the difference is
  that devDependencies are modules that you only need during development,
  but which your project code itself doesn’t depend on. as you’ll see later, two
  good examples of this are typeScript and Webpack. also, when uninstalling
  dependencies, --save and --save-dev can also be used to remove the
  dependency from package.json.

The reason this is all important is that, now, let’s say you want to give this project
to someone else. You typically do not want to provide them with all the dependencies
your project requires, all the content of node_modules, if for no other reason that that
directory can quickly grow to a large size. Instead, they can recreate it using the
package.json file just by doing this:
npm install
That will cause NPM to read the package.json file and automatically install all
the dependencies! Now, the person you’re working with has the same development
environment as you as far as project dependencies go for this project without having to  do any leg work themselves! Pretty sweet, right?
As you can guess, there’s quite a bit more to NPM than just what I’ve shown here, but
these are the real basics.

### NPM: More on package.json

In the last chapter, you learned how to init a project with NPM, which generates a
package.json file. I said then that most of its contents were optional, and that’s definitely
true, but let’s talk about what’s available in that file, discussing each of the keys available
(remember it’s just a JSON file, which means it’s defining a JavaScript object, which has keys or properties or attributes or even elements – all these terms are generally taken to be
interchangeable in this context):

- name – We start with a simple one: the name of the thing you’re
  coding! The name element’s value must be no more than 214
  characters, cannot start with a dot or an underscore, can have no
  uppercase letters, and must be URL-safe.
- author – The author is a single person and is defined by an object
  with three potential attributes: name, email, and url (where name is
  required, and both email and url are optional). Alternatively, you
  can make the value a single string in the form "<name> <email>
  (<url>)" and NPM will parse it for you automatically.
- bin – Some packages require executables to be installed to do their
  work and added to the path. That’s where the bin element comes
  in. You can make the value an object (or map, which is probably the
  more appropriate term here) that maps a command to an executable
  and NPM will take care of “installing” it for you when you install the
  package by creating the appropriate symlink.
- browser – Some modules are meant to be used in a browser, not in
  Node, and for those packages, you can use this element instead of
  the main element (coming up shortly!) to hint to the users of your
  package that it depends on primitives available to JavaScript that
  aren’t available in Node.
- bugs – If your project has an issue tracker, then you can reference
  it with the bugs element. The value of this is an object with two
  attributes, url and email, and you can specify either or both (but you
  must specify at least one, or NPM will complain).
- bundledDependencies – Some projects need to preserve NPM
  packages locally or through a single download. For those, this
  element allows you to specify an array of package names that will be
  bundled with your package when you publish it.
- config – If you need to have parameters available in the environment
  when your package is used, then the config element might do the
  trick. Here, you can specify a value like "config" : { "port" :
  "8888" } and then in your code you can reference npm_package_
  config_port as an environment variable to get the value configured.
- contributors – The contributors element is just like the author element
  except that this is an array of people who helped with the project.
- cpu – If your code is only meant to run on certain system architectures,
  you can specify which as an array of strings with the cpu element.
- dependencies – You saw the dependencies element in the previous
  chapter, but I’ll also mention that in addition to specifying a package
  name and optionally a version to be pulled down from the NPM
  registry, you can also specify a URL to a tarball to be downloaded or a
  Git/GitHub URL or a local file system path.
- description – A freeform string that describes your package. It’s as
  simple as that!
- devDependencies – Again, one I mentioned in the previous chapter,
  and it’s simply the same as dependencies, but it names packages that
  are only needed during development.
- directories – This element allows you to describe the structure
  your package, things like the location of library components binary
  content, man pages, Markdown documentation, examples, and tests.
  See the Common JS package specification for details on this.
- engines – This element allows you to specify what version(s) of Node
  your package works on. You can also use this element to define what
  version(s) of NPM is capable of properly installing the package.
- files – When your package is installed as a dependency, NPM will
  need to know what files to include. It will by default assume all, but if
  you want or need to be specified, then the files element will let you
  do that. It works a lot like a .gitignore file, but in reverse: anything
  listed in this element will be included, not ignored.
- homepage – If your project has a web site, then you can specify the
  URL of its homepage with this element.
- keywords – The keywords element is an arbitrary array of strings that
  can be used to help people find your package (more on this in the
  next section).
- license – The value of the license element is the license your
  package is released under. The value of this must be a currently
  registered SPDX license identifier (see spdx.org for a list).
  Alternatively, if you are using a custom license or one that doesn’t yet
  have an SPDX identifier, then you can set the value to "SEE LICENSE
  IN <filename>" and place the <filename> license file alongside the
  package.json file. Or, if you don’t grant rights to use your package to
  anyone (vis-à-vis, you want to make it private and/or unpublished),
  then you can use a value of "UNLICENSED".
- man – With this element you can specify a single file or an array of
  filenames to put in place for the Linux man program to display for
  your package.
- main – This is the primary entry point to your package. For example,
  if your package is named super_duper_cool_package, then a user
  will expect to be able to do require("super_duper_cool_package")
  after they install it. To allow this, the main element must point to the
  file that exports your package’s main export object.
- optionalDependencies – If your package has dependencies and
  NPM can’t install them, then it will fail the installation of your
  package. If, however, you want to specify that some dependencies
  are okay to be missing and that NPM should go ahead with the
  installation anyway, then optionalDependencies is where you can
  list them.
- os – Just like cpu, if your package only works on certain OSs, then this
  element is where you can have an array of strings naming those it
  runs on.
- peerDependencies – Sometimes, a package will function as a plugin
  to others, and so you’ll need a way to define what other packages
  yours is compatible with. The peerDependencies element allows you
  to do that.
- private – If you want to ensure that you can’t accidentally publish
  your package, then set private to false, and NPM will refuse to publish
  it (more to come on publishing in the next section).
- publishConfig – This element is an object that defines many pieces
  of metadata that come into play with publishing your package to the
  NPM registry. This includes things like tags and such. This can get
  fairly involved, and we won’t (for the most part) be worrying about
  any of it in this book beyond a few words in the next section, so I’ll
  leave this one to the NPM documentation if and when you need it.
- repository – If you’d like to specify where the code for your package
  lives, whether GitHub or something else, whether public or private,
  the repository element is where you do that.
  https://github.com/luizrosalba/ArquiteturainternanoNodeefilas.md/blob/master/README.md

### Auditing Package Security

The sad reality is that, sometimes, packages you use will be discovered to have security
vulnerabilities, just like any other software you use. But, being aware of this, the NPM
team has constructed a useful command for dealing with this:

- npm audit
  Running this command will scan your package.json file (or global packages if you
  use -g) and submit the list of dependencies to the default NPM registry requesting a
  report on any known vulnerabilities in them. This report will also include information on
  how to remediate. But, if you want the quick answer, execute this command:
- npm audit fix
  That will cause NPM to update any vulnerable packages with the newest available
  version that hasn’t had the vulnerability reported in it.
  If you’d like to see a detailed audit report, execute
- npm audit --json
  or, if you prefer plain text
- npm audit --readable
  Finally, if you’d like to see what npm audit fix would do but without literally doing
  it, you can use
- npm audit fix --dry-run

### Updating Packages

Once you have a project set up, you may on occasion want to update the packages it
depends on. This is very easy to do:

- npm update
  Yep, that’s it! NPM will go off and update all packages to the latest version, respecting
  your SemVer settings. You naturally can stick a -g in there too in order to update global
  packages.

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

```Usei
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

```embaixo
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
{
    "nome" : "curso" , 
    "price": 3 
}
```

-POST  http://localhost:7071/api/products/

- 201 created
- ao dar get percebemos o produto criado

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

```Javascript
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

## Clean Code

https://github.com/luizrosalba/clean-code-javascript
