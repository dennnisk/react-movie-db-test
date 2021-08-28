import {useState, useEffect} from 'react';

import API from '../API';

export const useMovieFetch = movieId => {

  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors: directors
        })

        setLoading(false);

      } catch (error) {
        setError(true);
      }
    }

    fetchData();
  }, [movieId]);

  return {state, loading, error};
}