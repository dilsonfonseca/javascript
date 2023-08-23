let peso = parseFloat(prompt("Qual o seu peso? (em kg)"));
let altura = parseFloat(prompt("Qual a sua altura? (em m)"));
let genero = prompt("Qual o seu gênero? H/M");
let pesoM = (62.1*altura) - 44.7
let pesoH = (72.7*altura) - 58

if (genero == "M"){
    alert(pesoM);
} else{
    alert(pesoH);
}