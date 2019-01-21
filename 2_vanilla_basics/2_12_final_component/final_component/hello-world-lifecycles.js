import {HelloWorldBase} from './hello-world-base.js';

export class HelloWorldLifeCycles extends HelloWorldBase {
    constructor() {
        super();
    }
    
    consoleLog() {
        super.consoleLog();
        
        console.log(`${this.world} is great`);
    }

    connectedCallback() {
        this.world = 'Philippines';

        this.consoleLog();
    }

    disconnectedCallback() {
        this.world = 'USA';

        this.consoleLog();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(`${newVal} is great`);
    }

    static get observedAttributes() {
        return ['world'];
    }

}

customElements.define('hello-world-lifecycles', HelloWorldLifeCycles);