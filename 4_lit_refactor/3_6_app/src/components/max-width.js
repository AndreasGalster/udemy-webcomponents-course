import { LitElement, html, css, customElement, property } from "lit-element";


@customElement("max-width")
export class MaxWidth extends LitElement {
    static styles = css`
        :host {
            display: block;
            width: 100%;
            max-width: var(--mw);            
            margin: 0 auto;
            box-sizing: border-box;            
            padding: 10px;
          }      
    `;

    render() {
        return html`
            <slot></slot>
		`;
	}
}
