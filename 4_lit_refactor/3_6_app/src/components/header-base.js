import { LitElement, property, html, css } from "lit-element";
import { ApolloQuery } from '@apollo-elements/lit-apollo';
import { apolloClient } from '../utils/apollo_client';

import { inkReset } from "@andreas-galster/inkling";
import "../components/max-width.js";


// export class HeaderBase extends LitElement {
export class HeaderBase extends ApolloQuery {
  @property({ type: Object }) item = {};
  @property({ type: String }) picture;
  client = apolloClient;

  // static styles = [
    static get styles() { 
      return [    
        css`
          :host {
            display: block;
            color: white;
            overflow: auto;
            position: sticky;
            top: 64px;
          }

          h1 {
            font-weight: 300;
          }

          max-width {
            position: relative;
            padding-top: 27%;            
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
    const { data, error, loading } = this;
    const { item = {} } = data || {}

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