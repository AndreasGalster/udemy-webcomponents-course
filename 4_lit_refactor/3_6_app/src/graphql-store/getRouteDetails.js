import gql from 'graphql-tag';

export const getRouteDetails = gql`
  query {
    getRouteDetails @client {
      routePath 
      routeParam
    }
  }
`;