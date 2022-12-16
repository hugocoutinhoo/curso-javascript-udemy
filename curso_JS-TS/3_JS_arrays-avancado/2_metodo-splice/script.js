const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];



//splice:
//nomes.splice(indice, delete qtd de elementos, elemento para adicionar );
const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');

console.log(nomes, removidos);



//simulando pop:
//const removidos = nomes.splice(-1, 1);
//console.log(nomes, removidos);

//simulando shift:
//const removidos = nomes.splice(0, 1);
//console.log(nomes, removidos);

//simulando push:
//nomes.splice(nomes.length, 0, 'Luiz');
//console.log(nomes);

//simulando unshift:
//nomes.splice(0, 0, 'Luiz', 'Otávio');
//console.log(nomes);