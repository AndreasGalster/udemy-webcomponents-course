import {TemplateRenderer} from './template-renderer.js';

export class ProfileDialog extends TemplateRenderer {
    open() {
        this.render();
        this.shadowRoot.querySelector('dialog').addEventListener('click', e => e.target.close());
        this.shadowRoot.querySelector('dialog').showModal();        
    }

    close() {
        this.shadowRoot.querySelector('dialog').close();        
    }

    get template() {
        return `
            <style>
                dialog::backdrop {
                    background-color: rgba(0, 0, 0, 0.8);
                }

                dialog {
                    max-width: 600px;
                    width: auto;
                }            
            </style>
            <dialog>
                <p>Some static dialog content.</p>
            </dialog> 
        `;
    }
}

customElements.define('profile-dialog', ProfileDialog);