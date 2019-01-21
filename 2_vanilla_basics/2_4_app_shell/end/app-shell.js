import {TemplateRenderer} from './template-renderer.js';
import {sharedStyles} from './shared-styles.js';
import './profile-card.js';

export class AppShell extends TemplateRenderer {
    constructor() {
        super();
       
        this.noShadow = true;
    }
    
    get template() {
        return `
            <style>
                :root{
                    --primary: #2196f3;
                }

                app-shell {
                    ${sharedStyles.trbl}
                    position: fixed;
                    overflow-y: overlay;
                }
            </style>

            <profile-card></profile-card>
        `;
    }

}

customElements.define('app-shell', AppShell);