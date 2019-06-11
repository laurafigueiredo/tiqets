import React, { useState } from 'react';

// Components
import Button from '../button';
import Input from '../input';
import Card from '../card';

// Utils
import { useSearch } from '../../utils/useSearch';

// Styles
import './Search.css';

// Typescript interfaces
interface ItemProps {
  title: string;
  productUrl: string;
  summary: string;
  image: string;
  price: number;
  id: string;
}

interface searchApiProps {
  loading: boolean;
  error: string | null;
  getSearchResults: (query: string) => void;
  data: Array<ItemProps>;
}

const Search = () => {
  const [searchInput, setSearchInput] = useState();
  const {
    getSearchResults,
    loading,
    data: searchData,
    error }: searchApiProps = useSearch();

  function handleFormSubmit( event: any ) {
    
    event.preventDefault();
    getSearchResults( searchInput );

  }

  function handleOnChange( event: any ) {
    const { value } = event.target;

    setSearchInput(value);
  }

  return (
    <>
      <form className='SearchWrapper' onSubmit={ handleFormSubmit }>
        <Input
          name='searchInput'
          type='text'
          placeholder='What are you looking for?'
          theme='Search-input'
          onChange={ handleOnChange }
        />
        <Button
          text='Search'
          type='submit'
          theme='Search-button'
        />
      </form>
      <div>
        { loading && 'Loading....' }

        { !!error &&  'Error' }

        { searchData.length !== 0 &&
          searchData.map((item: ItemProps) => (
            <Card
              key={ `searchCard-${item.id}` }
              title={ item.title }
              summary={ item.summary }
              price={ item.price }
              image={ item.image }
              url={ item.productUrl }
              theme='Search-card' />
          ))
        }

      </div>
    </>
  );
}

export default Search;