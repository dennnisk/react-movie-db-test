// eslint-disable-next-line
import React, { useState, useEffect } from 'react';

import API from '../API'
// eslint-disable-next-line
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
// eslint-disable-next-line
import NoImage from '../images/no_image.jpg'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};


export const useHomeFetch = () => {
    // eslint-disable-next-line
    const [ state, setState ] = useState(initialState);
    // eslint-disable-next-line
    const [ loading, setLoading ] = useState(false);
    // eslint-disable-next-line
    const [ error, setError ] = useState(false);
    
    const fetchMovies = async (page, searchTerm = "") => {
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
      fetchMovies(1);
    }, []);

    return { state, loading, error };
  
}