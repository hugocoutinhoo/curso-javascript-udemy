let pessoa = {
    nome: "Hugo",
    idade: 29
}

let pessoa2 = {
    profissao: "Desenvolvedor",
    altura: 1.82
}

console.log(pessoa);

Object.assign(pessoa, pessoa2);

console.log(pessoa);