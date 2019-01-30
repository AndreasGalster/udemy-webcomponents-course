import {LitElement, html, customElement, property} from 'lit-element';
import {sharedStyles} from './shared-styles.js';

@customElement('profile-card')
export class ProfileCard extends LitElement {
    @property({type: Object})  profileData;

    constructor() {
        super();

        this.addEventListener('click', e => this.dispatchEvent(new CustomEvent('openDialog', {detail: this.profileData, bubbles: true, composed: true})));
    }

    render() {
        return html`
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
            
            ${this.profileData ? 
                html`<img src=${this.profileData.picture.thumbnail} /> 
                    <h1>${this.profileData.name.first}</h1>`: 
                html``
            }
        `;
    }

}