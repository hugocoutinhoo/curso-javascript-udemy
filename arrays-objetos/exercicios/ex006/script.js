let nomes = ["João", "Maria", "José", "Hugo", "Jesus", "Pedro"];

let nomes2 = ["João", "Maria", "José", "Jesus"];

let nums = [1, 2, 3, 4, 5];

function numeroDeElementos(arr) {
    if(arr.length < 5) {
        console.log("Poucos elementos")
    } else if(arr.length > 5) {
        console.log("Muitos elementos")
    } else {
        console.log("Número ideal de arrays")
    }
}

numeroDeElementos(nomes);
numeroDeElementos(nomes2);
numeroDeElementos(nums);
