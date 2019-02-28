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
  radiusAll
} from "@andreas-galster/inkling/dist/ink-layout-helpers-lit";
import { inkReset, uCSS } from "@andreas-galster/inkling";
import '../components/flex-grow';
import '../components/flex-align';


export class QuotePreview extends LitElement {
  static styles = css`
    :host {
      cursor: pointer;
      display: block;
      overflow: hidden;
      flex-grow: 1;
      color: white;
      ${uCSS(radiusAll.lg)}

      text-align: center;
      position: relative;
    }

    :host(:hover) .content_wrapper {
      transform: scale(1.05);
    }

    a {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      ${uCSS(paddingAll.md)}
    }

    h1 {
      font-size: 21px;
      font-weight: 300;
      margin-bottom: 30px;
      line-height: 1.1;      
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

  @property({ type: Object }) quote = {};
  // ${this.quote.author.pictures.cardPic}
  render() {
    return html`
      ${inkReset}

      <style>
        .content_wrapper {
          transition: transform 0.5s ease-in-out;
          background: linear-gradient(
                var(--secondary-fade),
                var(--secondary-fade)
              )
              no-repeat center center fixed,
            url(https://i1.wp.com/youberelentless.com/wp-content/uploads/2017/10/darren-hardy-motivational-speaker1.jpg?fit=770%2C462) no-repeat center center;
          background-size: cover, cover;
          padding-top: 100%;
        }
      </style>

        <div class="content_wrapper"></div>

        <a
            href="/authors/${this.quote.author.humanId}"
          >
            <flex-align direction='column'>
              <flex-grow grow='1'></flex-grow>
              <flex-grow>
                <h1>
                  ${this.quote.quote}
                </h1>

                <h2>
                  ${this.quote.author.firstName} ${this.quote.author.firstName}
                </h2>
                <h3>${this.quote.author.typeOfPerson.join(", ")}</h3>
              </flex-grow>
            </flex-align>
          </a>


    `;
  }
}

customElements.define("quote-preview", QuotePreview);
