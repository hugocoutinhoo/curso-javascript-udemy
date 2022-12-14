class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }
    latir() {
        console.log('Au au')
    }
}

let patas = Symbol()

Cachorro.prototype[patas] = 4

let labrador = new Cachorro('Labrador', 'preto')

// acessando symbol
console.log(Cachorro.prototype[patas])