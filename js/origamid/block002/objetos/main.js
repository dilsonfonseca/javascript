var pessoa = {
    nome: 'Dilson',
    idade: 26,
}

console.log(pessoa.idade)


var quadrado = {
    lados: 4, 
    area(lado){
        return lado * lado
    },
    perimetro(lado){
        return this.lado * lado
    },
}


console.log(quadrado.area(5))
console.log(quadrado.perimetro(10))

console.log(Math.random)
