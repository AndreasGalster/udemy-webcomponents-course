import './profile-cards-animator.js';
import './profile-card.js';
import './profile-dialog.js';


export class AppShell extends HTMLElement {
    constructor() {
        super();
     
        this.getPeople();
        // this.addEventListener('openDialog', e => this.shadowRoot.querySelector('dialog').showModal());
    }

    async getPeople() {
        let peoplePromise = await fetch('https://randomuser.me/api/?results=50&exc=registered,login,phone,cell,id');
        let res = await peoplePromise.json();
        this.people = res.results;

        // console.log(this.people);

        let styles = `
            :host {
                --primary: rgb(33, 150, 243);

                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow-y: overlay;                
            }

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
        `;
        
        let profileCards = ``;
        
        this.people.map(profile => {
            profile.name.last = profile.name.last.replace(/\s/g, "");
            profileCards = `
                ${profileCards}          
                <profile-card 
                    hidden$='true'
                    first-name=${profile.name.first} 
                    last-name=${profile.name.last}
                    profile-data=${JSON.stringify(profile)}
                ></profile-card>
            `;
        });


        let template = `
            <style>
                ${styles}
            </style>

            <profile-dialog></profile-dialog>

            <profile-cards-animator>
            ${this.people.map(profile => {
                    console.log(profile);
                
                //     // console.log(profile.name.last);
                // profile.name.last = profile.name.last.replace(/\s/g, "");
                    console.log(JSON.stringify(profile));
                    return `    
                        <profile-card 
                            first-name=${profile.name.first} 
                            last-name=${profile.name.last}
                            profile-data=${encodeURIComponent(JSON.stringify(profile))}
                        ></profile-card>`;
                }).join('')}                     
            </profile-cards-animator>
        `;
                // ${profileCards}
                    // ${this.people.map(profile => {
                    //     // console.log(profile);
        
                    //     // console.log(profile.name.last);
                    //     profile.name.last = profile.name.last.replace(/\s/g, "");
                    //     // console.log(JSON.stringify(profile));
                    //     return `    
                    //     <profile-card 
                    //         first-name=${profile.name.first} 
                    //         last-name=${profile.name.last}
                    //         profile-data=${JSON.stringify(profile)}
                    //     ></profile-card>`;
                    // })}

        this.render(template);
        // this.shadowRoot.querySelector('dialog').addEventListener('click', e => e.target.close());
        this.addEventListener('openDialog', e => this.shadowRoot.querySelector('profile-dialog').open(e.detail));

    }

    render(template) {
        this.shadowRoot.innerHTML = template;
    }    

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
    }
}

customElements.define('app-shell', AppShell);