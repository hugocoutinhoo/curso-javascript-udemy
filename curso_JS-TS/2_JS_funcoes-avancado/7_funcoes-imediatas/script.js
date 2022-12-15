// IIFE (Immediately invoked function expression)
(function (idade, peso, altura) {

    const sobrenome = 'Cavalcante';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Hugo'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(29, 94, 1.82);


