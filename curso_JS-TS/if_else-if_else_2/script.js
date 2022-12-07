
// 'if' pode ser usado sozinho.
// Sempre que utilizo a palavra 'else', preciso de um 'if' antes;
// Posso ter vários 'else if' na checagem;
// Só posso ter um 'else' na checagem;
// Podemos usar condições sem 'else if', utilizando apenas 'if' e 'else'.

const numero = 10;

if (numero < 10) {
    console.log('O número é menor que 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número não está entre 0 e 11.');
}

console.log('...Aqui vai o resto do código.')
