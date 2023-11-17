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