/*let dilson = {
    cor: "parda",
    idade: 26,
    corCabelo: "preto",
}

console.log(dilson.cor)*/

function dilson(cor, idade, corCabelo){
    this.cor = cor
    this.idade = idade
    this.corCabelo = corCabelo
}
let nome = new dilson("pardo", 26, "preto")
console.log(nome.cor)

