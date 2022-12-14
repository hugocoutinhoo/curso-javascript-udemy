/*
function criaCachorro(raca, patas, cor) {
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.patas = patas
    cachorro.cor = cor
    cachorro.latir = function() {
        console.log('Au au')
    }
    return cachorro
}

let doberman = criaCachorro('Doberman', 4, 'preto')
let labrador = criaCachorro('Labrador', 4, 'marrom')
let pitbull = criaCachorro('Pitbull', 4, 'branco')

console.log(doberman)
console.log(labrador)
console.log(pitbull)
pitbull.latir()  

*/



//                               CONSTRUTOR POR new
/*
function cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.latir = function() {
        console.log('Au au')
    }
    return this
}

let husky = new cachorro('Husky', 4, 'cinza')
let buldogue = new cachorro('Buldogue', 4, 'branco')
let fox = new cachorro('Fox', 4, 'marrom')

console.log(husky)
husky.latir() 
*/

//                             CONSTRUTOR COM MÉTODO

function cachorro(raca, patas) {
    this.raca = raca
    this.patas = patas
}

cachorro.prototype.latir = function() {
    console.log('Au au')
}

let husky = new cachorro('Husky', 4)
console.log(husky)
husky.latir()



