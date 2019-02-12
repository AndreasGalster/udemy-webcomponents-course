import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';

@customElement("quotes-overview-view")
class quotesOverviewView extends PageViewElement {
	render() {
        return html`
            <h1>quotes-overview view</h1>
		`;
	}
}