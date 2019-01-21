export class ProfileCard extends HTMLElement {
    constructor() {
        super();
        
        // this.firstName = 'John';
        // this.lastName = 'Doe';
        // this.fullName = 'John Doe';
        // this.initials = 'JD';
        let shadowRoot = this.attachShadow({mode: 'open'});
        this.addEventListener('click', e => this.dispatchEvent(new CustomEvent('openDialog', {detail: this.profileData, bubbles: true, composed: true})));

    }

    static get observedAttributes () { return ['first-name', 'last-name', 'profile-data']; }
    
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    padding: 30px;
                    margin: 2px;
                    background: rgba(0,0,0,0.1);
                    width: calc(25% - 4px);
                    box-sizing: border-box;
                    cursor: pointer;
                    text-align: center;
                    opacity: 0;
                }

                :host(:not([hidden])) {
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

            ${this.profileData ? `<img src=${this.profileData.picture.thumbnail} />` : ``}

            <h1>${this.fullName}</h1>
            <p>Title</p>
        `;
    }

    attributeChangedCallback (name, oldValue, newValue) {

        // console.log(this.firstName);
        // console.log(this.firstName.slice(0,1));

        if (name === 'first-name' || name == 'last-name') {
            this.initials = `${this.firstName.slice(0,1)} ${this.lastName.slice(0,1)}`;
            this.fullName = `${this.firstName} ${this.lastName}`;
        }

        if (newValue && name === 'profile-data') {
            // console.log(newValue);
            this.profileData = JSON.parse(decodeURIComponent(newValue));
            this.removeAttribute('profile-data');

            // this.profileData = 
        }

        this.render();
    }

    // set profileData(val) {
    //     this.removeAttribute('profile-data');
    // }

    // get profileData() {
    //     return this.getAttribute('first-name');        
    // }   

    set firstName(val) {
        if (val) {
            this.setAttribute('first-name', val);
        } else {
            this.removeAttribute('first-name');
        }
    }

    get firstName() {
        return this.getAttribute('first-name');        
    }    

    toDash(ccString) {
        return ccString.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
    }


    // String.prototype.toDash = function(){
    //     return this.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
    // };

    set lastName(val) {
        if (val) {
            this.setAttribute('last-name', val);
        } else {
            this.removeAttribute('last-name');
        }
    }

    get lastName() {
        return this.getAttribute('last-name');        
    }    
}

customElements.define('profile-card', ProfileCard);