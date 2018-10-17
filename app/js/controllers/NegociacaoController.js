class NegociacaoController {
    constructor() {
        this._listaNegociacao = new ListaNegociacao();
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }
    adicionar(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), Number.parseInt(this._inputQuantidade.value), Number.parseFloat(this._inputValor.value));
        this._listaNegociacao.adicionar(negociacao);
        this._listaNegociacao.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        });
    }
}
