let animalData = [
    ["Leão", "Felino", 5],
    ["Elefante", "Mamífero", 10],
    ["Girafa", "Mamífero", 7],
    ["Pinguim", "Ave", 2]
  ];
  

  function adicionarAnimal(nome, especie, idade) {
    animalData.push([nome, especie, idade]);
  }
  
  function exibirAnimais() {
    for (let i = 0; i < animalData.length; i++) {
      let animal = animalData[i];
      console.log(`Animal ${i + 1}: Nome=${animal[0]}, Espécie=${animal[1]}, Idade=${animal[2]}`);
    }
  }
  
  adicionarAnimal("Tigre", "Felino", 4);
  exibirAnimais();
  
  
  
  