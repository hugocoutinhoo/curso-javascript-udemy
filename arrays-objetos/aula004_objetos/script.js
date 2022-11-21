let pessoa = {
    nome: "Hugo",
    idade: 29,
    profissao: "Desenvolvedor",
}

console.log(pessoa.nome)
console.log(pessoa.profissao)
console.log(pessoa.idade)

// [] - arrays
// {} - objetos

let cachorro = {
    patas: 4,
    nome: "Dengo",
    cor: "Preto",
    latir: function() {
        console.log("Au, Au!")
    }
}

console.log(cachorro.patas);
console.log(cachorro.nome);
console.log(cachorro.cor);
cachorro.latir();

//// Adicionando e deletando propriedades ao longo do programa:
let pessoa2 = {
    nome: "Luiz",
    idade: 29,
    profissao: "Estudante"
}
console.log(pessoa2.nome);
//deletando propriedade:
delete pessoa2.nome;

console.log(pessoa2.nome);
//adicionando propriedade:
pessoa2.nome = "Luiz"

console.log(pessoa2.nome);