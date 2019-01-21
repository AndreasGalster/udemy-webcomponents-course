import {TemplateRenderer} from './template-renderer.js';
import {sharedStyles} from './shared-styles.js';
import './profile-card.js';

export class AppShell extends TemplateRenderer {
    constructor() {
        super();
       
        this.noShadow = true;
    }
    
    connectedCallback() {
        super.connectedCallback();
        this.getPeople();   
    }

    async getPeople() {
        let peoplePromise = await fetch('https://randomuser.me/api/?results=50');
        let res = await peoplePromise.json();
        this.people = res.results;
    
        this.render();
    }

    
    get template() {
        return `
            <style>
                :root{
                    --primary: #2196f3;
                }

                app-shell {
                    ${sharedStyles.trbl}
                    overflow-y: overlay;
                    display: flex;
                    flex-wrap: wrap;
                }
            </style>

            ${!!this.people ? this.people.map(profile => `<profile-card profile-data=${encodeURIComponent(JSON.stringify(profile))}></profile-card>`).join('') : ''} 
        `;
    }

}

customElements.define('app-shell', AppShell);