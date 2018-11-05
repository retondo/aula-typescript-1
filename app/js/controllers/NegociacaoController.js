import { ListaNegociacao, Negociacao } from '../models/index';
import { NegociacaoView, MensagemView } from '../views/index';
export class NegociacaoController {
    constructor() {
        this._listaNegociacao = new ListaNegociacao();
        this._negociacaoView = new NegociacaoView('#tableView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacaoView.update(this._listaNegociacao);
    }
    adicionar(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), Number.parseInt(this._inputQuantidade.value), Number.parseFloat(this._inputValor.value));
        this._listaNegociacao.adicionar(negociacao);
        this._negociacaoView.update(this._listaNegociacao);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}
