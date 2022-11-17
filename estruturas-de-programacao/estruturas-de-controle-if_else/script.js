let idade = 16;

if(idade >= 18 && idade <= 65) {
    console.log("Seu voto é obrigatório.")
} else if (idade < 18 && idade >= 16) {
    console.log("Seu voto é facultativo.")
} else if (idade < 16) {
    console.log("Você ainda não pode votar.")
} else {
    console.log("Seu voto é facultativo.")
}