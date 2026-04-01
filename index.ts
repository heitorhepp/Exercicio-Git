import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();
ligarFarol(carro);

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar")
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("6 - Ligar farol");
    console.log("7 - Desligar farol");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro);
            break;
        case 3:
            subirMarcha(carro);
            break;
        case 4:
            descerMarcha(carro);
            break;
        case 5:
            console.table(carro);
            break;
        case 6:
            ligarFarol(carro);
            break;
        case 7:
            desligarFarol(carro);
            break;
        default:
            console.log('Opção inválida');
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

function frear(veiculo: Veiculo): void{
    if(veiculo.velocidade > 0){
    veiculo.velocidade -= veiculo.potencia*0.1;
    if(veiculo.velocidade < 0){
        veiculo.velocidade = 0;
    }
    console.log(veiculo.velocidade);
    }
}

function subirMarcha(veiculo: Veiculo): void{
    if(veiculo.marchaAtual < veiculo.numeroMarchas){
        veiculo.marchaAtual++;
        console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    } else {
        console.log('Já está na marcha máxima');
    }
}

function descerMarcha(veiculo: Veiculo): void{
    if(veiculo.marchaAtual > 0){
        veiculo.marchaAtual--;
        console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    } else {
        console.log('Já está na marcha mínima');
    }
}

function ligarFarol(veiculo: Veiculo): void{
    veiculo.ligarFarol();
}

function desligarFarol(veiculo: Veiculo): void{
    veiculo.desligarFarol();
}