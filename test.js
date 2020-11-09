var expect = require("chai").expect;
var exportado = require("./uri.js");


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

function leSaida(){
  var input = require('fs').readFileSync('./saida.txt', 'utf-8');
  var lines = input.split('\n');
  let ent = formataEntrada(lines);
  let esperado = ent.slice(); /// copia 
  return esperado;
}

leSaida();
exportado();
describe("teste da funcao", function() {
    it("Compara a saida do programa com um arquivo de saida", function() {
        let saidaDoPrograma = exportado();
        let saidaReferencia =  leSaida();
        console.log('Saida do programa',saidaDoPrograma);
        console.log('Saida de Referência',saidaReferencia);
        expect(saidaDoPrograma).deep.to.equal(saidaReferencia); // passes
    });
});