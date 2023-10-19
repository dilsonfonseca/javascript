function soma(num1, num2){
    soma = num1 + num2
    return soma
  }
  
  function multiplicacao(num1, num2){
    multiplicacao = num1*num2
    return multiplicacao
  }
  
  function subtracao(num1, num2){
    subtracao = num1 - num2
    return subtracao
  }
  
  function divisao(num1, num2){
    divisao = num1/num2
    return divisao
  }
  
  
  switch (2,3) {
    case '1':
      soma(2,3)
      break;
      case '2':
      subtracao(3,2)
      break;
      case '3':
      multiplicacao(2,3)
      break;
      case '4':
      divisao(2,3)
      break;
    default:
      console.log("Escolha uma das opções")
  }