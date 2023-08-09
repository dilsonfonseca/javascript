let nome = prompt("Qual o seu nome?");
let idade = parseInt(prompt("Qual a sua idade?"));

if (idade >= 5 && idade <= 7) {
    alert("O nadador está na categoria infantil A");
} else if (idade >= 8 && idade <= 10){
    alert("O nadador está na categoria infantil B")
} else if (idade >= 11 && idade <= 13){
    alert("O nadador está na categoria junior A")
} else if (idade >= 14 && idade <= 17){
    alert("O nadador está na categoria junior B")
} else if (idade >= 18){
    alert("O nadador está na categoria Sênior")
}