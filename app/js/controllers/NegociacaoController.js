var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ListaNegociacao, Negociacao } from '../models/index';
import { NegociacaoView, MensagemView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index';
export class NegociacaoController {
    constructor() {
        this._listaNegociacao = new ListaNegociacao();
        this._negociacaoView = new NegociacaoView('#tableView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._service = new NegociacaoService();
        this._negociacaoView.update(this._listaNegociacao);
    }
    adicionar(event) {
        event.preventDefault();
        try {
            const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), Number.parseInt(this._inputQuantidade.value), Number.parseFloat(this._inputValor.value));
            imprime(negociacao, this._listaNegociacao);
            this._listaNegociacao.adicionar(negociacao);
            this._negociacaoView.update(this._listaNegociacao);
            this._mensagemView.update('Negociação adicionada com sucesso!');
        }
        catch (error) {
            this._mensagemView.update(error.message);
        }
    }
    importarDados() {
        return __awaiter(this, void 0, void 0, function* () {
            const negociacoesParaImportar = yield this._service
                .obterNegociacoes(res => {
                if (res.ok) {
                    return res;
                }
                else {
                    throw new Error(res.statusText);
                }
            });
            const negociacoesJaImportadas = this._listaNegociacao.paraArray();
            negociacoesParaImportar
                .filter(negociacao => !negociacoesJaImportadas.some(jaImportada => negociacao.isEqual(jaImportada)))
                .forEach(negociacao => this._listaNegociacao.adicionar(negociacao));
            this._negociacaoView.update(this._listaNegociacao);
        });
    }
}
__decorate([
    domInject('#data')
], NegociacaoController.prototype, "_inputData", void 0);
__decorate([
    domInject('#quantidade')
], NegociacaoController.prototype, "_inputQuantidade", void 0);
__decorate([
    domInject('#valor')
], NegociacaoController.prototype, "_inputValor", void 0);
__decorate([
    throttle(1000)
], NegociacaoController.prototype, "importarDados", null);
