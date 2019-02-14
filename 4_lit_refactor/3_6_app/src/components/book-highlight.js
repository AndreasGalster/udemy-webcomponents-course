import { LitElement, property, html, css } from "lit-element";
import { Button } from "@material/mwc-button";
import {
  trbl,
  flxGrow,
  flx,
  flxVert,
  flxCtr,
  flxCtrCtr,
  marginTop,
  paddingAll,
  radiusAll
} from "@andreas-galster/inkling/dist/ink-layout-helpers-lit";
import { inkReset } from "@andreas-galster/inkling";

export class BookHighlight extends LitElement {
  static styles = css`
    :host {
      cursor: pointer;
    }
  `;

  @property({ type: Object }) book = {};
  // ${this.book.author.pictures.cardPic}

  getSocialText(val) {
    switch(val) {
      case 'facebook':
        return ' page likes';
        break;
      case 'twitter':
        return ' followers';
        break;
      case 'instagram':
        return ' followers';      
    }
  }


  render() {
    return html`
      ${inkReset}

      <style>
        :host {
          display: block;
          ${radiusAll.lg}
        }

        mwc-card {
          box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
          background: white;
          display: block;
          width: 333px;
          box-sizing: border-box;

          ${paddingAll.md}
          ${radiusAll.md}
        }

        mwc-card > img {
          width: 100%;
          height: auto;
          ${radiusAll.md}          
        }

        a {
          display: flex;
          align-items: center;
          ${marginTop.md}
        }

        a img {
          width: 150px;
        }

        p {
          text-align: right;
          flex-grow: 1;
        }

      </style>

        <mwc-card>
            <img src=${this.book.image}>

            <a href=${this.book.affiliate.link}>
              <img src='../assets/amazon-store-button.svg'>
              <p>$ ${this.book.affiliate.price}</p>
            </a>
        </mwc-card>
    `;
  }
}

customElements.define("book-highlight", BookHighlight);
