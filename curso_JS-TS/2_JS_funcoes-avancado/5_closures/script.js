// escopo global
function retornaFuncao(nome) { // escopo
    return function() { // escopo
        return nome;
    };
}

const funcao = retornaFuncao('Hugo');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());