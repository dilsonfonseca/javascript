
//Função para o sistema chegar se é string
function isString(input) {
    return isNaN(input)
  }
//Função para o sistema checar se é number/float
function isNumber(input) {
    return !isNaN(input)
  }

let nome = window.prompt("Digite o seu nome:")
if (!isString(nome)){
    window.alert("Digite um nome válido")
}

//Lembrar sempre de colocar o parse na frente, se não o resultado do prompt vai ser sempre string.
 let salario = parseFloat(window.prompt("Digit o seu salário:"))
 if (!isNumber(salario)){
    window.alert("Por favor, digite um número")
 }

let idade = parseInt(window.prompt("Digite a sua idade:"))
if (!isNumber(idade)){
    window.alert("Por favor, digite um número")
 }

 //Tratamento de erro apenas com IF e ELSE adicionando alguns ou's para caso o usuário digite diferente
let diploma = window.prompt("Você possui diploma?")
if (diploma === "sim" || "SIM" || "Sim") {
    console.log("Você escolheu sim'.");
  } else if (escolha === "não" || "NÃO" || "Não") {
    console.log("Você escolheu 'não'.");
  } else {
    window.alert("Opção inválida. Por favor, escolha entre 'sim' e 'não'.");
  }
//Resultado final
 alert(`Cadastrado, ${nome}, ${idade} anos, ${salario} reais, e ${diploma} para o diploma. `)

