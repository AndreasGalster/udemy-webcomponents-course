import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';

import "../components/quotes-header.js";
import "../components/author-preview.js";
import "../components/book-preview.js";
import "../components/quote-preview.js";

@customElement("home-view")
class HomeView extends PageViewElement {
	render() {
        return html`

            <quotes-header .person=${quotesHeader}></quotes-header>
            
            <div style="display: flex">
                <author-preview .person=${authorPreview}></author-preview>
                <author-preview .person=${authorPreview}></author-preview>
                <author-preview .person=${authorPreview}></author-preview>
            </div>

            <div style="display: flex">
                <book-preview .book=${booksPreview}></book-preview>
                <book-preview .book=${booksPreview}></book-preview>
                <book-preview .book=${booksPreview}></book-preview>
                <book-preview .book=${booksPreview}></book-preview>
            </div>

            <div style="display: flex">
                <quote-preview .quote=${quotesPreview}></quote-preview>
                <quote-preview .quote=${quotesPreview}></quote-preview>
                <quote-preview .quote=${quotesPreview}></quote-preview>
                <quote-preview .quote=${quotesPreview}></quote-preview>
            </div>      


		`;
	}
}
