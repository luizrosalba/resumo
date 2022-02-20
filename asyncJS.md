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

## Callbacks 

## Testing callbacks 

## Promise

## Testing Promises

## Async Await

