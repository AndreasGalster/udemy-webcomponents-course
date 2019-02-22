import { LitElement, property, html, css } from "lit-element";
import { Button } from "@material/mwc-button";
import { inkReset } from "@andreas-galster/inkling";
import { HeaderBase } from "./header-base";

import "../components/flex-grow.js";
import "../components/flex-align.js";


export class HeaderQuotes extends HeaderBase {
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
        bottom: 40px;  
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
    console.log(changedProps);
    console.log(this.item.pictures.headerPic);
    console.log(changedProps.get('item'));

    if(this.item) {
      this.picture = this.item.pictures.headerPic; 
    }

    console.log(this.picture);
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
          <mwc-button outlined>SEE PROFILE</mwc-button>
        </flex-align>    
    `;
	}
}

customElements.define("quotes-header", HeaderQuotes);