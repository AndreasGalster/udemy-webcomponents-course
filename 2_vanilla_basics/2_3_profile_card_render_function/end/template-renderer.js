export class TemplateRenderer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    
    connectedCallback() {
        this.render();         
    }

    render(template) {
        this.shadowRoot.innerHTML = template || this.template;
    }
}