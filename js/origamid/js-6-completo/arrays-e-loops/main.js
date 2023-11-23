var videoGames = ['Switch', 'PS4', 'Xbox', '3DS']

/*console.log(videoGames[1])
console.log(videoGames.pop())
console.log(videoGames)
console.log(videoGames.push('3DS'))
console.log(videoGames)*/

/*for (var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item])
    if(videoGames[item] === 'PS4'){
        break
    }
}*/

//forEach

videoGames.forEach(function(item) {
    console.log(item)
})

var frutas = ['Banana', 'Pera', 'Maçã']

frutas.forEach(function(frutas, i, array){
    console.log(frutas, i, array)
})

var anosBrasil = [1959, 1962, 1970, 1994, 2002]
console.log(anosBrasil.length)

anosBrasil.forEach(function(item){
    console.log(`O brasil venceu a copa de ${item}`)
})

var frutas2 = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for(var i = 0; i < 3; i++){
    console.log(frutas2[i])
}

var ultimaFruta = frutas2[frutas2.length - 1]
console.log(ultimaFruta)