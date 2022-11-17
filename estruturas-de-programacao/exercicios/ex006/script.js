let idade = 18;
let cnh = false;

if(idade < 18) {
    console.log("Você ainda não tem idade para tirar sua CNH.")
} else if (idade >= 18 && cnh == true) {
    console.log("Você já possui CNH.");
} else if (idade >= 18 && cnh == false) {
    console.log("Você ainda não possui CNH.")
}

