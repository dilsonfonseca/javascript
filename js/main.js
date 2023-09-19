let n1 = prompt("Digite um número")
let n2 = prompt("Digite outro número")
let result

if (n2 > n1){
    console.log("Escreva novamente")
} else{
    result = parseInt(n1/n2 * 100 + "%")
}
console.log(result)