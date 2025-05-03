var input = require('fs').readFileSync('C:\\vscode\\resumo\\entrada.txt', 'utf8');
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



    function compareSecondColumn(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }




    let n = lines[0].split(" ").map( Number );
    let matNota = [1000,5,1001,10,1002,6];
    let i=1;
    while (i<=n){
        //matNota = lines[i].split(" ");
        matNota.sort(compareSecondColumn);
        console.log(matNota);

        i++;
    }

    console.log(n);
    
    











    var end = new Date() - start;
    hrend = process.hrtime(hrstart);
    console.info('Execution time: %dms', end)
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}, simulateTime)












