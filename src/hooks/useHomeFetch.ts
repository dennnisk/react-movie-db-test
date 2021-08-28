// eslint-disable-next-line
import { useState, useEffect } from 'react';

import API, {Movie} from '../API'
// helper
import {isPersistedState} from '../helpers';

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0
};


export const useHomeFetch = () => {
    // eslint-disable-next-line
    const [ searchTerm, setSearchTerm ] = useState('');
    // eslint-disable-next-line
    const [ state, setState ] = useState(initialState);
    // eslint-disable-next-line
    const [ loading, setLoading ] = useState(false);
    // eslint-disable-next-line
    const [ error, setError ] = useState(false);

    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    //console.log(searchTerm);

    const fetchMovies = async (page: number, searchTerm = "") => {
      try {
        setError(false);
        setLoading(true);
  
        const movies = await API.fetchMovies(searchTerm, page);
  
        console.log(movies);
  
        setState(prev => ({
          ...movies, 
          results:
            page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
        }));
        
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  
    // Run at the start of the component
    useEffect(() => {
      // If not searching (will we not store), load the data feched before
      if (!searchTerm) {
        // Load from sessionStorage
        const sessionState = isPersistedState('homeState');
        // if Exists
        if (sessionState) {
          console.log('Loading from sessionStorage')
          // Save to the state, to show the data that whore loaded before
          setState(sessionState);
          return;
        }
      }
      setState(initialState);
      fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // Load More
    useEffect(() => {
      if (!isLoadingMore) return;
      
      fetchMovies(state.page+1, searchTerm);
      setIsLoadingMore(false);
      
    }, [isLoadingMore, state.page, searchTerm]);
    
    // write the sessionStorage
    useEffect(() => {
      if (!searchTerm) {
        sessionStorage.setItem('homeState', JSON.stringify(state));
      }
    }, [searchTerm, state]);
    


    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };
  
}