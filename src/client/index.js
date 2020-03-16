import {IntrospectionFragmentMatcher} from 'apollo-cache-inmemory';
import introspectionQueryResultData from '../../src/fragmentTypes.json';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from 'apollo-boost';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});
const gqlAPI = 'https://api.github.com/graphql';

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: 'Bearer ' + '' // replace empty string with call to getToken() if user is authenticated.
    }
  });
  return forward(operation);
});

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, new HttpLink({uri: gqlAPI})]),
  cache: new InMemoryCache({fragmentMatcher}),
  typeDefs: {}
});
