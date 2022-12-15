// Tratamento de erros: 
// try -> É executado quando não há erros 
// catch -> É executado quando há erros
// throw -> Lança erros 
// finally - > Sempre é executado

//--------------------------------------------------------------

/* function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.')
    }

    return x + y;
}

try {
    console.log(soma(5, 7));
    console.log(soma('a', 7));
    
} catch(err) {
    //console.log(err);
    console.log('Alguma coisa mais amigável para o usuário.')
} */

//-------------------------------------------------------------------

/* try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    
    try {
        console.log(a);
    } catch (err) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou FINALLY')
    }

} catch (err) {
    console.log('Tratando o erro')
} finally {
    console.log('FINALLY: Eu sempre sou executado')
} */

//-------------------------------------------------------------------
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:22')
    const hora = retornaHora();
    console.log(hora);
} catch(err) {
    //console.log('tratando erro')
} finally {
    console.log('Tenha um bom dia.')
}



