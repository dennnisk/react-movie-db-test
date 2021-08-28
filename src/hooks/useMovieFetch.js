import {useState, useEffect} from 'react';
import {isPersistedState} from '../helpers';
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

    // Load data from the sessionStorage
    const sessionState = isPersistedState(movieId)
    if (sessionState) {
      console.log('Loading movie from te sessionsStorage');
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchData();
  }, [movieId]);


  // write the sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);
  

  return {state, loading, error};
}
