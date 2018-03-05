import axios from 'axios';
import {  
  GET_FILMS_PENDING, 
  GET_FILMS_REJECTED, 
  GET_FILMS_FULFILLED  
} from './actionTypes';

const url = () => 'https://api.themoviedb.org/3/search/company?api_key=4cb1eeab94f45affe2536f2c684a5c9e&query=';

export const getFilms = (query) => (dispatch) => {
  dispatch({type: GET_FILMS_PENDING, query })
  axios.get(url() + query)
  .then(response => dispatch({
    type: GET_FILMS_FULFILLED,
    films: response.data.results || [],
    query
  }))
  .catch(error => dispatch({
    type: GET_FILMS_REJECTED,
    message: error.message || error,
    query
  }));
}