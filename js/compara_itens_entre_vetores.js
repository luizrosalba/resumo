console.log("Inicio")

const antigo= [1,2,3]

const novo=  [4,5,6]

let nantigo = antigo.map(e => e[0])
let nnovo = novo.map(e => e[0])

let found = false 
let index = 0
let i = 0
let counter =0; 
let n ; 
let a ; 
for ( index = 0; index < nantigo.length; index++) {
    a = nantigo[index];
    found = false
    for ( i = 0; i < nnovo.length; i++) {
        n = nnovo[i];
        if(n===a)
            found=true
    }
    if (found===false){
        counter++
        //console.log(counter , " ",  a)
    }
        
}
console.log("counter deve ser 0", counter)
