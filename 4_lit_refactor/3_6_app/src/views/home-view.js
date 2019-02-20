import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';
import { Button } from "@material/mwc-button";

import {quotesHeader, authorPreview, booksPreview, quotesPreview} from '../_mocks';

import "../components/quotes-header.js";
import "../components/author-preview.js";
import "../components/book-preview.js";
import "../components/quote-preview.js";
import "../components/max-width.js";
import {
    radiusAll, paddingAll
  } from "@andreas-galster/inkling/dist/ink-layout-helpers-lit";
  import { inkReset, uCSS } from "@andreas-galster/inkling";


//   box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);
@customElement("home-view")
export class HomeView extends PageViewElement {
    static styles = css`
        :host {
            background: var(--bg-overview); 
        }

        mwc-card {
            display: block;
            background: white;
            box-shadow: 0 2px 7px 1px rgba(0,0,0,0.1);
            ${uCSS(radiusAll.lg)}
            ${uCSS(paddingAll.xs)}
        }
            
        max-width {
            padding-bottom: 100px;
        }
        
        flex-align {
            margin-top: 150px;
        }

        h1 {
            font-size: 22px;
            color: black;        
        }
    `;

    render() {
        return html`

            <quotes-header .person=${quotesHeader}></quotes-header>
            
            <max-width>
                <flex-align center>
                    <flex-grow grow='1'>
                        <h1>Authors</h1>
                    </flex-grow>
                    <flex-grow>
                        <a href='/authors'><mwc-button>SEE ALL</mwc-button></a>                    
                    </flex-grow>
                </flex-align>
                <mwc-card style="display: flex">
                        <author-preview .person=${authorPreview}></author-preview>
                        <author-preview .person=${authorPreview}></author-preview>
                <author-preview .person=${authorPreview}></author-preview>
            </mwc-card>
            

            <flex-align center>
                    <flex-grow grow='1'>
                        <h1>Books</h1>
                    </flex-grow>
                    <flex-grow>
                        <a href='/books'><mwc-button>SEE ALL</mwc-button></a>                    
                    </flex-grow>
                </flex-align>            
            <mwc-card style="display: flex">
                    <book-preview .book=${booksPreview}></book-preview>
                    <book-preview .book=${booksPreview}></book-preview>
                    <book-preview .book=${booksPreview}></book-preview>
                    <book-preview .book=${booksPreview}></book-preview>
                </mwc-card>
                

                <flex-align center>
                    <flex-grow grow='1'>
                        <h1>Quotes</h1>
                    </flex-grow>
                    <flex-grow>
                        <a href='/quotes'><mwc-button>SEE ALL</mwc-button></a>                    
                    </flex-grow>
                </flex-align>                
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
