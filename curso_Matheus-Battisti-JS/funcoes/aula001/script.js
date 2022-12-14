/* function imprimirNoConsole() {
    console.log("Olá, mundo!");
}

imprimirNoConsole()

function imprimirUmNumero(num) {
    console.log(`O número é: ${num}`);
}

imprimirUmNumero(6);
imprimirUmNumero(3);

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio(); */


//FUNÇÃO QUE RETORNA VALOR: 
/* function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2,2)); */

//-----------------------------------------------------------------
//FUNÇÃO DENTRO DE VARIÁVEL (Função Anônima):
/* const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9)); */

//-----------------------------------------------------------------
//ARROW FUNCTIONS:
const raiz = n => n ** 0.5;
console.log(raiz(9));
