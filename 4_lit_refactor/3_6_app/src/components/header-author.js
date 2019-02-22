import { LitElement, property, html, css, nothing } from "lit-element";
import { Button } from "@material/mwc-button";
import { inkReset } from "@andreas-galster/inkling";
import { HeaderBase } from "./header-base";

console.log('nothing', nothing);

export class HeaderAuthor extends HeaderBase {
  static get styles() { 
    return [
  super.styles,
  css`
    header {
      position: absolute;
      top: 120px;                
    }

    h1 {
      font-size: 70px;
    }

    h2 {
      font-size: 17px;
      opacity: 0.7;
      
    }
  `]};

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
        <h1>Tony Robbins</h1>
        <h2>Bla, bla, bla</h2>
    `;
	}

	footer() {
    return nothing;
	}
}

customElements.define("authors-header", HeaderAuthor);