function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    });

}

function funcaoDoIntervalo() {
    console.log(mostraHora());
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer)
}, 4000);

setTimeout(function () {
    console.log('Olá Mundo!!')
}, 5000)