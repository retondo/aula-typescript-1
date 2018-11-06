import { ListaNegociacao, Negociacao } from '../models/index';
import { NegociacaoView, MensagemView } from '../views/index';
import { domInject } from '../helpers/decorators/domInject';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: HTMLInputElement;

    @domInject('#quantidade')
    private _inputQuantidade: HTMLInputElement;

    @domInject('#valor')
    private _inputValor: HTMLInputElement;

    private _listaNegociacao = new ListaNegociacao();
    private _negociacaoView = new NegociacaoView('#tableView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacaoView.update(this._listaNegociacao);
    }

    adicionar(event: Event) {
        event.preventDefault();

        try {
            const negociacao = new Negociacao(
                new Date(this._inputData.value.replace(/-/g, ',')),
                Number.parseInt(this._inputQuantidade.value),
                Number.parseFloat(this._inputValor.value)
            );

            this._listaNegociacao.adicionar(negociacao);
            this._negociacaoView.update(this._listaNegociacao);
            this._mensagemView.update('Negociação adicionada com sucesso!');

        } catch(error) {
            this._mensagemView.update(error.message);
        }
    }

    importarDados() {
        alert('oi');
    }

}