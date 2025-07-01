class Carro {
    marca;
    cor;
    gastoMedioPorKm;


    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }
    calcularGastoDePercurso (distanciaEmKm,precoCombustivel){
        return (distanciaEmKm * this.gastoMedioPorKm * precoCombustivel)
    }
}

const ecosport = new Carro (Ford, Preto, 1/7);
console.log(ecosport.calcularGastoDePercurso(70,5));