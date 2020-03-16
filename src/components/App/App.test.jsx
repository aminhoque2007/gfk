import React from 'react';
import {
  act,
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { toHaveAttribute } from '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/react-testing';

import App from './App';
import {
  mockWithError,
  mockWithNoResults,
  mockWithResults,
} from './__fixtures__/userQueriesResponse';
import { NETWORK_ERROR_MESSAGE, NO_USER_RESULTS } from '../../constants';

describe('App', () => {
  it('should render a text input and search button', () => {
    const { getByLabelText, getByDisplayValue } = render(<App />);
    expect(getByLabelText(/Username/)).toHaveAttribute('type', 'text');
    expect(getByDisplayValue('Search')).toHaveAttribute('type', 'submit');
  });

  it('should render 3 results when user clicks search button and only 3 matches returned by Github API', async () => {
    const { container, getByTestId } = render(
      <MockedProvider mocks={mockWithResults} addTypename={false}>
        <App />
      </MockedProvider>,
    );
    const form = getByTestId('searchForm');

    act(() => {
      fireEvent.submit(form, { target: { searchTerm: { value: 'miah' } } });
    });
    await waitForElementToBeRemoved(() => getByTestId('loading'));

    const spans = container.querySelectorAll('span');
    spans.forEach((span, index) =>
      expect(span.innerHTML).toEqual(
        mockWithResults[0].result.data.search.edges[index].node.login,
      ),
    );
  });

  it('should render a div with text stating no matching users were found when the Github API responds with no matches.', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mockWithNoResults} addTypename={false}>
        <App />
      </MockedProvider>,
    );
    const form = getByTestId('searchForm');

    act(() => {
      fireEvent.submit(form, {
        target: { searchTerm: { value: 'hlkadfhlajdsf' } },
      });
    });
    await waitForElementToBeRemoved(() => getByTestId('loading'));

    const usersNotFoundDiv = getByTestId('noMatchingUsers');
    expect(usersNotFoundDiv).toHaveTextContent(NO_USER_RESULTS);
  });

  it('should render a loading indicator while the App waits for a response from the Github API.', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <App />
      </MockedProvider>,
    );
    const form = getByTestId('searchForm');

    act(() => {
      fireEvent.submit(form, {
        target: { searchTerm: { value: 'hlkadfhlajdsf' } },
      });
    });

    const loadingDiv = getByTestId('loading');
    expect(loadingDiv).toMatchSnapshot();
  });

  it('should render an error message when the Github API responds with an error response.', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mockWithError} addTypename={false}>
        <App />
      </MockedProvider>,
    );
    const form = getByTestId('searchForm');

    act(() => {
      fireEvent.submit(form, {
        target: { searchTerm: { value: 'hlkadfhlajdsf' } },
      });
    });
    await waitForElementToBeRemoved(() => getByTestId('loading'));

    const errorDiv = getByTestId('error');
    expect(errorDiv).toHaveTextContent(NETWORK_ERROR_MESSAGE);
  });
});
