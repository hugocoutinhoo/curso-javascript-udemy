function contadorDeCaracteres(texto) {
    if (texto.length > 20) {
        console.log("Texto muito longo")
    } else {
        console.log("Texto dentro do limite")
    }
    console.log(texto.length)
}


contadorDeCaracteres("Eu vou aprender a usar o JS.");
contadorDeCaracteres("Eu te amo");
