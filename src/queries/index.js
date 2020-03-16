import gql from 'graphql-tag';

const DISPLAY_LIMIT = 10;

export const USER_QUERY = gql`
query ($searchTerm: String!){
  search (type: USER, query: $searchTerm, first: ${DISPLAY_LIMIT}) {
    edges {
      node {
        ... on User {
          avatarUrl
          login
          commitComments (last: ${DISPLAY_LIMIT}) {
      nodes {
        commit {
          authoredByCommitter
          authoredDate,
          message
        }
      }
    }
        }
      }
    }
  }
  }
`;
