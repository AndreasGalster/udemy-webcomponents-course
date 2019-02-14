import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';

import {quotesHeader, authorPreview, booksPreview, quotesPreview} from '../_mocks';

import "../components/quotes-header.js";
import "../components/author-preview.js";
import "../components/book-preview.js";
import "../components/quote-preview.js";
import "../components/max-width.js";


@customElement("home-view")
export class HomeView extends PageViewElement {
    static styles = css`
        :host {
            background: var(--bg-overview); 
        }

          mwc-card {
              display: block;
              background: white;
              box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);
              margin-bottom: 150px;
          }
    `;

    render() {
        return html`

            <quotes-header .person=${quotesHeader}></quotes-header>
            
            <max-width>
                <mwc-card style="display: flex">
                        <author-preview .person=${authorPreview}></author-preview>
                        <author-preview .person=${authorPreview}></author-preview>
                <author-preview .person=${authorPreview}></author-preview>
            </mwc-card>
            
            <mwc-card style="display: flex">
                    <book-preview .book=${booksPreview}></book-preview>
                    <book-preview .book=${booksPreview}></book-preview>
                    <book-preview .book=${booksPreview}></book-preview>
                    <book-preview .book=${booksPreview}></book-preview>
                </mwc-card>
                
                <mwc-card style="display: flex">
                        <quote-preview .quote=${quotesPreview}></quote-preview>
                        <quote-preview .quote=${quotesPreview}></quote-preview>
                        <quote-preview .quote=${quotesPreview}></quote-preview>
                        <quote-preview .quote=${quotesPreview}></quote-preview>
                    </mwc-card>      
                </max-width>


		`;
	}
}
