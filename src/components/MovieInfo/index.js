import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {Wrapper, Content, Text} from './MovieInfo.styles'

import Thumb from '../Thumb';
import Spinner from '../Spinner';
import Rate from '../Rate';
import API from '../../API';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import NoImage from '../../images/no_image.jpg';

import { Context } from '../../Context';

const MovieInfo = ({movie}) => {

  const [user] = useContext(Context);

  const handleRatting = async (value) => {
    
    const rate = await API.rateMovie(user.sessionId, movie.id, value);
    console.log(rate);
  }

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
            {
              user && 
              <div>
                <p>
                  Rate movie
                </p>
                <Rate callback={handleRatting} />
              </div>
            }
          </Text>
      </Content>
    </Wrapper>
  )
}


MovieInfo.prototype = {
  movie: PropTypes.object
}


export default MovieInfo;