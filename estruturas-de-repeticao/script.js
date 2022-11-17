/* while
let x = 1;

while (x <= 10) {
    console.log(x);
    x = x + 1;
}

let y = 10;

while (y > 0) {
    console.log(y);
    y = y - 1;
} */



/* do while 
let x = 100;

do {
    console.log(x/2);
    x = x - 5
} while (x >= 0); */



/* for 
for(let num = 2; num < 100; num = num * 2) {
    console.log("O número é: " + num);
} */

/* SAÍDA DE LOOP COM: break */

let nome = "Luiz";

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
        nome = "Hugo";
    }

    if(i == 6 && nome == "Hugo") {
        console.log("O nome é Hugo, pode parar.");
        break;
    }

    console.log(i);
}

/* PULAR A EXECUÇÃO DO LOOP COM: continue */

for(let i = 10; i > 0; i = i - 1) {

    if(i % 2 == 0) {
        console.log("Caiu no continue");
        continue;
    }

    console.log(i);
}



