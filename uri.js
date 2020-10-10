var input = require('fs').readFileSync('G:\\DIO\\resumo\\entrada.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */


 
  
function troca (vec,passos)
{
    let saida = Array(vec.length).fill(0);  
    for (let i=1;i<=passos;i++)
    {
        vec.forEach( (val,ind) => {
            saida[ind]+=parseInt(val)
        });
        vec.unshift(vec.pop());
    }
    return saida; 
}

function Imprime (vec)
{
    saida ="";
    for (let i=0;i<vec.length;i++)
    {
        saida+= (i===vec.length-1? vec[i]:vec[i]+" ");   
    }
    console.log(saida);
}


    let nk = lines[0].split(" ");
    let S = lines[1].split(" ");
    a = (troca(S, parseInt(nk[1])));
    Imprime(a);









