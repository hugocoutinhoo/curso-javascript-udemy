// FOR IN -> Lê os ínidices ou chaves do objeto.

/* const frutas = ['maçã', 'pêra', 'uva', 'banana', 'melancia', 'manga', 'graviola']; */

/* for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
} */

//------------------------------- for in -------------------------------------
/* const frutas = ['maçã', 'pêra', 'uva', 'banana', 'melancia', 'manga', 'graviola']; */

/* for (let i in frutas) {
    console.log(frutas[i]);
} */

//---------------------
const pessoa = {
    nome: 'Hugo',
    sobrenome: 'Luiz',
    idade: 29
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

