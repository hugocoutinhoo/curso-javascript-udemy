// Reduce -> 


//Some todos os números
//Retorne um array com os números pares (filter)
//Retorne um array com o dobro dos valores (map) 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaNumeros = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0); // valor inicial do acumulador

console.log(somaNumeros);

// Melhor fazer com o .filter()
/* const numerosPares = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor); 
        return acumulador;
    
}, []);
console.log(numerosPares);
 */

// Melhor fazer com o .map()
/* const numerosDobrados = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(numerosDobrados)
 */


// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0);

console.log(maisVelha);



