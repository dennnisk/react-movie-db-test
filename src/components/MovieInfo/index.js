import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Content, Text} from './MovieInfo.styles'

import Thumb from '../Thumb';
import Spinner from '../Spinner';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import NoImage from '../../images/no_image.jpg';

const MovieInfo = ({movie}) => {

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
          }
          clickable={false}
          />
          <Text>
            <h1>{movie.title}</h1>
            <h3>PLOT</h3>
            <p>{movie.overview}</p>

            <div className="rating-directors">
              <h3>RATING</h3>
              <div className="score">
                {movie.vote_average}
              </div>

              {console.log(movie)}
              <div className="director">
                <h3>DIRECTOR {(movie && movie.directors && (movie.directors?.lenth) > 1) ? 'S': '' }</h3>
                {
                  (movie && movie.directors) ?
                    movie.directors.map(d => (
                      <p key={d.credit_id}>{d.name}</p>
                    ))
                  : <Spinner />
                }
              </div>
            </div>
          </Text>
      </Content>
    </Wrapper>
  )
}


MovieInfo.prototype = {
  movie: PropTypes.object
}


export default MovieInfo;