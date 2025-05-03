

/// funcoes auxiliares 
function formataEntrada(lines) {
    let wsRegex;
    for (let i = 0; i < lines.length; i++) {
        wsRegex = /^\s+|\s+$/; // remove espaços em branco no inico e fim 
        lines[i] = lines[i].replace(wsRegex, "");
        wsRegex = /\r/g; // remove enter
        lines[i] = lines[i].replace(wsRegex, "");
        wsRegex = /  +/g; /// multiple spaces for 1 
        lines[i] = lines[i].replace(wsRegex, " ");
    }
    return lines;
}

function compara(v1,v2)
{
  var somat=0;
  let letrasv1 = v1.split("");
  //let uLetrasV1=  [...new Set(letrasv1)]  /// é para contar repetidas duas vezes 
  let letrasv2 = v2.split("");
 
  for (const letra of letrasv1) {
      for (const letra2 of letrasv2) {
        if(letra===letra2) somat++;
      }
  }
  return somat.toString();
}
//// funcao que deve ser executada no teste 
module.exports = function programa() {
//function programa() {
    var input = require('fs').readFileSync('./entrada.txt', 'utf-8');
    var lines = input.split('\n');
    //console.log(lines[0].split(" ")); // entrada do uri 
    let ent = formataEntrada(lines);
    lines = ent.slice(); /// copia 
    //console.log(lines);

    /// Programa 
    let saida = [];
    //console.log(lines);
    //// filtrando 
    let regexFinal = "";
    let regex = /[^a-zA-Z0-9]+/g;
    let i=0;
    let vec =[]
    let val1 , val2; 
    do{
        v1a = String(lines[i]);
        if(v1a !== "" && v1a!== "undefined")
        {
            v2a = String(lines[i+1]);
            val1 = v1a.replace(regex, regexFinal); // remove caracteres invalidos
            val2 = v2a.replace(regex, regexFinal);
            vec.push(val1);
            vec.push(val2);
        }
        i+=2;
    }while(v1a!=="" && v1a!=="undefined")
    
    for (let i =0 ; i < (vec.length/2) ; i++)
    {
        //console.log(vec[2*i],vec[2*i+1]);
        //console.log(2*i , 2*i+1);
        saida.push(compara(vec[2*i],vec[2*i+1]));
    }
    //console.log(saida);
    return saida;
}


