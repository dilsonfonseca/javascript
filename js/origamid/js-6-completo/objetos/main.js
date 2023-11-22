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
        return this.lados * lado
    },
}


console.log(quadrado.area(5))
console.log(quadrado.perimetro(10))
console.table(quadrado)



var menu = {
    width: 800,
    height: 100,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2
    },
}

console.log(menu.hasOwnProperty('width'))
console.log(menu.hasOwnProperty('color'))

var dadosPessoais = {
    nome: 'Dilson',
    sobrenome: 'Albuquerque',
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    },
    idade: 26,
    profissao:'arquiteto',
    salario: '3800',
}

console.log(dadosPessoais.nomeCompleto())

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000
console.log(carro.preco)

var cachorro = {
    nome: 'Rex',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
        if (pessoa === 'homem'){
            return 'Latir'
        } else {
            return 'Não vai latir'
        }
    }
}

console.log(cachorro.latir('homem'))

var nome = 'dilson'

console.log(nome.length)
console.log(nome.replace('son', 'sim').toUpperCase())
console.log(nome.charAt(2))
