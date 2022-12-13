const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// continue -> continua para próxima iteração
// break - > sai do laço
for (let numero of numeros) {
    
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }
    console.log(numero);

    if (numero === 7) {
        console.log('Número 7 encontrado. Saindo...');
        break;
    }
}