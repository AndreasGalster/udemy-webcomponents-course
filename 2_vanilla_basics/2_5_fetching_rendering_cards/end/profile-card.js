import {TemplateRenderer} from './template-renderer.js';

export class ProfileCard extends TemplateRenderer {
    static get observedAttributes () { return ['profile-data']; }
    
    get template() {
        return `
            <style>
                :host {
                    padding: 50px;
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
                    color: var(--primary);
                }
            </style>

            ${this.profileData ? `
                <img src=${this.profileData.picture.thumbnail} /> 
                <h1>${this.profileData.name.first} ${this.profileData.name.last}</h1>` : ``}
        `;
    }

    attributeChangedCallback (name, oldValue, newValue) {
        if (newValue && name === 'profile-data') {
            this.profileData = JSON.parse(decodeURIComponent(newValue));
            this.removeAttribute('profile-data');
        }
    
        this.render();
    }
}

customElements.define('profile-card', ProfileCard);