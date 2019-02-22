import { LitElement, property, html, css } from "lit-element";
import { Button } from "@material/mwc-button";
import {
  trbl,
  flxGrow,
  flx,
  flxVert,
  flxCtr,
  flxCtrCtr,
  marginBot,
  paddingAll,
  radiusAll,
  border
} from "@andreas-galster/inkling/dist/ink-layout-helpers-lit";
import { inkReset, uCSS } from "@andreas-galster/inkling";
import '../components/flex-grow';
import '../components/flex-align';


export class BookPreview extends LitElement {
  static styles = css`
    :host {
      cursor: pointer;
      display: block;
      flex: auto;
      margin: 10px;
      color: white;
      position: relative;
      overflow: hidden;
      ${uCSS(border.g90)}
      ${uCSS(radiusAll.lg)}
    }

    :host(:hover) div {
      opacity: 1;
    }

    div {
      transition: opacity 0.4s ease-in-out;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: var(--secondary-fade);
      opacity: 0;

      ${uCSS(paddingAll.md)}
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }    

    h1 {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 30px;
      line-height: 1.3;
      letter-spacing: 0.2px;
    }

    h2 {
      font-size: 23px;
      font-weight: 600;
    }

    h3 {
      font-size: 16px;
      font-weight: 500;
      opacity: 0.7;
      text-transform: capitalize;
      line-height: 1;
    }

  `;

  @property({ type: Object }) book = {};
  // ${this.book.author.pictures.cardPic}
  render() {
    return html`
      ${inkReset}

      <style>

      </style>

        <img src=${this.book.image[Math.floor(Math.random()*this.book.image.length)]}>

        <div>

        <a
            href="books/${this.book.humanId}"
          >

          <flex-align direction='column'>
            <flex-grow grow='1'></flex-grow>
            <flex-grow>
              <h1>
                ${this.book.teaser}
              </h1>

              <h2>
                ${this.book.title}
              </h2>
              <h3>
                ${this.book.author.firstName} ${this.book.author.firstName}
              </h3>        
            </flex-grow>
          </flex-align>

          </a>
        </div>


    `;
  }
}

customElements.define("book-preview", BookPreview);
