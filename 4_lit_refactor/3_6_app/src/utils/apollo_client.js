import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import { RetryLink } from 'apollo-link-retry';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache, CachePersistor } from 'apollo-cache-persist';
import gql from 'graphql-tag';
import {getRouteDetails} from '../graphql-store/getRouteDetails';

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
  defaultOptions: defaultOptions,
  typeDefs: gql`
    type Route {
      routePath: String
      routeParam: String
    }

    extend type Query {
      getRouteDetails: Route
    }

    extend type Mutation {
      updateRouteDetails(routePath: String, routeParam: String): Route
    }
  `,  
  resolvers: {
    Query: {
      // getRouteDetails: (root, args, context, info) => ({routePath: 'bla', routeParam: 'blubb'})
      getRouteDetails(_, __, {cache}) {
        const { routeDetails } = cache.readQuery({ query: getRouteDetails });
        console.log('running resolver');
        console.log(routeDetails);
      //   // return a read from the cache
      }          
      // Or make a remote API call
    },
    Mutation: {
      updateRouteDetails(_, {routePath, routeParam}, {cache}) {
        console.log('running update route resolver');

        console.log(cache);
        console.log(routePath);
        console.log(routeParam);

        cache.writeData({ 
          data: { 
            getRouteDetails: {
              __typename: 'Route',
              routePath, 
              routeParam
            } 
          } 
        })
      }
    }

    // Route: {
    //   isInCart: (route, _args, { cache }) => {
    //     const { cartItems } = cache.readQuery({ ,
    //       query: GET_CART_ITEMS 
    //     });
    //     return cartItems.includes(route.id);
    //   },
    // },  
  }
});

cache.writeData({
  data: {
    getRouteDetails: {
      __typename: 'Route',
      routePath: '',
      routeParam: ''
    },
  },
});

// persistCache({
// 	cache: apolloClient.cache,
// 	storage: window.localStorage,
// //   storage: window.sessionStorage
// 	debug: true
// });


export {apolloClient};