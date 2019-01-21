import {TemplateRenderer} from './template-renderer.js';

export class ProfileCard extends TemplateRenderer {
    constructor() {
        super();
        
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.fullName = 'John Doe';
    }

    static get observedAttributes () { return ['first-name', 'last-name']; }
    
    get template() {
        return `
            <style>
                :host {
                    padding: 30px;
                    margin: 2px;
                    background: rgba(0,0,0,0.1);
                    width: calc(25% - 4px);
                    box-sizing: border-box;
                    cursor: pointer;
                    text-align: center;
                    display: block;
                }                  

                img {
                    border-radius: 50%;
                }

                h1, p {
                    margin: 10px;
                    padding: 0;
                    font-family: 'Roboto';
                }

                h1 {
                    font-size: 1.4em;
                    color: #2196f3;
                }
            </style>

            <img src='https://placeimg.com/100/100/people' />

            <h1>${this.fullName}</h1>
            <p>Title</p>        
        `;
    }

    attributeChangedCallback (name, oldValue, newValue) {
        if (name === 'first-name' || name == 'last-name') this.fullName = `${this.firstName} ${this.lastName}`;

        this.render();
    }

    set firstName(val) {
        !!val ? this.setAttribute('first-name', val) : this.removeAttribute('first-name');
    }

    get firstName() {
        return this.getAttribute('first-name');        
    }    

    set lastName(val) {
        !!val ? this.setAttribute('last-name', val) : this.removeAttribute('last-name');
    }

    get lastName() {
        return this.getAttribute('last-name');        
    }    
}

customElements.define('profile-card', ProfileCard);