/* console.log(typeof (13));
console.log(typeof (3 + 2));
console.log(typeof (2 * 4 - 3));
console.log(typeof (5 * (2 + 4)));
console.log(typeof (5 / 3 + 1));
console.log(typeof (23 % 2));
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN); */


//IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0



//num1 = Number(num1.toFixed(2))

console.log(num1);
console.log(Number.isInteger(num1))

//console.log(num1.toString() + num2); // number para string
//console.log(num1.toString(2)) // Binário
//console.log(num1.toFixed(2)) // casas decimais
//console.log(Number.isInteger(num1)); // saber se o número é inteiro ou não.
//let temp = num1 * 'Olá';
//console.log(Number.isNaN(temp)); // saber se é um NaN