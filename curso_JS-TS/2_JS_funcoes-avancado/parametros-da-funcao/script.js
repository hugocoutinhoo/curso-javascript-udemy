// argumentos que sustenta todos os argumentos enviados.
function funcao() {
    let total = 0;
    for(argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//---------------------------------------------------------
// rest operator (sempre deve ser o último parâmetro da função)
const conta = function (operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;       
    }
    console.log(acumulador);
};
conta('+', 0, 20, 30, 40, 50);
//---------------------------------------------------------