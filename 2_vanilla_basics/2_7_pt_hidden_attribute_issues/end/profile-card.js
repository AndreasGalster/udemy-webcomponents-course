import {TemplateRenderer} from './template-renderer.js';

export class ProfileCard extends TemplateRenderer {
    
    constructor() {
        super();

        this.addEventListener('click', e => this.dispatchEvent(new CustomEvent('openDialog', {bubbles: true, composed: true})));
    }

    get template() {
        return `
        <style>
                :host {
                    padding: 50px;
                    margin: 2px;
                    background: #EEE;
                    width: calc(25% - 4px);
                    box-sizing: border-box;
                    cursor: pointer;
                    text-align: center;
                    opacity: 0;
                }                  
                
                :host(:not([hidden])) {
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
                    color: var(--primary);
                }
            </style>
            
            ${this.profileData ? `
            <img src=${this.profileData.picture.thumbnail} /> 
            <h1>${this.profileData.name.first}</h1>` : ``}
        `;
    }

    static get observedAttributes () { return ['profile-data']; }
            
    attributeChangedCallback (name, oldValue, newValue) {
        if (newValue && name === 'profile-data') {
            this.profileData = JSON.parse(decodeURIComponent(newValue));
            this.removeAttribute('profile-data');
    

            // if profileData is an empty object (object entries == 0)
            // then add hidden attribute, otherwise remove it
            if (Object.entries(this.profileData).length) {
                this.removeAttribute('hidden');
            } else {
                this.setAttribute('hidden', '');
            }
        }
    
        this.render();
    }
}

customElements.define('profile-card', ProfileCard);