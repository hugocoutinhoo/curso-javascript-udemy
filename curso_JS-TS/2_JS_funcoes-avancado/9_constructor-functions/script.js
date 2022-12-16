// funções construtoras -> constrói objetos
// funções fábrica -> fabrica objetos
// construtora --> Pessoa (new)
function Pessoa (nome, sobrenome) {
    //Atributos ou métodos privados
    const id = 123456;
    const metodoInterno = () => {

    };
    
    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método.');
    };
}

const p1 = new Pessoa('Hugo', 'Coutinho');
const p2 = new Pessoa('Mirelly', 'Katryn');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
