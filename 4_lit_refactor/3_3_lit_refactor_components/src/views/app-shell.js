import { LitElement, html } from 'lit-element';

import {sharedStyles} from './shared-styles.js';
import './profile-card.js';
import './profile-cards-animator.js';
import './profile-dialog.js';

export class AppShell extends LitElement {
    static get properties() {
        return {
          people: { type: Object }
        };
    }

    constructor() {
        super();
       
        this.addEventListener('openDialog', e => this.querySelector('profile-dialog').open(e.detail));
    }

    connectedCallback() {
        super.connectedCallback();
        this.getPeople();   
    }

    createRenderRoot() {
        return this;
    }    

    async getPeople() {
        let peoplePromise = await fetch('https://randomuser.me/api/?results=50');
        let res = await peoplePromise.json();
        this.people = res.results;
    }

    
    render() {
        return html`
            <style>
                :root{
                    --primary: rgb(33, 150, 243);
                }

                app-shell {
                    ${sharedStyles.trbl}
                    overflow-y: overlay;
                }
            </style>

            <profile-dialog></profile-dialog>

            <profile-cards-animator>
                ${!!this.people ? this.people.map(profile => html`<profile-card .profileData=${profile}></profile-card>`) : html``} 
            </profile-cards-animator>
        `;
    }

}

customElements.define('app-shell', AppShell);