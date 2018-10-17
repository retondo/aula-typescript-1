class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _listaNegociacao = new ListaNegociacao();
    private _negociacaoView = new NegociacaoView('#tableView');

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector("#data");
        this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this._inputValor = <HTMLInputElement>document.querySelector("#valor");
        this._negociacaoView.update(this._listaNegociacao);
    }

    adicionar(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            Number.parseInt(this._inputQuantidade.value),
            Number.parseFloat(this._inputValor.value)
        );

        this._listaNegociacao.adicionar(negociacao);
        this._negociacaoView.update(this._listaNegociacao);
        this._listaNegociacao.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        });
    }
}