/* const pessoa1 = new Object();
pessoa1.nome = 'Hugo';
pessoa1.sobrenome = 'Luiz';
pessoa1.idade = 29;
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for(let chave in pessoa1) {
    console.log(pessoa1[chave]);
} */

/* const pessoa2 = {
    nome: 'Hugo',
    sobrenome: 'Luiz'
}; */


//------ Factory functions --------
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const p1 = criaPessoa('Hugo', 'Luiz');
//console.log(p1.nomeCompleto)

//-----------constructor functions -----------
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

//
const p2 = new Pessoa('Hugo', 'Luiz');
p2.nome = 'Mude o nome'
const p3 = new Pessoa('Maria', 'Campos');

console.log(p2);
console.log(p3);











