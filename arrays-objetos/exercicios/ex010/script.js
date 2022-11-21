let calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    },
}

console.log(calculadora.somar(2,5));
console.log(calculadora.subtrair(10,5));
console.log(calculadora.multiplicar(2,5));
console.log(calculadora.dividir(6,3));