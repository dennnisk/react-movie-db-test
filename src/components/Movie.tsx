import React from 'react';
// eslint-disable-next-line
import { useParams } from 'react-router-dom'
// config
// eslint-disable-next-line
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// components
import BreadCrumb from './BreadCrumb';
// eslint-disable-next-line
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor'; 

// hooks
import { useMovieFetch } from '../hooks/useMovieFetch'
// image
// eslint-disable-next-line
import NoImage from '../images/no_image.jpg';

const Movie : React.FC = () => {

  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner></Spinner>
  if (error) return <div>Somenthing went wrong</div>

  return (
    <div>
      <BreadCrumb movieTitle={movie.original_title}></BreadCrumb>
      <MovieInfo movie={movie}></MovieInfo>
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header="Actors">
        {
         (movie && movie.actors && movie.actors.length > 0) ?
            movie.actors.map(actor => (
              <Actor 
                key={actor.credit_id}
                name={actor.name}
                caracter={actor.character}
                imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
              />
            ))
          : <Spinner />
                  
        }
      </Grid>
    </div>
  )
}


export default Movie;
