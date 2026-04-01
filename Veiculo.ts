export class Veiculo{
    marca: string = 'Padrão';
    modelo: string = 'Padrão';
    potencia: number = 0;
    numeroMarchas: number = 5;
    marchaAtual: number = 0;
    velocidade: number = 0;

    acelerar(): void {
        if (this.marchaAtual !== 0) {
            this.velocidade += this.potencia * 0.1;
            console.log(this.velocidade);
        }
    }

    frear(): void {
        if (this.velocidade > 0) {
            this.velocidade -= this.potencia * 0.1;
            if (this.velocidade < 0) {
                this.velocidade = 0;
            }
            console.log(this.velocidade);
        }
    }
}
