function areaQuadrado(lado){
    return lado*lado
}

console.log(areaQuadrado(10))

function pi(){
    return 3.14
}

var total = 5 * pi()
console.log(total)

function imc(peso, altura){
    var imc = peso / (altura*altura)
    return imc
}

console.log(imc(80, 1.8))

function terceiraIdade(idade){
    if (typeof idade !== 'number'){
        return 'Por favor, preencha um número'
    
    } else if (idade >= 60){
        return true
    } else {
        return false
    }
    console.log('testando')
}

console.log(terceiraIdade('oi'))


function pQuadrado(lado) {
    perimetroQuadrado = lado*4
    return perimetroQuadrado
}

console.log(pQuadrado(2))

function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome
}

console.log(nomeCompleto('dilson', 'albuquerque'))

function isEven(numero){
    if (numero % 2 === 0){
        return true
    } else {
        return false 
    }
}

console.log(isEven(3))

function tipoDado(dado){
    return typeof dado
}

console.log(tipoDado('dilson'))


