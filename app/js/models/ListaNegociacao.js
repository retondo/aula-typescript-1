export class ListaNegociacao {
    constructor() {
        this._listaNegociacao = [];
    }
    adicionar(negociacao) {
        this._listaNegociacao.push(negociacao);
    }
    paraArray() {
        return [].concat(this._listaNegociacao);
    }
    paraTexto() {
        console.log('Impressão');
        console.log(JSON.stringify(this._listaNegociacao));
    }
    isEqual(listaNegociacao) {
        return JSON.stringify(this._listaNegociacao) == JSON.stringify(listaNegociacao.paraArray());
    }
}
