import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

(document
    .querySelector('.form') as HTMLFormElement)
    .addEventListener('submit', controller.adicionar.bind(controller));

(document
    .querySelector('#botao-importar') as HTMLButtonElement)
    .addEventListener('click', controller.importarDados.bind(controller));