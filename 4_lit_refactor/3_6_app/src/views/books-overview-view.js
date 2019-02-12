import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';

@customElement("books-overview-view")
class booksOverviewView extends PageViewElement {
	render() {
        return html`
            <h1>books-overview view</h1>
		`;
	}
}