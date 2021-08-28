// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import API from '../API'
// eslint-disable-next-line
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
// eslint-disable-next-line
import NoImage from '../images/no_image.jpg'

import HeroImage from './HeroImage'; 
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'; 
import SearchBar from './SearchBar'; 
import Button from './Button'; 

import {useHomeFetch} from '../hooks/useHomeFetch'

const Home: React.FC = () => {

  // eslint-disable-next-line
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch();

  if (error) return <div>Something went wrong</div>

  return (
    <div> 
      {!searchTerm && state.results[0] ?
        <HeroImage 
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
        : null
      } 
      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map(movie => (
          <Thumb 
            key={movie.id}
            clickable
            image={
              movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
            }
            movieId={movie.id}
            ></Thumb>
        ))}
        
      </Grid>
      {loading && <Spinner /> }
      {
        state.page < state.total_pages && !loading && (
          <Button text='Load More' callback={() => setIsLoadingMore(true)}/>     
        ) 
      }

    </div>
  );
}

export default Home;
