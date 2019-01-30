import { TemplateRenderer } from './template-renderer.js';
import { sharedStyles } from './shared-styles.js';

export class ProfileDialog extends TemplateRenderer {
	open(data) {
		this.profileData = data;
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
                ${sharedStyles.card}
                
                dialog::backdrop {
                    background-color: rgba(0, 0, 0, 0.8);
                }

                dialog {
                    max-width: 600px;
                    width: auto;
                    text-align: center;
                }   

                .icon {
                    width: 30px; 
                    height: 30px;     
                    margin: 3px;               
                }
                
                div {
                    display: flex;
                    align-items: center;
                    margin: 20px;         
                    color: var(--primary);           
                }

                section {
                    display: flex;
                    justify-content: center;
                }
            </style>
            <dialog>
                ${
									this.profileData
										? `
                <img src=${this.profileData.picture.thumbnail} /> 
                <h1>${this.profileData.name.first} ${this.profileData.name.last}</h1>
                
                <section>
                    <div>
                        <img class='icon' src='https://www.materialui.co/materialIcons/hardware/smartphone_black_96x96.png' />
                        <p>${this.profileData.cell}</p>
                    </div>
                    
                    <div>
                        <img class='icon' src='https://www.materialui.co/materialIcons/communication/email_black_96x96.png' />
                        <p>${this.profileData.email}</p>
                    </div>
                </section>`
										: ''
								}

                <p>Proin finibus lectus vitae accumsan lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas volutpat aliquet sapien sit amet faucibus. Donec id velit sit amet felis pharetra tincidunt. Proin vitae nibh a massa commodo blandit. Sed quam lorem, molestie ac nisi in, blandit interdum tortor. Nunc interdum id quam nec vestibulum.</p>
            </dialog>
        `;
	}
}

customElements.define('profile-dialog', ProfileDialog);
