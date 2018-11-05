import { NegociacaoController } from './controllers/NegociacaoController.js';
const controller = new NegociacaoController();
document
    .querySelector('form')
    .addEventListener('submit', controller.adicionar.bind(controller));
