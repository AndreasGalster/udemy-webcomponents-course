import { LitElement, property, html, css } from "lit-element";
import { Button } from "@material/mwc-button";
import { inkReset } from "@andreas-galster/inkling";

class QuotesHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      color: white;
      overflow: auto;
    }

    h1 {
      font-size: 40px;
      line-height: 1.2;
      padding: 2px 0;
      width: 560px;
      margin-top: 15%;
      margin-bottom: 35px;
      font-weight: 300;
      position: relative;
    }

    div {
      max-width: var(--mw);
      margin: 21px auto 60px auto;
    }

    span {
      background: none;
      display: inline;
      padding: 0.7rem 1.3rem;

      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      z-index: 2;
      position: relative;
    }

    section span {
      color: transparent;
      background-color: var(--primary);
      opacity: 0.5;
    }

    h3 {
      opacity: 0.7;
    }

    p {
      opacity: 0.3;
    }

    section {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    flex-align {
      display: flex;
      align-items: center;
    }

    flex-grow {
      flex-grow: 1;
    }
  `;

  @property({ type: Object }) person = {};

  render() {
    return html`
      ${inkReset}

      <style>
        :host {
          background: linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86))
              no-repeat center center fixed,
            url(${this.person.pictures.headerPic}) no-repeat center center;
          background-size: cover, cover;
        }
      </style>
      <div>
        <p>Quote of the day</p>

        <h1>
          <span>
            ${this.person.quotes[0]}
          </span>
          <section>
            <span>
              ${this.person.quotes[0]}
            </span>
          </section>
        </h1>

        <flex-align>
          <flex-grow>
            <h2>${this.person.firstName} ${this.person.lastName}</h2>
            <h3>${this.person.typeOfPerson.join(", ")}</h3>
          </flex-grow>
          <mwc-button outlined>SEE PROFILE</mwc-button>
        </flex-align>
      </div>
    `;
  }
}

customElements.define("quotes-header", QuotesHeader);
