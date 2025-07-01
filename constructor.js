class Pessoa {
    nome;
    idade;
    anoDeNascimento;


    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;

    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${ this.idade}`);
    }

}
function compararPessoas (p1,p2){
    if (p1.idade > p2.idade){
        return (`${p1.nome} é maior que ${p2.nome}` );
    }
    else if (p1.idade < p2.idade){
        return (`${p1.nome} é menor que ${p2.nome}` )
    }
    else {
        return (` ${p1.nome} e ${p2.nome} tem a mesma idade` );
    }
}

const eli = new Pessoa ('Eli', 28);
const helena = new Pessoa ('Helena', 3);

compararPessoas (eli,helena);
