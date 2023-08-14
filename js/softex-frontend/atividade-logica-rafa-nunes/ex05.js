let soma = 0;
let contagem = 0;

function lerNumeros() {
  let numero = parseInt(prompt("Digite um número (ou 999 para sair):"));

  while (numero !== 999) {
    soma += numero;
    contagem++;
    numero = parseInt(prompt("Digite um número (ou 999 para sair):"));
  }

  const media = contagem > 0 ? soma / contagem : 0;

alert("Soma dos números:", soma);
alert("Média dos números:", media);
}

lerNumeros();