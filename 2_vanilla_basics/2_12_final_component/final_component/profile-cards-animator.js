export class ProfileCardsAnimator extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        this.render();

        this.shadowRoot.querySelector('slot').addEventListener('slotchange', e => this.animate());
    }

    animate() {
        const elems = this.querySelectorAll('profile-card');
        console.log(elems);

        [...elems].map((card, index) => {
            const animation = card.animate({
                opacity: [0,1],
                transform: ['scale(0.8)', 'scale(1)']
            }, {
                duration: 250,
                iterations: 1,
                delay: 50 * index
            });

            animation.onfinish = e => card.style.opacity = 1;
        });
    }
    
    render() {
        // console.log(e);
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-wrap: wrap;
                }
            </style>
            <slot></slot>
        `;
    }

}

customElements.define('profile-cards-animator', ProfileCardsAnimator);