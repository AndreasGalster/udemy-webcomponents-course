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

export class AuthorHighlight extends LitElement {
  static styles = css`
    :host {
      cursor: pointer;
      display: block;
      ${uCSS(radiusAll.lg)}
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


    mwc-card {
      box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
      background: white;
      display: block;
      width: 333px;
      box-sizing: border-box;

      ${uCSS(paddingAll.md)}
      ${uCSS(radiusAll.md)}
    }

    img {
      width: 100%;
      height: auto;
      ${uCSS(radiusAll.md)}          
    }

    a {
      display: flex;
      align-items: center;
    }

    a img {
      width: 32px;
    }


  `;

  @property({ type: Object }) person = {};
  // ${this.person.author.pictures.cardPic}

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

        <mwc-card>
            <img src=${this.person.author.pictures.profilePic}>

            <h1>Categories</h1>
            ${this.person.author.categories.map(
              c =>
                html`
                  <mwc-chip>${c}</mwc-chip>
                `
            )}

            <h1>Followers</h1>
            ${this.person.author.socialMedia.map(
              c =>
                html`
                  <a href=${c.link}>
                    <img src='../assets/${c.networkName}-icon.svg'>
                    <p>${new Intl.NumberFormat('en-US').format(c.count)} ${this.getSocialText(c.networkName)}</p>
                  </a>
                `
            )}
        </mwc-card>
    `;
  }
}

customElements.define("author-highlight", AuthorHighlight);
