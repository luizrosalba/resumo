

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
   



function SorteiaeValidaBimestres (alvo)
{
    let max = 1; 
    let min = 0; 
    saida = { 
        mais: 0, 
        menos:0,
    }
    let valida=false;
    do {
        sort = Math.random() * (max - min) + min;
        rand= parseFloat(sort.toFixed(1))
        saida.mais   = (parseFloat(alvo)+rand).toFixed(1);
        saida.menos  = (parseFloat(alvo)-rand).toFixed(1);
        (saida.menos>0 && saida.mais<=10)?valida=true:""; 
    }while (valida!==true)
    return saida; 
}
function SorteiaeValidaAtividades(alvo)
{
    let max = 1; 
    let min = 0; 
    saida = { 
        mais: 0, 
        menosmais:0,
        menos2:0,
    }
    let valida=false;
    do {
        sort = Math.random() * (max - min) + min;
        rand= parseFloat(sort.toFixed(1))
        saida.mais    = parseFloat((parseFloat(alvo)+ rand).toFixed(1));
        metadeRand = (rand/2); 
        sort2 = Math.random() * (max - min) + min;
        rand2 = parseFloat(sort2.toFixed(1))
        saida.menos2      = parseFloat((parseFloat(alvo)- (metadeRand-rand2)).toFixed(1));
        saida.menosmais   = parseFloat((parseFloat(alvo)- (metadeRand+rand2)).toFixed(1));
        
        (saida.menos2 > 0 &&  saida.menos2 <= 10 && saida.mais <= 10 && saida.menosmais<=10)?valida=true:""; 
    }while (valida!==true)
    return saida; 
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
    
    /// gerar 4 numeros que a média vale alvo 
    /// so funciona para num bim pares 
    
        let numBim = 4; 
        var notasBim = {
            idAluno: 0, 
            alvo: 0.0,
            notas: [],
            notasAtividades: []
        };
        var atividades = {
            idBim: 0, 
            notas: []
        }
        let vecNotas = [];

        let numNotasPorBimestre = 3 ; 
        let rand;
        let max = 2; 
        let min = 0; 
        ent.forEach( (e,i) => {
            //console.log(e);
            notasBim.idAluno = i ; 
            notasBim.alvo = e ; 
            /// gerando os bimestres 
            for (let index = 0; index < numBim; index=index+2) 
            {
                sort = Math.random() * (max - min) + min;
                rand= parseFloat(sort.toFixed(1))
                let saida = SorteiaeValidaBimestres(notasBim.alvo); 
                notasBim.notas[index]   = saida.mais;
                notasBim.notas[index+1] = saida.menos;
            }
            /// gerando as atividades 
            /// para cada bimestre numNotasPorBimestre
            for (let index = 0; index < numBim; index++)  /// para cada bimestre gera 3 notas 
            {
                    sort = Math.random() * (max - min) + min;
                    rand= parseFloat(sort.toFixed(1))
                    atividades.idBim = index; 
                    let saida = SorteiaeValidaAtividades(notasBim.notas[index]); 
                    atividades.notas.push(saida.mais);
                    atividades.notas.push(saida.menos2);
                    atividades.notas.push(saida.menosmais);
                    notasBim.notasAtividades.push(atividades.notas);
                    atividades = {
                        idBim: 0, 
                        notas: []
                    }
            }
            // console.log(notasBim)
            vecNotas.push(notasBim);
            //}
            notasBim = {
                idAluno: 0, 
                alvo: 0.0,
                notas: [],
                notasAtividades: []
            };
            console.log(i);
        });

        console.log(vecNotas[0]);

        vecNotas.forEach( e => {
            console.log(e.notasAtividades[0][0] + "," + "," +e.notasAtividades[0][1] + "," +"," + e.notasAtividades[0][2]+ "," +"," + e.notas[0]);
        });
        console.log(" ");
        vecNotas.forEach( e => {
            console.log(e.notasAtividades[1][0] + "," + "," +e.notasAtividades[1][1] + "," +"," + e.notasAtividades[1][2]+ "," +"," + e.notas[1]);
        });
        console.log(" ");
        vecNotas.forEach( e => {
            console.log(e.notasAtividades[2][0] + "," + "," +e.notasAtividades[2][1] + "," +"," + e.notasAtividades[2][2]+ "," +"," + e.notas[2]);
        });
        console.log(" ");
        vecNotas.forEach( e => {
            console.log(e.notasAtividades[3][0] + "," + "," +e.notasAtividades[3][1] + "," +"," + e.notasAtividades[3][2]+ "," +"," + e.notas[3]);
        });
        console.log(" ");


        

        
        
        

       
   
    //console.log(entInt.toFixed(0));
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


