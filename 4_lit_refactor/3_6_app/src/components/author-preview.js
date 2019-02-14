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

export class AuthorPreview extends LitElement {
  static styles = css`
    :host {
      cursor: pointer;
      display: block;
      overflow: hidden;
      flex-grow: 1;
      margin: 10px;
      ${uCSS(radiusAll.lg)}

      position: relative;
    }

    mwc-chip {
      background: white;
      opacity: 0.65;
      color: var(--secondary);
      border-radius: 50px;
      padding: 2px 9px;
      text-transform: uppercase;
      font-size: 12px;
      margin-right: 3px;
      margin-top: 22px;
      display: inline-block;          
    }

    :host(:hover) div {
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

    div {
      transition: transform 0.5s ease-in-out;
      padding-top: 100%;
    }
  `;

  @property({ type: Object }) person = {};
  // ${this.person.author.pictures.cardPic}


connectedCallback() {
  super.connectedCallback();
  this.updateStyles('--author-bg', `url(https://i1.wp.com/youberelentless.com/wp-content/uploads/2017/10/darren-hardy-motivational-speaker1.jpg?fit=770%2C462)`);
}

updateStyles(prop, style) {
  this.style.setProperty(prop, style);  
}
// url(https://i1.wp.com/youberelentless.com/wp-content/uploads/2017/10/darren-hardy-motivational-speaker1.jpg?fit=770%2C462) no-repeat center center;
// background-size: cover, cover;
  render() {
    return html`
      ${inkReset}

      <style>
        div {
          background: var(--author-bg)
              no-repeat center center fixed;
          background-size: cover;


          background: linear-gradient(
                var(--secondary-fade),
                var(--secondary-fade)
              )
              no-repeat center center fixed,
              var(--author-bg) no-repeat center center;
          background-size: cover, cover;          
        }

      </style>

        <div></div>

        <a
            href="authors/${this.person.id}"
          >
              <h1>
                ${this.person.author.firstName} ${this.person.author.firstName}
              </h1>
              <h2>${this.person.author.typeOfPerson.join(", ")}</h2>

              ${this.person.author.categories.map(
                c =>
                  html`
                    <mwc-chip>${c}</mwc-chip>
                  `
              )}
          </a>


    `;
  }
}

customElements.define("author-preview", AuthorPreview);




