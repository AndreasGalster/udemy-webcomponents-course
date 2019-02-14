import { LitElement, html, css, customElement, property } from "lit-element";


@customElement("max-width")
export class MaxWidth extends LitElement {
    static styles = css`
        :host {
            display: block;
            width: var(--mw);
            margin: 0 auto;
          }      
    `;

    render() {
        return html`
            <slot></slot>
		`;
	}
}
