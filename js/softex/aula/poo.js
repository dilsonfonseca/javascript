class Pessoa{
    Idade(){
        return 2023 - this._anoNascimento;
    }
    Falar(){
        console.log("Hello World!")
    }
    constructor(nome, sobrenome, CPF, anoNascimento){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._CPF = CPF;
        this._anoNascimento = anoNascimento 
    }
    get nome(){
        return this._nome
    }
    set nome(novoNome){
        this._nome = novoNome;
    }
}

let pessoa1 = new Pessoa("Rafael", "Nunes", "0124", 1991);

let pessoa2 = new Pessoa("Dilson", "Albuquerquew", "94984u", 1997)

console.log(pessoa1)
console.log(pessoa2)

