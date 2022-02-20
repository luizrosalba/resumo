# Become an expert in Asynchronous JavaScript: Promises, Callbacks, Async Await, Event Loop, etc.

Link https://github.com/luizrosalba/asynchronous-javascript-tutorial

- Sync blocking call - no func are called until finished 
- Async non Blocking call - others funcs are called. Callback is called when finishes 

How JS code engine executes code 

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

```
console.log(1);
console.log(2);
console.log(3);
console.log(4);
```

async print out of order 

```
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

```
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

```
function print(number) {
    console.log(number);
}
const numbers = [1, 2, 3, 4];
numbers.forEach(print);
```
- Try...catch mechanism can't be used with asynchronous functions async code will get executed after callStack is empty

```
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

- Error first callbacks are a patter for using async callbacks 

```
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
- Callbacks are dirty, callback hell
```
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
- 

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

- How to create a promise 

```
// This promise will reject with the reason === 'reason'
const myPromise = new Promise(function (resolve, reject) {
    reject('reason');
});
console.log(myPromise);
```

```
// This promise will resolve with the value === 'value'
const myPromise = new Promise(function (resolve, reject) {
    resolve('value');
});
console.log(myPromise);
```

 - Final state of promises

https://github.com/luizrosalba/asynchronous-javascript-tutorial/blob/master/5-promises/final-states-of-the-promise/examples.js

## Testing Promises

## Async Await

