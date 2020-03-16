import React from 'react';
import getOr from 'lodash/fp/getOr';

import {getFormattedDate, sortByDateDesc} from '../../utils';
import Styles from './UserHistory.scss';
import {loadStyles} from '../../utils';

const getClassName = loadStyles(Styles);

const UserHistory = ({commits}) => {
  const dateKey = 'commit.authoredDate';
  const sortedCommits = sortByDateDesc(commits, dateKey);

  return sortedCommits.map((commit, index) => {
    const commitMessage = getOr(null, 'commit.message', commit);
    const commitDate = getOr(null, dateKey, commit);
    return (
      <div className={getClassName('User-history')} key={`commit-${index}`}>
        {commitDate && (
          <p className={getClassName('User-history__date')}>
            {getFormattedDate(commitDate)}
          </p>
        )}
        {commitMessage && <p>{commitMessage}</p>}
      </div>
    );
  });
};

export default UserHistory;
