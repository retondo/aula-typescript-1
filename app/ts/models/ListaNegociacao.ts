class ListaNegociacao {

    private _listaNegociacao: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this._listaNegociacao.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._listaNegociacao);
    }
}