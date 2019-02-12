import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';

@customElement("books-detail-view")
class booksDetailView extends PageViewElement {
	render() {
        return html`
            <h1>books-detail view</h1>
		`;
	}
}