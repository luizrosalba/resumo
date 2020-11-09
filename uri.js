

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

function gen() { 
    var input = require('fs').readFileSync('./entrada.txt', 'utf-8');
    var lines = input.split('\n');
    //console.log(lines[0].split(" ")); // entrada do uri 
    let ent = formataEntrada(lines);
    lines = ent.slice(); /// copia 
    return(lines)    ;
}

function validaSoNumero(ent)
{
    let regexNumber = /[0-9]+/g
    return (ent.match(regexNumber))?true: false; 
}

function validaOperador(ent)
{
    let regexOperator = /[*/]+/g
    return (ent.match(regexOperator))?true: false; 
}
   


//// funcao que deve ser executada no teste 
//module.exports = function programa() {  /// chai e mocha 
function programa() {   /// programa 
   
    
    /// Programa 
    //console.log(lines[0]);
    //let N = parseInt(lines[0]);
    let ent = gen(); // "Generator { }"
    
   // var N = parseInt(g.next().value);

    //let val = parseInt(g.next().value);
    //console.log(ent);
    let entInt = parseInt(ent);

    let num_anos= entInt/365;
    let nummeses= (entInt - (num_anos.toFixed(0)*365) )/30; 
    let numdias = entInt - (num_anos.toFixed(0)*365) - (nummeses.toFixed(0)*30) ;

   
    console.log(num_anos.toFixed(0)+ " ano(s)");
    console.log(nummeses.toFixed(0)+ " mes(es)");
    console.log(numdias.toFixed(0)+ " dia(s)");

    /// sera que o pribelam eh a funcao ? 

   // return saida;
}

programa();



// let entradas = gets();
// let valores = [];

// let regexNumero = /[0-9]+/g
// let regexOperador = /[*/]+/g

// for(let i=0; i<entradas; i++){
//   let valor = gets().split(" ");
  
//   if(valor[0].match(regexNumero) && valor[1].match(regexOperador)){
//     valores.push({
//       "numero": Math.trunc(parseInt(valor[0])),
//       "operador": valor[1]
//     });
//   }
// }

// let resultado = 1;

// for(valor of valores){
//   if(valor.operador === "*"){
//     resultado *= valor.numero;
//   }
//   else if(valor.operador === "/"){
//     resultado /= valor.numero;
//   }
// }

// console.log(resultado);


