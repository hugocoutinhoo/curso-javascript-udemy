// Map -> Sempre retorna um array com a mesma quantidade de elementos.

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map(valor => valor * 2);
console.log(numerosDobrados);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(valor => valor.nome);
console.log(nomes);

const idades = pessoas.map((obj) => ({idade: obj.idade}));
console.log(idades);

//Afetando o objeto original:
/* const comIds = pessoas.map(function(obj, indice) {
    obj.id = indice;
    return obj;
}); */

const comIds2 = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

console.log(pessoas);
console.log(comIds2);


