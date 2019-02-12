import {LitElement, html, customElement, property} from 'lit-element';

@customElement('profile-cards-animator')
export class ProfileCardsAnimator extends LitElement {
    firstUpdated() {
        this.shadowRoot.querySelector('slot').addEventListener('slotchange', e => this.animate());
    }

    animate() {
        const elems = this.querySelectorAll('profile-card');

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
        return html`
            <style>
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    overflow-x: hidden;
                }

                ::slotted(profile-card) {
                    transition: transform 0.2s ease-in-out;
                }

                ::slotted(profile-card:hover) {
                    transform: scale(1.05);
                    background: white;
                    box-shadow: 0 2px 9px 1px rgba(0,0,0,0.2);
                    border-radius: 3px;
                }
            </style>
            <slot></slot>
        `;
    }

}