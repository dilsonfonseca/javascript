let num = [2, 5, 6, 7, 9]
// USANDO FOR PARA PERCORRER ARRAY
/*for (pos = 0; pos < num.length; pos++){
    console.log(`a posição ${pos} tem valor ${num[pos]}`)
} */
// FOR IN
for (let pos in num){
    console.log(num[pos])
}

let pos = num.indexOf(5)

if (pos == -1){
    console.log('valor não encontrado')
} else{
    console.log(`o valor está na posição ${pos}`)
}