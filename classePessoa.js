class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        }

        else if (imc >= 18.5 && imc < 25) {
            return ('Peso Normal');
        }
        else if (imc >= 25 && imc <= 30) {
            return ('Acima do Peso');
        }
        else if (imc >= 30 && imc <= 40) {
            return ('Obesidade');
        }
        else {
            return ('Obesidade Grave');
        }
    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.calcularImc());

