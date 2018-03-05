import { 
	FAVOURITE_FILM, 
	UNFAVOURITE_FILM
} from '../actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case FAVOURITE_FILM:
      return [...state, action.item]
    case UNFAVOURITE_FILM:
      return state.filter(item => item.id !== action.id)
    default:
      return state;
	}
};