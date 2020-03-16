import React from 'react';
import {useLazyQuery} from '@apollo/react-hooks';

import SearchInput from '../SearchInput';
import ResultsList from '../ResultsList';
import {USER_QUERY} from '../../queries';

import Styles from './SearchQuery.scss';
import {loadStyles} from '../../utils';

const getClassName = loadStyles(Styles);

const SearchQuery = () => {
  const [getSearchResults, {data, error, loading}] = useLazyQuery(USER_QUERY);
  const handleSubmit = event => {
    event.preventDefault();
    getSearchResults({
      variables: {searchTerm: event.target.searchTerm.value}
    });
  };
  return (
    <div>
      <SearchInput handleSubmit={handleSubmit} loading={loading} />
      {loading && (
        <div
          data-testid="loading"
          className={getClassName('Search-query__loader')}
        />
      )}
      {data && <ResultsList results={data} />}
      {error && <div data-testid="error">{error.message}</div>}
      {error && (
        <div>
          <hr />
          Dev note: An OAuth token is required to use the Github GraphQL API v4
          and needs to be added to Apollo Client config. Instructions can be
          obtained from{' '}
          <a
            href="https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql"
            rel="noreferrer"
            target="_blank"
          >
            here
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchQuery;
