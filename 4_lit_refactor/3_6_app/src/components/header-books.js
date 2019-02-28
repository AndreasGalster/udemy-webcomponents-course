import { LitElement, property, html, css } from "lit-element";
import { Button } from "@material/mwc-button";
import { inkReset } from "@andreas-galster/inkling";
import { HeaderBase } from "./header-base";

export class HeaderBooks extends HeaderBase {
  // static styles = css`
  static get styles() { 
    return [
  super.styles,
  css`  
    h1 {

    }
  `]};
  // `;


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
        <style>
          h1 {
            max-width: 500px;
            font-size: 48px;
          }

          h2 {
            margin-top: 20px;
            max-width: 450px;
          }

          h2, h4 {
            font-weight: 500;
            font-size: 17px;
            opacity: 0.7;
          }

          h3, h4 {
            line-height: 1;
          }

          img {
            border-radius: 50%;
            border: 4px solid var(--secondary-light);
            width: 77px;
            box-sizing: border-box;
            margin-right: 10px;
          }

          header {
            position: absolute;
            top: 60px;                
          }

          footer {
            position: absolute;
            bottom: 30px;            
          }
        </style>

        <h1>The five love languages</h1>
        <h2>Gary Chapman's five language explain eloquently how every partner needs to learn each other's love language to keep a relationship healthy after the in-love experience.</h2>
    `;
	}

	footer() {
    return html`
      <flex-align center>
        <img src='http://lorempixel.com/100/100/cats/'>
        <div>
          <h3>Author name</h3>
          <h4>Author profession</h4>
        </div>
      </flex-align>
    `;
	}
}

customElements.define("books-header", HeaderBooks);