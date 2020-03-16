import {hot} from 'react-hot-loader/root';
import React from 'react';
import {render} from 'react-dom';
import {ApolloProvider} from '@apollo/react-hooks';

import App from './components/App';
import {client} from './client';

// No adjustments needed for production - HotApp is fine.
// https://github.com/gaearon/react-hot-loader
const HotApp = hot(App);

export const mount = async () => {
  render(
    <ApolloProvider client={client}>
      <HotApp />
    </ApolloProvider>,
    document.getElementById('root'),
  );
};

mount();
