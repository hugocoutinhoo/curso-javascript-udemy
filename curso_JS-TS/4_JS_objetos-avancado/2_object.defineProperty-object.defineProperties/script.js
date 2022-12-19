// defineProperty  -  

/* function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode alterar ou não
        configurable: false // pode reconfigurar a chave ou não
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 500000; -- writable
//delete p1.estoque; -- configurable
console.log(Object.keys(p1)); // -- enumerable
for (let chave in p1) {
    console.log(chave);
} */

//-----------defineProperties------------------------

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode alterar ou não
        configurable: false // pode reconfigurar a chave ou não
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: preco,
            writable: true, 
            configurable: true 
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 500000; 
//delete p1.estoque; 
console.log(p1)

for (let chave in p1) {
    console.log(chave);
} 








