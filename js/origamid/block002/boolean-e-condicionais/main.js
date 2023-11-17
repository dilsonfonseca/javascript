var possuiGraduacao = true

if (true) {
    console.log('É verdadeiro')
    var x = 10
} else {
    console.log('É falso')
}

console.log(x)

// else if

var possuiDoutorado = false

if (possuiDoutorado){
    console.log('Possui graduação e doutorado')
} else if (possuiGraduacao){
    console.log('Possui graduação, mas não tem doutorado')
} else {
    console.log('Não possui graduação e nem doutorado')
}

10 == 7