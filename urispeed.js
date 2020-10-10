var input = require('fs').readFileSync('G:\\DIO\\resumo\\entrada.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var start = new Date()
var hrstart = process.hrtime()
var simulateTime = 0;

setTimeout(function (argument) {
    // execution time simulated with setTimeout function







    var i;
    let nk = lines[0].split(" ").map( Number );;
    let S = lines[1].split(" ").map( Number );
    var l= nk[1];
    let saida = Array(S.length).fill(0);
    for (i = 1; i <= l ; i++) 
    {
        S.forEach((val, ind) => {
            saida[ind] += (val)
        });
        S.unshift(S.pop());
    }
    console.log(saida.join(" "));
    
    











    var end = new Date() - start;
    hrend = process.hrtime(hrstart);
    console.info('Execution time: %dms', end)
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}, simulateTime)












