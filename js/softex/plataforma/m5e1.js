//Objeto Material - 1
class Carro {
    constructor(marca, modelo, anoFabricacao) {
      this.marca = marca;
      this.modelo = modelo;
      this.anoFabricacao = anoFabricacao;
      this.ligado = false;
      this.velocidade = 0;
    }
  
    ligar() {
      this.ligado = true;
    }
  
    desligar() {
      this.ligado = false;
    }
  
    acelerar(velocidade) {
      if (this.ligado) {
        this.velocidade += velocidade;
      } else {
        console.log("O carro precisa estar ligado para acelerar.");
      }
    }
  }
  
  // Exemplo de uso
  const meuCarro = new Carro("Toyota", "Corolla", 2022);
  meuCarro.ligar();
  meuCarro.acelerar(50);
  console.log(`Marca: ${meuCarro.marca}, Modelo: ${meuCarro.modelo}, Velocidade: ${meuCarro.velocidade} km/h`);
  
  //Objeto Material - 2
  class Mesa {
    constructor(material, cor, dimensoes) {
      this.material = material;
      this.cor = cor;
      this.dimensoes = dimensoes;
      this.limpa = false;
      this.montada = false;
    }
  
    limpar() {
      this.limpa = true;
    }
  
    montar() {
      this.montada = true;
    }
  
    pintar(novaCor) {
      this.cor = novaCor;
    }
  }
  
  //Exemplo de uso
  const minhaMesa = new Mesa("Madeira", "Marrom", { altura: 75, largura: 120, comprimento: 60 });
  minhaMesa.limpar();
  minhaMesa.montar();
  minhaMesa.pintar("Branco");
  console.log(`Material: ${minhaMesa.material}, Cor: ${minhaMesa.cor}, Montada: ${minhaMesa.montada}`);
  
  //Objeto Abstrato - 1
  class ContaBancaria {
    constructor(numeroConta, titular) {
      this.numeroConta = numeroConta;
      this.titular = titular;
      this.saldo = 0;
    }
  
    depositar(valor) {
      this.saldo += valor;
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  
    consultarSaldo() {
      return this.saldo;
    }
  }
  
  // Exemplo de uso
  const minhaConta = new ContaBancaria("123456", "João");
  minhaConta.depositar(1000);
  minhaConta.sacar(500);
  console.log(`Titular: ${minhaConta.titular}, Saldo: R$ ${minhaConta.consultarSaldo()}`);
  
  //Objeto abstrato - 2
  class RedeSocial {
    constructor(nomeRede) {
      this.nomeRede = nomeRede;
      this.numeroUsuarios = 0;
      this.recursos = [];
    }
  
    criarPerfil(nomeUsuario) {
      this.numeroUsuarios++;
      console.log(`Perfil criado para ${nomeUsuario}`);
    }
  
    publicarPost(usuario, texto) {
      console.log(`${usuario} publicou: ${texto}`);
    }
  
    pesquisarUsuarios(termo) {
      console.log(`Pesquisando usuários com o termo: ${termo}`);
    }
  }
  
  // Exemplo de uso
  const minhaRedeSocial = new RedeSocial("SocialBook");
  minhaRedeSocial.criarPerfil("Alice");
  minhaRedeSocial.publicarPost("Alice", "Olá, mundo!");
  minhaRedeSocial.pesquisarUsuarios("joao");
  