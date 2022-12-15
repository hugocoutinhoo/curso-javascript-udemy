// Escopo léxico
const nome = 'Hugo';

function falaNome() {
    
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Coutinho'
    falaNome();
}
usaFalaNome();