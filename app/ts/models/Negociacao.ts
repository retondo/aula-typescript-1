import { Imprimivel, Igualavel } from "./index";

export class Negociacao implements Imprimivel, Igualavel<Negociacao> {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
        if (!this._isWorkingDay(data))
            throw new Error('Somente negociações em dias úteis.');
    }

    get volume() {
        return this.quantidade * this.valor;
    }

    private _isWorkingDay(date: Date): boolean {
        return date.getDay() != DiasDaSemana.Domingo && date.getDay() != DiasDaSemana.Sabado;
    }

    paraTexto(): void {
        console.log(`
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}
        `);
    }

    isEqual(negociacao: Negociacao): boolean {
        return negociacao.data.getDate() == this.data.getDate()
            && negociacao.data.getMonth() == this.data.getMonth()
            && negociacao.data.getFullYear() == this.data.getFullYear()
            && negociacao.quantidade == this.quantidade
            && negociacao.valor == this.valor;
    }

}

enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}