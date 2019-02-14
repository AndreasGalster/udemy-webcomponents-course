import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';

@customElement("authors-overview-view")
export class authorsOverviewView extends PageViewElement {
	render() {
        return html`
            <h1>authors-overview view</h1>
		`;
	}
}