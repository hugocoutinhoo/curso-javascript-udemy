function tipoDeDado(dado) {
    if(typeof dado === 'string') {
        console.log("O dado digitado é uma string.")
    } else if(typeof dado === 'number') {
        console.log("O dado digitado é um number.")
    } else if(typeof dado === 'boolean') {
        console.log("O dado digitado é um boolean.")
    }
}

tipoDeDado("hugo");
tipoDeDado(23);
tipoDeDado(true);