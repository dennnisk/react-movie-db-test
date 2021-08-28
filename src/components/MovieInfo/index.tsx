import React, {useContext} from 'react';
import {Wrapper, Content, Text} from './MovieInfo.styles'

import Thumb from '../Thumb';
import Spinner from '../Spinner';
import Rate from '../Rate';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import NoImage from '../../images/no_image.jpg';

import {MovieState} from '../../hooks/useMovieFetch';
import {Context} from '../../Context';
import API from '../../API';
import { useState } from 'react';

type Props = {
  movie: MovieState
}

const MovieInfo: React.FC<Props> = ({movie}) => {

  const [user] = useContext(Context);
  const [sendingRate, setSendingRate] = useState(false);

  console.log('userData:', user);

  const handleRatting = async (value: any) => {
    try {
      setSendingRate(true);
      const rate = await API.rateMovie(user.sessionId, movie.id, value);
      console.log('rate:', rate);
      
    } finally {
      setSendingRate(false);
    }
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
                
                <h3>DIRECTOR {
                //@ts-ignore
                (movie && movie.directors && (movie.directors.lenth) > 1) ? 'S': '' 
                
                }</h3>
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
                <div className="rate">
                  <h3>
                    RATE MOVIE
                  </h3>
                  {sendingRate ? (
                    <div><Spinner smaller={true}></Spinner> Enviando...</div>
                  ) : (
                    <Rate callback={handleRatting} />
                  )}

                </div>
              }            
          </Text>
      </Content>
    </Wrapper>
  )
}

export default MovieInfo;
