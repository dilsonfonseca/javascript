let livro={
    nome: 'narnia',
    cod: 4580,
    categoria: 'ação e aventura'
  }
  
  for (const propriedade in livro){
    console.log(`${propriedade}:${livro[propriedade]}`)
  }

  //Lembrar que o FOR IN acessa objetos e índices e o FOR OF percorre elementos de Arrays