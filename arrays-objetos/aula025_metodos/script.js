/* const cachorro = {
    uivar: function() {
        console.log("Auuuuuuuuuuuu");
    },
    rosnar: function() {
        console.log('GRRRRRR');
    }
}

cachorro.uivar()
cachorro.rosnar() */

/* MAIS SOBRE MÉTODOS */

const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log("Auuuuuuuuuuuu");
    },
    rosnar: function() {
        console.log('GRRRRRR');
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca())
