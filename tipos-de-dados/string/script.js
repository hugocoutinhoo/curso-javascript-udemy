console.log(typeof 'Isso é uma string');
console.log(typeof "Este texto também é uma string")
var nome = "Hugo Luiz";
console.log(`Meu nome é ${nome}`);
console.log(nome.charAt(6)) 
console.log(nome.concat(' ', 'Cavalcante', ' ', 'Coutinho da Silva')) 
console.log(nome.indexOf('Luiz')) 
console.log(nome.lastIndexOf('Hugo')) 
console.log(nome.replace('Luiz', 'Coutinho')) 
console.log('Essa é uma string \n de duas linhas.')

var texto = 'O rato roeu a roupa do rei de roma.'
console.log(texto.replace(/r/g, '#'))
console.log(texto.length)
console.log(texto.slice(2, 6))
console.log(texto.split(' ', 3))