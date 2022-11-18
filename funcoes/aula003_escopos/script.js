let y = 10;

function imprimir() {
    let y = 150;
    console.log(y);
}

imprimir();

console.log(y);

/////////////////// 

let x = 10;

if(x > 5) {
    let x = 20;
    x++
    console.log(x);
}

console.log(x);

///////////////// ESCOPO ANINHADO (Nested Scopes)

let a = 10;

function multiplicar(x,y) {
    let a = x * y;

    if(a > 10) {
        let a = 0;

        console.log(a); //escopo do IF
    }

    console.log(a);
}

console.log(a); //escopo global

multiplicar(3,7);

