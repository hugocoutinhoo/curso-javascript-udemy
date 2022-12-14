/* function maiorNumero (x, y) {
    if (x > y) {
        console.log(`O número ${x} é maior que o número ${y}`)
    } else if (y > x) {
        console.log(`O número ${y} é maior que o número ${x}`)
    } else {
        console.log('Os números são iguais.')
    }
}
maiorNumero(11, 10); */

//-------------------------------------------------------------------
function max(x, y) {
    if (x > y) return x;
    return y;
}
console.log(max(10, 12))

//-------------------------------ternário---------------------------
function max(x, y) {
    return x > y ? x : y;
}
console.log(max(10, 12))

//----------------------------arrow function-------------------------
const max2 = (x, y) =>  x > y ? x : y;

console.log(max(10, 12))