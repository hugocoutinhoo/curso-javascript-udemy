let cachorro = {
    raca: 'Sem raça definida',
    patas: 4,
    latir: function () {
        console.log('Au au')
    }
}

let pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = 'Pastor Alemão'

console.log(pastorAlemao.raca)
pastorAlemao.latir()

let goldenRetriever = Object.create(cachorro)
goldenRetriever.raca = 'Golden Retriever'

console.log(goldenRetriever.raca)
goldenRetriever.latir()

let labrador = Object.create(cachorro)
labrador.raca = 'Labrador'

console.log(labrador.raca)
labrador.latir()

console.log(labrador.patas)

console.log(Object.getPrototypeOf(labrador) === cachorro);

console.log(cachorro.raca)

