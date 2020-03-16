import React from 'react';

import ResultsListItem from '../ResultsListItem';
import {NO_USER_RESULTS} from '../../constants';

import Styles from './ResultsList.scss';
import {loadStyles} from '../../utils';

const getClassName = loadStyles(Styles);

const ResultsList = ({results}) => {
  if (results.search.edges.length === 0) {
    return <div data-testid="noMatchingUsers">{NO_USER_RESULTS}</div>;
  }
  return (
    <div className={getClassName('Results-list')}>
      {results.search.edges.map((user, index) => {
        const id = `search-result-${index}`;
        return <ResultsListItem key={id} item={user} testId={id} />;
      })}
    </div>
  );
};
export default ResultsList;
