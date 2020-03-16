import React from 'react';

import Styles from './SearchInput.scss';
import {loadStyles} from '../../utils';

const getClassName = loadStyles(Styles);

const SearchInput = ({handleSubmit, loading}) => (
  <form data-testid="searchForm" onSubmit={handleSubmit}>
    <fieldset>
      <legend>Github Search</legend>
      <label className={getClassName('Search-input__label')} htmlFor="username">
        Username
      </label>
      <input id="username" name="searchTerm" type="text" />
      <input
        id="searchButton"
        disabled={loading}
        type="submit"
        value="Search"
      />
    </fieldset>
  </form>
);

export default SearchInput;
