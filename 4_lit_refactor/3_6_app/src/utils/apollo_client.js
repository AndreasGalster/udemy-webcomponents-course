import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import { RetryLink } from 'apollo-link-retry';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache, CachePersistor } from 'apollo-cache-persist';


// First we set the URL for the API endpoint
// Defaults to localhost on dev, and URL on production
// Initiate new apolloClient as used in all components fetching GraphQL data

let dynamicUrl = '';

if (process.env.NODE_ENV === 'production') {
  dynamicUrl = process.env.api_url;
} else {
	dynamicUrl = 'http://localhost:8080/graphql';
}


const httpLink = createHttpLink({
  uri: dynamicUrl
});

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('id_token')
  const authorizationHeader = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
	// console.log(operation)
  return forward(operation)
})

const retryLink = new RetryLink();
const cache = new InMemoryCache();


// const httpLinkWithAuthToken = middlewareAuthLink.conact(retryLink).concat(httpLink);
const httpLinkWithAuthToken = ApolloLink.from([
  middlewareAuthLink,
  retryLink,
  httpLink
]);


const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all'
  }
}

const apolloClient = new ApolloClient({
  cache: cache,
  link: httpLinkWithAuthToken,
  defaultOptions: defaultOptions
});

// persistCache({
// 	cache: apolloClient.cache,
// 	storage: window.localStorage,
// //   storage: window.sessionStorage
// 	debug: true
// });


export {apolloClient};