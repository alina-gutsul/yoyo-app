import {combineReducers} from 'redux';
import films from './filmsReducer';
import favourites from './favouritesReducer';

const rootReducer = combineReducers({
  films,
  favourites
});

export default rootReducer;