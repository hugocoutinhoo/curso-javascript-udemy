// factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto = 'JavaScript') {
            return `${nome} está falando sobre ${assunto}.`;
        },
        altura,
        peso,
        // getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Hugo', 'Coutinho', 1.82, 94);
p1.nomeCompleto = 'Hugo Luiz Cavalcante';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())

// this.nome = p1.nome
