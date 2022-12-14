
// 'if' pode ser usado sozinho.
// Sempre que utilizo a palavra 'else', preciso de um 'if' antes;
// Posso ter vários 'else if' na checagem;
// Só posso ter um 'else' na checagem;
// Podemos usar condições sem 'else if', utilizando apenas 'if' e 'else'.


function saudacao(hora) {

    if(hora >= 0 && hora < 12) {
        console.log('Bom dia');
    } else if (hora >= 12 && hora < 18) {
        console.log('Boa tarde');
    } else if (hora > 18 && hora < 24) {
        console.log('Boa noite');
    } else {
        console.log('Digite a hora correta.')
    }
}

saudacao(23);
