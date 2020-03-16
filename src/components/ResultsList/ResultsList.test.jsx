import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import ResultsList from './ResultsList';
import { dataWithCommits } from './__fixtures__/resultsListData';

describe('ResultsList', () => {
  it('should show a list of commits when a user clicks a username that has a history of activity.', () => {
    const { container, getByTestId } = render(
      <ResultsList results={dataWithCommits} />,
    );
    const userDiv = getByTestId('search-result-0');
    act(() => {
      fireEvent.click(userDiv);
    });

    // for every commit there should be two <p> tags - commitDate and commitMessage.
    // test user 'miah' has three commits.
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toEqual(6);
  });
});
