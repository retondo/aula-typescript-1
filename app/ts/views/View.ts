export abstract class View<T> {

    private _elemento: Element;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) {
        this._elemento = <Element>document.querySelector(seletor);
        this._escapar = escapar;
    }

    update(model: T): void {
        let template = this.template(model);
        if (this._escapar)
            template.replace(/<script>[\s\S]*?<\/script>/g, '');

        this._elemento.innerHTML = template;
    }

    abstract template(model: T): string;
}