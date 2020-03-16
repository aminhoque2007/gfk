import React from 'react';

import SearchQuery from '../../components/SearchQuery';
import Styles from './App.scss';
import {loadStyles} from '../../utils';

const getClassName = loadStyles(Styles);

const App = () => (
  <main className={getClassName('Main')}>
    <SearchQuery />
  </main>
);

export default App;
