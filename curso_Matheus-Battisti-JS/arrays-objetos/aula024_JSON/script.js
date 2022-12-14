let pessoa = {
    "nome": "Hugo",
    "idade": 29,
    "profissao": "Programador",
    "hobbies": ["Vídeo-game", "leitura", "malhar"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0])

/////Convertendo JSON para String:

