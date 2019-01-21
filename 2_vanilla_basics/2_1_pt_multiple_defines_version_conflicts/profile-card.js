export class ProfileCard extends HTMLElement {
    constructor() {
        super();
        
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.fullName = 'John Doe';
        
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();         
    }

    static get observedAttributes () { return ['first-name', 'last-name']; }
    
    render() {
        this.shadowRoot.innerHTML = `
            <img src='https://placeimg.com/100/100/people' />

            <h1>${this.fullName}</h1>
            <p>Title</p>
        `;
    }

    attributeChangedCallback (name, oldValue, newValue) {
        if (name === 'first-name' || name == 'last-name') {
            this.fullName = `${this.firstName} ${this.lastName}`;
        }

        this.render();
    }

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