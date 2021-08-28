import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../images/search-icon.svg'

import  {Wrapper, Content} from './SearchBar.styles'

const SearchBar = ( { setSearchTerm } ) => {

  const [state, setState] = useState("");

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state])


  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type="text"
          placeholder='Search a movie'
          onChange={e => setState(e.currentTarget.value)}
          value={state}
          />
      </Content>
    </Wrapper>
  )
}

SearchBar.prototype = {
  setSearchTerm: PropTypes.string
}

export default SearchBar;

