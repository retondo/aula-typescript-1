import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

export class ListaNegociacao implements Imprimivel, Igualavel<ListaNegociacao> {

    private _listaNegociacao: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this._listaNegociacao.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._listaNegociacao);
    }

    paraTexto(): void {
        console.log('Impressão');
        console.log(JSON.stringify(this._listaNegociacao));
    }

    isEqual(listaNegociacao: ListaNegociacao): boolean {
        return JSON.stringify(this._listaNegociacao) == JSON.stringify(listaNegociacao.paraArray());
    }
}