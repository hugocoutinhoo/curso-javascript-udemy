//defineProperty -> Getter e Setters 

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, // pode reconfigurar a chave ou não
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Bad value');
            }
            estoquePrivado = valor;
        }

    });
}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);

// getter e setter em função contrutora

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
console.log(p2.nome);










