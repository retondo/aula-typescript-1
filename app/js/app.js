import { NegociacaoController } from './controllers/NegociacaoController';
const controller = new NegociacaoController();
document
    .querySelector('form')
    .addEventListener('submit', controller.adicionar.bind(controller));
