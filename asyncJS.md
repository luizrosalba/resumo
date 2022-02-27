# Become an expert in Asynchronous JavaScript: Promises, Callbacks, Async Await, Event Loop, etc.

Link https://github.com/luizrosalba/asynchronous-javascript-tutorial

- Sync blocking call - no func are called until finished 
- Async non Blocking call - others funcs are called. Callback is called when finishes 

## How JS code engine executes code 

1) Message Queue 
2) Call Stack 

Event loop : 

1) create global execution function on top of call stack 
2) create function execution context on the top of call stack 
3) after finished,  the top execution gets removed 
4) repeat for all functions 
5) on finish , a new task referencing the callback is added to message Queue 
6) The callback will be invoked when callStack is empty
7) File finishes, global execution is removed from call stack 
8) Every time CallStack is empty Js checks for message Queue 
9) Js Will create a context for executing Message Queue task 
10) Execute the callback 
11) Remove from callstack
12) Message Queue and callstack are empty, end of processing 

sync printing 

```JS
console.log(1);
console.log(2);
console.log(3);
console.log(4);
```

async print out of order 

```JS
function print1() {
    const number1 = 1;
    console.log(number1);
}


function print2() {
    function getNumber2() {
        return 2;
    }
    const number2 = getNumber2();
    console.log(number2);
}


function print3() {
    const fs = require('fs');
    fs.readFile('./number3.txt', 'utf-8', function (err, number3) {
        console.log(number3);
    });
}


function print4() {
    const number4 = 4;
    console.log(number4);
}

print1();
print2();
print3();
print4();
```


fixed async print out of order 

```JS
function print1() {
    const number1 = 1;
    console.log(number1);
}


function print2() {
    function getNumber2() {
        return 2;
    }
    const number2 = getNumber2();
    console.log(number2);
}


function print3() {
    const fs = require('fs');
    const callback = function (err, number3) {
        console.log(number3);
        print4();
    };
    fs.readFile('./number3.txt', 'utf-8', callback);
}


function print4() {
    const number4 = 4;
    console.log(number4);
}

print1();
print2();
print3();
```


## Callbacks 

- Any function passed as an arg to second  func and invoked within second func
- Funcs are objs that can be stored, passed as args , returned... 

```JS
function print(number) {
    console.log(number);
}
const numbers = [1, 2, 3, 4];
numbers.forEach(print);
```
- Try...catch mechanism can't be used with asynchronous functions async code will get executed after callStack is empty

```JS
function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            throw new Error('Argument of type number is expected');
        }
        const result = number * number;
        callback(result);
    }, 1000);
}

// Try...catch mechanism can't be used with asynchronous functions
try {
    calculateSquare('bad argument', function (result) {
        console.log(result);
    });
} catch (error) {
	console.log('Caught error: ' + String(error));
}
```

## Error first callbacks are a pattern for using async callbacks 

```JS
// Example of error-first callbacks
function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

calculateSquare('bad argument', function (error, result) {
    if (error !== null) {
        console.log('Caught error: ' + String(error));
        return;
    }
    console.log(result);
});
```

## Callbacks are dirty, callback hell

```JS
// Declaring calculateSquare function
function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

// Invoking calculateSquare function for numbers from 1 to 6 sequentially (one after another)
// This is an example of a callback hell
calculateSquare(1, function (error, result) {
     console.log(result);
     calculateSquare(2, function (error, result) {
         console.log(result);
         calculateSquare(3, function (error, result) {
             console.log(result);
             calculateSquare(4, function (error, result) {
                  console.log(result);
                  calculateSquare(5, function (error, result) {
                       console.log(result);
                       calculateSquare(6, function (error, result) {
                            console.log(result);
                       });
                  });
             });
         });
     });
});
```
- widely used in JS 
- if 2nd function needs to execute after 1st func we need to move 2nd func inside 1st func (callback hell)


## Testing Callbacks 

- test async is harder then test sync 
- moka and chai 

## Promise

- Special JS obj that represents an eventual result of async actions 
- read file , HTTP requests, ... 
- Pass a callback or return a promise
- PromiseStatus
- PromiseValue 
Promises can be: 
1) Pending (value undefined)
2) Fulfilled (value defined)
3) Rejected (reason for failed promise)

##  How to create a promise 

```JS
// This promise will reject with the reason === 'reason'
const myPromise = new Promise(function (resolve, reject) {
    reject('reason');
});
console.log(myPromise);
```

```JS
// This promise will resolve with the value === 'value'
const myPromise = new Promise(function (resolve, reject) {
    resolve('value');
});
console.log(myPromise);
```

##  Final state of promises

- fullfiled state is the final state of a promise which cannot be changed 

```JS
// This promise will be resolved with the value 'value'
const myPromise = new Promise(function (resolve, reject) {
    resolve('value');
    resolve('value2');
    reject('reason');
});
console.log(myPromise);

// This promise will be rejected with the reason 'reason'
const myPromise = new Promise(function (resolve, reject) {
    reject('reason');
    resolve('value');
    resolve('value2');
});
console.log(myPromise);
```

## How to use promise : 

```JS
// Functions inside .then are called asynchronously
const myPromise = new Promise(function (resolve, reject) {
    resolve('Hello world');
});
myPromise.then(value => {
    console.log('This is inside onFulfilled function');
});
console.log('This is written after myPromise.then');

```
## Example using promises 

```JS
// Declaring calculateSquare function
function calculateSquare(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
}

// Example of invoking calculateSquare function with correct arguments
calculateSquare(2)
  .then(value => {
        console.log('Success: ' + value);
    }, error => {
        console.log('Error: ' + error);
    });

// Example of invoking calculateSquare function with incorrect arguments
calculateSquare('string')
  .then(value => {
        console.log('Success: ' + value);
    }, error => {
        console.log('Error: ' + error);
    });
```
## Promisifing a function 

This example shows how to create a DB and use CAllbacks and promises to query db 

https://github.com/luizrosalba/asynchronous-javascript-tutorial/tree/master/5-promises/promisify-any-function

## Chaining promises 

```JS
function calculateSquare(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
}

// Prints "1" and then "undefined"
calculateSquare(1)
    .then(value => {
        console.log(value);
    })
    .then(value2 => {
        console.log(value2);
    });

// Prints "1" and then "25"
calculateSquare(1)
    .then(value => {
        console.log(value);
        return 25;
        // value2 will become 25.
    })
    .then(value2 => {
        console.log(value2);
    });

// Prints "1" and then "error happened: Error: error"
calculateSquare(1)
    .then(value => {
        console.log(value);
        throw new Error('error');
    })
    .then(value2 => {
        console.log(value2);
        // In order to handle the error, we need to add onRejected function as a 2nd argument
    }, reason => {
        console.log('error happened: ' + reason);
    });

// Prints "1" and then "4"
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value2 => {
        console.log(value2);
    }, reason => {
        console.log('error happened: ' + reason);
    });

// Prints "1" and then "error happened: Error: Argument of type number is expected"
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare('string');
    })
    .then(value2 => {
        console.log(value2);
    }, reason => {
        console.log('error happened: ' + reason);
    });

```

## Using Fetch API with promise 

```JS
// Example of using Fetch API
fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
    .then(response => {
        console.log(response);        
        return response
    })
    .then(response => response.json())
    .then(data => console.log(data))

```
## Avoiding callback hell 

```JS
// Declaring calculateSquare function
function calculateSquare(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
}

calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(3);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(4);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(5);
    })
    .then(value => {
        console.log(value);
        return calculateSquare(6);
    })
    .then(value => {
        console.log(value);
    });

```
## Handling promises rejections 

```JS
function calculateSquare(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
    return promise;
}

// If you run this code, we will see the message "Something went wrong".
calculateSquare(1)
    .then(value => {
        console.log(value);
        throw new Error('Something went wrong');
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
    }, reason => {
        console.log('error happened: ' + reason);
    });

// If I move the error to the 2nd then, it will not be caught.
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        throw new Error('Something went wrong');
    }, reason => {
        console.log('error happened: ' + reason);
    });

// In order to catch the error,
// we need to extract onRejected function from the 2nd then method
// and create a 3rd then method.
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        throw new Error('Something went wrong');
    })
    .then(undefined, reason => {
        console.log('error happened: ' + reason);
    });

// Rewrite previous example with catch
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        throw new Error('Something went wrong');
    })
    .catch(reason => {
        console.log('error happened: ' + reason);
    });

// Instead of throwing an error we could also return a rejected promise
calculateSquare(1)
    .then(value => {
        console.log(value);
        return calculateSquare(2);
    })
    .then(value => {
        console.log(value);
        return new Promise((resolve, reject) => {
            return reject('Something went wrong');
        });
    })
    .catch(reason => {
        console.log('error happened: ' + reason);
    });

```

## Promise resolve and reject 

```JS
// This function accepts a promise as an argument
function logToConsole(somePromise) {
	somePromise.then(value => console.log(value));
}

// Create a promise and pass this promise to logToConsole function
const somePromise = new Promise(
    (resolve, reject) => resolve('Hello')
);
logToConsole(somePromise);

// If we pass a non-promise value to logToConsole function, it will throw an error
const value = 'string';
logToConsole(value)

// We can create a resolved promise out of any value
const promisifiedValue = Promise.resolve(value);
logToConsole(promisifiedValue);

// We can create a rejected promise out of any value
const rejectedPromise = Promise.reject(value);
const rejectedPromise2 = Promise.reject(new Error('some error'));

```
## Parallel Promises

```JS
// Declare 3 functions which imitate the Dealer API
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}
function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);
    });
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

// Invoke these 3 functions in parallel
Promise.all([
    askFirstDealer(), 
    askSecondDealer(), 
    askThirdDealer()
])
.then(prices => {
    console.log(prices);
});

```

## How Promise deals with rejection 

Several behavious are possible 

```JS
// Declare 3 functions which imitate the Dealer API
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}
// askSecondDealer returns a promise that becomes rejected after 5 seconds
function askSecondDealer() {
    return new Promise((resolve, reject) => {
    	setTimeout(() => reject('Not suitable car'), 5000);
    });
}
function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

// The promise returned by Promise.all
// will be rejected with a reason 'Not suitable car'.
Promise.all([
    askFirstDealer(), 
    askSecondDealer(), 
    askThirdDealer()
])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log(error);
    })


// This time Promise.all will return a resolved promise
Promise.all([
    askFirstDealer().catch(error => { return error }),
    askSecondDealer().catch(error => { return error }),
    askThirdDealer().catch(error => { return error })
])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log(error);
    })

// This time Promise.all will be rejected immediately
Promise.all([
    askFirstDealer().catch(error => { return error }),
    askSecondDealer().catch(error => { return error }),
    askThirdDealer().catch(error => { return error }),
    Promise.reject('rejected for some reason')
])
    .then(prices => {
        console.log(prices);
    })
```
## Promise.race 
Get only result of fastest promise 

```JS
// Each of these functions returns a promise.
// John answers in 3 seconds, and he has an extra pen.
var askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yep, I got one extra pen.'), 3000);
    });
}
// Eugene answers in 5 seconds, and he doesn't have an extra pen.
var askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Sorry man, got only one.'), 5000);
    });
}
// Susy answers in 2 seconds, and she also has an extra pen.
var askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sure, I have a pen for you!'), 2000);
    });
}

// Promise.race takes an array of values as an argument.
Promise.race(
    [askJohn(), askEugene(), askSusy()]
)
    .then(value => {
        // Unlike Promise.all, We have only 1 value here,
        // and it is the result of the fastest promise in the array.
        console.log(value)
    })
    .catch(reason => {
        console.log('Rejected: ' + reason)
    });


```

## Testing Promises

1) Setting environment
2) Testing using mocha and chai 
3) Timeouts in mocha 
4) Making multiple promise Assertions in one test 

https://github.com/luizrosalba/asynchronous-javascript-tutorial/tree/master/6-testing-promises

## Async in JS 


```JS
// If you return a non-promise value from an async function,
// JavaScript will automatically wrap it into a promise.
async function f() {
    return 'Hello World';
}

console.log(f() instanceof Promise === true);

// If you return a promise from an async function,
// JavaScript will not make any transformations on it.
async function f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 5000);
    });
}

console.log(f() instanceof Promise === true);

// you can also return a rejected promise from this function.
async function f() {
    return Promise.reject(404);
}
```

## Await 

```JS
function getSpecificNumber() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(42), 2000);
	});
}

// There is a waiting time of 2 seconds
// before this number gets printed to the console.
async function f() {
	const randomNumber = await getSpecificNumber();
	console.log(randomNumber);
}


// This is the same as above (async-await are only syntax sugar)
function f() {
	getSpecificNumber()
		.then(randomNumber => console.log(randomNumber));
}

```
## Using async await in a fetch api 

```JS
// Function using promise like syntax (.then)
function getRandomDogImage() {
	fetch('https://dog.ceo/api/breeds/image/random')
	    .then(response => response.json())
	    .then(value => console.log(value.message));
}

// The same function using async await syntax
async function getRandomDogImage() {
	let response = await fetch('https://dog.ceo/api/breeds/image/random');
	value = await response.json();
	console.log(value.message);
}
```

## top level await 

Await keyword does not work in top level function (only on browser, not on Node)

Ex: works in browser console but not in NodeJs

```JS
   function getNumber() {
       return new Promise ((resolve, reject) => {
           setTimeout(()+> resolve (42),2000);
       })
   }

   const specificNumber = await getNumber(); 
   console.log(specificNumber);
```

Ex: works in node 

```JS
   function getNumber() {
       return new Promise ((resolve, reject) => {
           setTimeout(()+> resolve (42),2000);
       })
   }
   /// IIF
    (async function (){
        const specificNumber = await getNumber(); 
        console.log(specificNumber);
    })();

```

- workaround (use module js (mjs) instead of js )

File : async.mjs 
Execute : node async.mjs  (^node:14.8)

```JS
   function getNumber() {
       return new Promise ((resolve, reject) => {
           setTimeout(()+> resolve (42),2000);
       })
   }
   const specificNumber = await getNumber(); 
   console.log(specificNumber);
```

- workaround 2 

File : async.js 
Execute : node async.js 
on package.json add (below "licence" key)
```JS
    "type": "module"
```







