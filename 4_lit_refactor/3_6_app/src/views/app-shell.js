import { LitElement, html, css, customElement, property } from "lit-element";
import { sharedStyles } from "./shared-styles.js";
import "./profile-card.js";
import "./profile-cards-animator.js";
import "./profile-dialog.js";

import faker from "faker";

import "../components/author-highlight";
import "../components/book-highlight";


import {Routing} from '../utils/routing';

import { inkVariables } from "@andreas-galster/inkling";

// console.log(process.env.NODE_ENV);

console.log(inkVariables);

const quotesHeader = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  typeOfPerson: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  quotes: [`${faker.lorem.sentence()} ${faker.lorem.sentence()}`],
  pictures: {
    headerPic: faker.random.image()
  }
};

const authorPreview = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  authorId: faker.random.uuid(),
  author: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    typeOfPerson: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    categories: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    pictures: {
      cardPic: faker.random.image()
    }
  }
};

const booksPreview = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  authorId: faker.random.uuid(),
  title: faker.lorem.sentence(),
  author: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  },
  image: ['../assets/book1.png', '../assets/book2.png', '../assets/book3.png', '../assets/book4.png'],
  teaser: `${faker.lorem.sentence()} ${faker.lorem.sentence()}`  
};

const quotesPreview = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  authorId: faker.random.uuid(),
  quote: faker.lorem.sentence(),
  author: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    typeOfPerson: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    pictures: {
      cardPic: faker.random.image()
    }
  }
};

const authorHighlight = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  author: {
    pictures: {
      profilePic: faker.random.image()
    },    
    categories: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    socialMedia: [
      {
        networkName: 'facebook',
        count: faker.random.number(),
        link: faker.internet.url()
      },
      {
        networkName: 'twitter',
        count: faker.random.number(),
        link: faker.internet.url()
      },
      {
        networkName: 'instagram',
        count: faker.random.number(),
        link: faker.internet.url()
      },            
    ]
  }
};

const bookHighlight = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  title: faker.lorem.sentence(),
  image: faker.random.image(),
  affiliate: {
    link: faker.internet.url(),
    price: faker.commerce.price(),
  }
};


@customElement("app-shell")
// export class AppShell extends LitElement {
export class AppShell extends Routing(LitElement) {
  @property({ type: Object }) people;

  constructor() {
    super();

    this.addEventListener("openDialog", e =>
      this.querySelector("profile-dialog").open(e.detail)
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this.getPeople();
  }

  createRenderRoot() {
    return this;
  }

  async getPeople() {
    let peoplePromise = await fetch("https://randomuser.me/api/?results=50");
    let res = await peoplePromise.json();
    this.people = res.results;
  }

  render() {
    return html`
      ${inkVariables}
      <style>
        :root {
          --primary: #f30046;
          --primary-fade: rgba(243, 0, 70, 0.56);
          --secondary: #0057a2;
          --secondary-fade: rgba(0, 61, 114, 0.82);

          font-family: "Source Sans Pro";

          --mdc-theme-primary: var(--primary);
          --mw: 1320px;
        }

        div {
          display: flex;
        }

        div img {
          width: 100%;
          height: 100%;
        }

        ._page[active] {
						display: block;
					}
					
        ._page {
          display: none;
        }        
      </style>

        <home-view class='_page' ?active=${this.route === "/"}></home-view>
        <authors-overview-view class='_page' ?active=${this.route === "/authors"}></authors-overview-view>
        <authors-detail-view class='_page' ?active=${this.route === "/author"}></authors-detail-view>
        <books-overview-view class='_page' ?active=${this.route === "/books"}></books-overview-view>
        <books-detail-view class='_page' ?active=${this.route === "/book"}></books-detail-view>
        <quotes-overview-view class='_page' ?active=${this.route === "/quotes"}></quotes-overview-view>
    `;
  }
}

// <quotes-header .person=${quotesHeader}></quotes-header>
// <div style="display: flex">
//   <author-preview .person=${authorPreview}></author-preview>
//   <author-preview .person=${authorPreview}></author-preview>
//   <author-preview .person=${authorPreview}></author-preview>
// </div>

// <div style="display: flex">
//   <book-preview .book=${booksPreview}></book-preview>
//   <book-preview .book=${booksPreview}></book-preview>
//   <book-preview .book=${booksPreview}></book-preview>
//   <book-preview .book=${booksPreview}></book-preview>
// </div>

// <div style="display: flex">
//   <quote-preview .quote=${quotesPreview}></quote-preview>
//   <quote-preview .quote=${quotesPreview}></quote-preview>
//   <quote-preview .quote=${quotesPreview}></quote-preview>
//   <quote-preview .quote=${quotesPreview}></quote-preview>
// </div>      

// <author-highlight .person=${authorHighlight}></author-highlight>
// <book-highlight .book=${bookHighlight}></book-highlight>


