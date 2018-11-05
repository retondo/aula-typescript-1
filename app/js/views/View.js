export class View {
    constructor(seletor, escapar) {
        this._elemento = document.querySelector(seletor);
        this._escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this._escapar)
            template.replace(/<script>[\s\S]*?<\/script>/g, '');
        this._elemento.innerHTML = template;
    }
}
