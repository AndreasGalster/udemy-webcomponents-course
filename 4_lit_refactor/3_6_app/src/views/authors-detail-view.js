import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';

@customElement("authors-detail-view")
export class authorsDetailView extends PageViewElement {
	render() {
        return html`
            <h1>authors-detail view</h1>
		`;
	}
}