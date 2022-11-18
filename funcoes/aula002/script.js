function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,6,7);
console.log(`O valor da multiplicação é ${mult}`)

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Você tem 18 anos e já possui CNH")
    } else if (idade >= 18 && cnh == false) {
        console.log("Você tem 18 anos mas não possui CNH")
    } else if (idade < 18) {
        console.log("Você não tem idade para possuir CNH.")
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(18, false));
console.log(podeDirigir(15));
