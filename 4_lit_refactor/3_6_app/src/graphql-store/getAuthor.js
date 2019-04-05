import gql from 'graphql-tag';

// Compute graphql documents statically for performance
export const getAuthor = gql`
  query($humanId: String) {
    getAuthor(humanId: $humanId) {
      _id
      humanId
      firstName
      lastName
    }
  }
`;