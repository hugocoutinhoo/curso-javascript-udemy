//Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados.
let a = 'A';
let b = a; //Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

//Referência (mutáveis) - array, object, function -  Valores passados por referência.
let c = [1, 2, 3];
let d = c;
let e = d;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

c.push('Luiz');
console.log(e);