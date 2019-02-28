import { LitElement, property, html, css } from "lit-element";
import { apolloClient } from '../utils/apollo_client';
import { ApolloQuery } from '@apollo-elements/lit-apollo';
import gql from 'graphql-tag';


// Compute graphql documents statically for performance
const query = gql`
  query($humanId: String) {
    getAuthor(humanId: $humanId) {
      _id
      humanId
      firstName
      lastName
    }
  }
`;

// export class GraphQLTest extends LitElement {
export class GraphQLTest extends ApolloQuery {
  @property({ type: Object }) person = {};

  constructor() {
    super();
    this.client = apolloClient;
    this.query = query;
    console.log('bla');

    this.variables = {
      humanId: "tony-robbins"
    }
  }

  render() {
    const { data, error, loading } = this;
    const { helloWorld = {} } = data || {}
    return (
        loading ? html`
          <what-spin></what-spin>`
      : error ? html`
          <h1>😢 Such Sad, Very Error! 😰</h1>
          <div>${error ? error.message : 'Unknown Error'}</div>`
      : html`
          <div>it loaded</div>
      `
    );

  }
}

customElements.define("graphql-test", GraphQLTest);
