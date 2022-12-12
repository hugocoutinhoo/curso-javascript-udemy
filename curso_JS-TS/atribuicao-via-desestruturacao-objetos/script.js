const pessoa = {
    nome: 'Hugo',
    sobrenome: 'Coutinho',
    idade: 29,
    endereco: {
        rua: 'Av. Ulisses Montarroyos',
        numero: 4019,
        complemento: 'Apto 302'
    }
};

//Atribuição via desestruturação
const { nome, ...resto} = pessoa;

console.log(nome, resto);

