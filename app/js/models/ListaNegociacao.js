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
}
