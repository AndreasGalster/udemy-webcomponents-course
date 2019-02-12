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
import { inkReset } from "@andreas-galster/inkling";

class QuotePreview extends LitElement {
  static styles = css`
    :host {
      cursor: pointer;
    }
  `;

  @property({ type: Object }) quote = {};
  // ${this.quote.author.pictures.cardPic}
  render() {
    return html`
      ${inkReset}

      <style>
        :host {
          display: block;
          overflow: hidden;
          flex-grow: 1;
          margin: 10px;
          ${radiusAll.lg}

          text-align: center;
          position: relative;
        }

        :host(:hover) .content_wrapper {
          transform: scale(1.05);
        }

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

        a {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;

          ${paddingAll.md}
        }
      </style>

        <div class="content_wrapper"></div>

        <a
            href="podcast?id=${this.quote.id}"
          >
          <h1>
                ${this.quote.quote}
              </h1>

              <h2>
                ${this.quote.author.firstName} ${this.quote.author.firstName}
              </h2>
              <h3>${this.quote.author.typeOfPerson.join(", ")}</h3>
          </a>


    `;
  }
}

customElements.define("quote-preview", QuotePreview);
