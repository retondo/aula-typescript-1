import { Negociacao } from './Negociacao';

export class ListaNegociacao {

    private _listaNegociacao: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this._listaNegociacao.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._listaNegociacao);
    }
}