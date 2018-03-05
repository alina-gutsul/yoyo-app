import { FAVOURITE_FILM, UNFAVOURITE_FILM } from './actionTypes';

export const favouriteFilm = (item) => (dispatch) => {
  dispatch({type: FAVOURITE_FILM, item })
}

export const unfavouriteFilm = (id) => (dispatch) => {
  dispatch({type: UNFAVOURITE_FILM, id })
}