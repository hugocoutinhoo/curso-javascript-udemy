let pessoa = {
    nome: "Hugo",
    idade: 29,
    profissao: "Desenvolvedor",

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

console.log(pessoa.nome)
console.log(pessoa.profissao)
console.log(pessoa.idade)
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();

// [] - arrays
// {} - objetos

/* let cachorro = {
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
cachorro.latir(); */

//// Adicionando e deletando propriedades ao longo do programa:
/* let pessoa2 = {
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

console.log(pessoa2.nome); */

//----------------------------------------------------------------------

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa1 = criaPessoa('Hugo', 'Luiz', 29);
const pessoa2 = criaPessoa('Maria', 'Luiza', 32);
const pessoa3 = criaPessoa('João', 'Costa', 19);

console.log(pessoa1.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa3.idade);