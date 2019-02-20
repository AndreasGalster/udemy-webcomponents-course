import { LitElement, html, css, customElement, property } from "lit-element";


@customElement("flex-align")
export class FlexAlign extends LitElement {
    @property({ type: String }) direction = 'row';
    @property({ type: Boolean }) center = false;


    // connectedCallback() {
    //     console.log(this.grow);
    //     // this.grow = 1;
    // }

    updated(changedProps) {
        console.log(changedProps);
        console.log(changedProps.get('grow'));
        // changedProps.map(prop => {
        //     console.log(prop);
        // })
        this.updateStyles('--align-items', `${!!this.center ? 'center' : 'initial'}`);
        this.updateStyles('--flex-direction', `${this.direction}`);
    }
      
    updateStyles(prop, style) {
        this.style.setProperty(prop, style);  
    }

    static styles = css`
        :host {
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: var(--flex-direction);
            align-items: var(--align-items);
        }      
    `;

    render() {
        return html`
            <slot></slot>
		`;
	}
}
