export class ProfileDialog extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
    }
    
    open(data) {
        console.log(data);
        this.profileData = data;
        this.render();
        this.shadowRoot.querySelector('dialog').addEventListener('click', e => e.target.close());
        this.shadowRoot.querySelector('dialog').showModal();        
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                dialog::backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.8);
                }

                dialog {
                    max-width: 500px;
                    width: auto;
                }            
            </style>
            <dialog>
                <p>Greetings, one and all!</p>
            </dialog> 

        `;
    }

    // set profileData(val) {
    //     if (val) {
    //         this.setAttribute('last-name', val);
    //     } else {
    //         this.removeAttribute('last-name');
    //     }
    // }

    // get profileData() {
    //     return this.getAttribute('last-name');        
    // }    
}

customElements.define('profile-dialog', ProfileDialog);