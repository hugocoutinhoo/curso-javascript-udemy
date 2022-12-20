/*
Object.values (lê os valores das chaves)
Object.entries (lê os valores e as chaves em arrays)
Object.assign(des, any) (copiar o objeto)
Object.getOwnPropertyDescriptor(o, 'prop') retorna o descritor da propriedade
...(spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {nome: 'produto', preco: 1.8};

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}

//console.log(produto)









