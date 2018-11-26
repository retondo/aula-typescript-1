import { ListaNegociacao, Negociacao } from '../models/index';
import { NegociacaoView, MensagemView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index';

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

    private _service = new NegociacaoService();

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

            imprime(negociacao, this._listaNegociacao);

            this._listaNegociacao.adicionar(negociacao);
            this._negociacaoView.update(this._listaNegociacao);
            this._mensagemView.update('Negociação adicionada com sucesso!');

        } catch(error) {
            this._mensagemView.update(error.message);
        }
    }

    @throttle(1000)
    async importarDados() {

        const negociacoesParaImportar = await this._service
            .obterNegociacoes(res => {
                if (res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })

        const negociacoesJaImportadas = this._listaNegociacao.paraArray();

        negociacoesParaImportar
            .filter(negociacao => 
                !negociacoesJaImportadas.some(jaImportada => 
                    negociacao.isEqual(jaImportada)))
            .forEach(negociacao => 
                this._listaNegociacao.adicionar(negociacao));
        
        this._negociacaoView.update(this._listaNegociacao);
    }

}