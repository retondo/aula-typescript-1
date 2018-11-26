import { Negociacao } from '../models/index';
export class NegociacaoService {
    obterNegociacoes(handler) {
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados) => dados
            .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
            .catch(err => {
            throw new Error(err.message);
        });
    }
}
