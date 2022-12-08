const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { //Adicionar evento
    e.preventDefault(); //
    console.log('Evento prevenido');
    setResultado('Resultado');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = 'Qualquer coisa';
}