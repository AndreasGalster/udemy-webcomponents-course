import { LitElement, property, html, css } from "lit-element";
import { HeaderBase } from "./header-base";
import gql from 'graphql-tag';
import "../components/flex-grow.js";
import "../components/flex-align.js";

const query = gql`
  query {
    getQuote {
      quote
      author {
        humanId
        firstName
        lastName
        typeOfPerson
      }
    }
  }
`;



export class HeaderQuotes extends HeaderBase {
  constructor() {
    super();
    this.query = query;
  }

    // static styles = [ 
    static get styles() { 
      return [
    super.styles,
    css`
      header {
        position: absolute;
        top: 20px;                
      }

      footer {
        position: absolute;
        bottom: 35px;  
        right: 0;
        left: 0;              
      }



      h1 {
        font-size: 40px;
        line-height: 1.2;
        padding: 2px 0;
        width: 560px;
        margin-bottom: 40px;
        font-weight: 300;
        position: relative;
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

      h2 {
        font-size: 22px;
      }

      h3 {
        opacity: 0.7;
        font-size: 15px;
        font-weight: 500;
        line-height: 1;
      }

      p {
        opacity: 0.3;
        font-size: 14px;
      }

      section {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }

      `]};
    // `];

  updated(changedProps) {
    if(this.item) {
      this.picture = this.item.pictures.headerPic; 
    }

  }

  header() {
    return html`
        <p>Quote of the day</p>
    `;
	}

	footer() {
    return html`
      <h1>
          <span>
            ${this.item.quotes[0]}
          </span>
          <section>
            <span>
              ${this.item.quotes[0]}
            </span>
          </section>
        </h1>

        <flex-align>
          <flex-grow grow='1'>
            <h2>${this.item.firstName} ${this.item.lastName}</h2>
            <h3>${this.item.typeOfPerson.join(", ")}</h3>
          </flex-grow>
          <a href='/authors/${this.item.humanId}'><mwc-button outlined>SEE PROFILE</mwc-button></a>
        </flex-align>    
    `;
	}
}

customElements.define("quotes-header", HeaderQuotes);