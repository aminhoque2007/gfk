import React, {useState} from 'react';
import getOr from 'lodash/fp/getOr';

import UserHistory from '../UserHistory';

import Styles from './ResultsListItem.scss';
import {loadStyles} from '../../utils';

const getClassName = loadStyles(Styles);

const getTextModifier = commits => {
  if (commits.length === 0) {
    return '';
  }
  return getClassName('Results-list-item__text--highlight');
};

const ResultsListItem = ({item: {node: user}, testId}) => {
  const commits = getOr([], 'commitComments.nodes', user);
  const [showHistory, toggleHistory] = useState(false);
  const textModifier = getTextModifier(commits);

  return (
    <>
      <div
        data-testid={testId}
        className={getClassName('Results-list-item')}
        onClick={() => toggleHistory(!showHistory)}
      >
        <img
          className={getClassName('Results-list-item__img')}
          src={user.avatarUrl}
        />
        <span
          className={`${getClassName(
            'Results-list-item__text',
          )} ${textModifier}`}
        >{`${user.login}`}</span>
      </div>
      {showHistory && <UserHistory commits={commits} />}
    </>
  );
};

export default ResultsListItem;
