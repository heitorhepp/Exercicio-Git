export class Veiculo{
    marca: string = 'Padrão';
    modelo: string = 'Padrão';
    potencia: number = 0;
    numeroMarchas: number = 5;
    marchaAtual: number = 0;
    velocidade: number = 0;
    farolLigado: boolean = false;

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
    subirMarcha(): void {
        if (this.marchaAtual < this.numeroMarchas) {
            this.marchaAtual++;
            console.log(`Marcha atual: ${this.marchaAtual}`);
        } else {
            console.log('Já está na marcha máxima');
        }
    }

    descerMarcha(): void {
        if (this.marchaAtual > 0) {
            this.marchaAtual--;
            console.log(`Marcha atual: ${this.marchaAtual}`);
        } else {
            console.log('Já está na marcha mínima');
        }
    }

    ligarFarol(): void {
        if (!this.farolLigado) {
            this.farolLigado = true;
            console.log('Farol ligado');
        } else {
            console.log('O farol já está ligado');
        }
    }

    desligarFarol(): void {
        if (this.farolLigado) {
            this.farolLigado = false;
            console.log('Farol desligado');
        } else {
            console.log('O farol já está desligado');
        }
    }

    
}
