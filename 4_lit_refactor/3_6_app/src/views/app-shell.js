import { LitElement, html, css, customElement, property } from "lit-element";
import { sharedStyles } from "./shared-styles.js";
import "./profile-card.js";
import "./profile-cards-animator.js";
import "./profile-dialog.js";

import "../components/author-highlight";
import "../components/book-highlight";


import {Routing} from '../utils/routing';

import { inkVariables } from "@andreas-galster/inkling";
import {
  fixedTop,
  absoluteView,
  flxCtr, flx,
  paddingAll,
  radiusAll
} from "@andreas-galster/inkling/dist/ink-layout-helpers-lit";
import { inkReset } from "@andreas-galster/inkling";

import "../components/max-width.js";



import { updateMetadata } from 'pwa-helpers/metadata.js';

updateMetadata({
  title: 'My App - view 1',
  description: 'This is my sample app',
  url: window.location.href,
  image: '/assets/book1.png'
});


// console.log(process.env.NODE_ENV);

console.log(inkVariables);



@customElement("app-shell")
// export class AppShell extends LitElement {
export class AppShell extends Routing(LitElement) {
  @property({ type: Object }) people;

  constructor() {
    super();

    this.addEventListener("openDialog", e =>
      this.querySelector("profile-dialog").open(e.detail)
    );
  }

  createRenderRoot() {
    return this;
  }

  // --secondary-fade: rgba(0, 61, 114, 0.82);
  render() {
    return html`
      ${inkVariables}
      <style>
        :root {
          --primary: #f30046;
          --primary-fade: rgba(243, 0, 70, 0.56);
          --secondary: #0057a2;
          --secondary-fade: rgba(0, 61, 114, 0.86);

          font-family: "Source Sans Pro";

          --mdc-theme-primary: var(--primary);
          --mw: 1320px;

          --bg-detail: #F6F6F6;
          --bg-overview: #12161E;
          --bg-overview: hsla(60, 10%, 93%, 1);
        }

        app-shell {
						padding-top: 70px;
            background: var(--bg-overview);
						${absoluteView}
					}

					a {
						text-decoration: none;
						cursor: pointer;
					}

          max-width {
						${flxCtr}
          }

					header {
						background-color: white;
						z-index: 30;
						height: 64px;
						box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
            ${fixedTop}
            ${flx}
					}

					a {
						margin: 0;
						font-size: 13px;
						color: black;
						font-size: 14px;
						letter-spacing: 1px;
						text-transform: none;
						font-weight: 300;
						${radiusAll.sm}
						${paddingAll.sm}
					}

          a::after {
            display: block;
            content: attr(title);
            font-weight: bold;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }

					a[active], a:hover {
						font-weight: 600;
						color: var(--primary);
					}


        ._page[active] {
						display: block;
					}
					
        ._page {
          display: none;
        }        
      </style>

        <header>
          <max-width>
            <a href='/' ?active=${this.route === "/"}>Home</a>
            <a href='/authors' ?active=${this.route === "/authors"}>Authors</a>
            <a href='/books' ?active=${this.route === "/books"}>Books</a>
            <a href='/quotes' ?active=${this.route === "/quotes"}>Quotes</a>                        
          </max-width>
				</header>

        <home-view class='_page' ?active=${this.route === "/"}></home-view>
        <authors-overview-view class='_page' ?active=${this.route === "/authors"}></authors-overview-view>
        <authors-detail-view class='_page' ?active=${this.route === "/authors/"}></authors-detail-view>
        <books-overview-view class='_page' ?active=${this.route === "/books"}></books-overview-view>
        <books-detail-view class='_page' ?active=${this.route === "/books/"}></books-detail-view>
        <quotes-overview-view class='_page' ?active=${this.route === "/quotes"}></quotes-overview-view>
    `;
  }
}

// <quotes-header .person=${quotesHeader}></quotes-header>
// <div style="display: flex">
//   <author-preview .person=${authorPreview}></author-preview>
//   <author-preview .person=${authorPreview}></author-preview>
//   <author-preview .person=${authorPreview}></author-preview>
// </div>

// <div style="display: flex">
//   <book-preview .book=${booksPreview}></book-preview>
//   <book-preview .book=${booksPreview}></book-preview>
//   <book-preview .book=${booksPreview}></book-preview>
//   <book-preview .book=${booksPreview}></book-preview>
// </div>

// <div style="display: flex">
//   <quote-preview .quote=${quotesPreview}></quote-preview>
//   <quote-preview .quote=${quotesPreview}></quote-preview>
//   <quote-preview .quote=${quotesPreview}></quote-preview>
//   <quote-preview .quote=${quotesPreview}></quote-preview>
// </div>      

// <author-highlight .person=${authorHighlight}></author-highlight>
// <book-highlight .book=${bookHighlight}></book-highlight>


