import {TemplateRenderer} from './template-renderer.js';
import {sharedStyles} from './shared-styles.js';

export class ProfileCard extends TemplateRenderer {
    
    constructor() {
        super();

        this.addEventListener('click', e => this.dispatchEvent(new CustomEvent('openDialog', {detail: this.profileData, bubbles: true, composed: true})));
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
                    display: block;
                    opacity: 0;
                }                  
                
                ${sharedStyles.card}
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
        }
    
        this.render();
    }
}

customElements.define('profile-card', ProfileCard);