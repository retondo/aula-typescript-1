export class Negociacao {

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