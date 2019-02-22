import { LitElement, html, css, customElement, property } from "lit-element";


@customElement("flex-grow")
export class FlexGrow extends LitElement {
    @property({ type: Number }) grow = 0;

    // connectedCallback() {
    //     console.log(this.grow);
    //     // this.grow = 1;
    // }

    updated(changedProps) {
        // console.log(changedProps.get('grow'));
        // console.log(this.grow);
        // changedProps.map(prop => {
        //     console.log(prop);
        // })
        // if(changedProperties.get('grow')) 
        //     this.updateStyles('--flex-grow', `${this.grow}`);
        this.updateStyles('--flex-grow', `${this.grow}`);
    }
      
    updateStyles(prop, style) {
        this.style.setProperty(prop, style);  
    }

    static styles = css`
        :host {
            display: block;
            flex-grow: var(--flex-grow);
        }      
    `;

    render() {
        return html`
            <slot></slot>
		`;
	}
}
