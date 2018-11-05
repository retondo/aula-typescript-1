import { NegociacaoController } from './controllers/NegociacaoController.js';

const controller = new NegociacaoController();

(document
    .querySelector('form') as HTMLFormElement)
    .addEventListener('submit', controller.adicionar.bind(controller));