class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }
    
    latir() {
        console.log('Au au')
    }

    get getCor() {
        return this.cor
    }

    set setCor(cor) {
        this.cor = cor
    }

}

let labrador = new Cachorro('Labrador', 'sem cor')

console.log(labrador)

labrador.setCor = 'Marrom'
console.log(labrador.getCor)

