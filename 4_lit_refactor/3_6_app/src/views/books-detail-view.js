import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';

import '../components/book-highlight';
import {bookHighlight} from '../_mocks';


@customElement("books-detail-view")
export class booksDetailView extends PageViewElement {
	static styles = css`
		:host {
			background: var(--bg-detail);
		}
	`;

	render() {
		return html`
		
			<book-highlight .book=${bookHighlight}></book-highlight>

		`;
	}
}