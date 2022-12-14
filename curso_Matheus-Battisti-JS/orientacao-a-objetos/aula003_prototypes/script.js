const pessoa = {
    maos: 2,
    pes: 2,
    cabeca: 1,
    olhos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa)

console.log(pessoaNova.maos)
console.log(pessoaNova.cabeca)

console.log(pessoaNova.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);