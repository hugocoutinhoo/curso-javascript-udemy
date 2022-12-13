// específico para objetos iteráveis

const nomes = ['Hugo', 'Luiz', 'Cavalcante'];

//-----for clássico------
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
console.log('#####')

//------for in-------
for (let i in nomes) {
    console.log(nomes[i])
}
console.log('#####')

//------for of------
for (let valor of nomes) {
    console.log(valor)
}
console.log('#####')

//---------------um pouco sobre forEach --------
nomes.forEach(function (valor, indice) {
    console.log(valor, indice);
});

//-----------------------------------------------------------------

// for clássico -> geralmente com iteráveis (array ou strings)
// for in -> retorna o índice ou chave (array, strings ou objetos)
// for of -> retorna o valor em si (arrays ou strings)

