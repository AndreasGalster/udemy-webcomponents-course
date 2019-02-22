import { LitElement, property, html, css } from "lit-element";
import { Button } from "@material/mwc-button";
import { inkReset } from "@andreas-galster/inkling";
import "../components/max-width.js";


export class HeaderBase extends LitElement {
  @property({ type: Object }) item = {};
  @property({ type: String }) picture;

  // static styles = [
    static get styles() { 
      return [    
        css`
          :host {
            display: block;
            color: white;
            overflow: auto;
          }

          h1 {
            font-weight: 300;
          }

          max-width {
            position: relative;
            padding-top: 35%;            
          }
        `
    ]};
      // `];

  dynamicStyle() {
    return html`
      <style>
        :host {
          background: linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86))
              no-repeat center center fixed,
            url(${this.picture}) no-repeat center center;
          background-size: cover, cover;
        }
      </style>
    `;
  }

	header() {
		return html``;
	}

	footer() {
		return html``;
	}

  render() {
    return html`
      ${inkReset}

        ${this.dynamicStyle()}

        <max-width>
          <header>
          ${this.header()}
          </header>

          <footer>
          ${this.footer()}
          </footer>
        </max-width>
    `;
  }
}