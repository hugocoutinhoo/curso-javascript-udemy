function contadorPar(num) {
    for(let i = num; i >= 0; i--) {
        if(i % 2 == 0 && i != 0) {
            console.log(i)
        }
    }
}

contadorPar(20);
contadorPar(42);