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

import {useHomeFetch} from '../hooks/useHomeFetch'

const Home = () => {

  // eslint-disable-next-line
  const { state, loading, error } = useHomeFetch();

  return (
    <div> 
      {state.results[0] ?
        <HeroImage 
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
        : null
      } 
      <Grid header='Popular Movies'>
        {state.results.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
        
      </Grid>

    </div>
  );
}

export default Home;
