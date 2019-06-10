import React from 'react';

import Button from '../button';
import Input from '../input';

import './Search.css';

const Search = () => {
  return (
    <div className='SearchWrapper'>
      <Input type={ 'text' } placeholder={ 'What are you looking for?' } theme='Search-input' />
      <Button text={ 'Search' } theme='Search-button' />
    </div>
  );
}

export default Search;