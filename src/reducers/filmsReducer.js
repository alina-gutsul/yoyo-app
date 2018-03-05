import { 
	GET_FILMS_PENDING, 
	GET_FILMS_REJECTED, 
	GET_FILMS_FULFILLED 
} from '../actions/actionTypes';

const initialState = {
	error: undefined,
	isFetching: false,
	items: [],
  query: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_FILMS_PENDING:
      return { 
        ...state, 
        isFetching: true, 
        query: action.query,
        error: undefined 
      }
    case GET_FILMS_REJECTED:
      return { 
        ...state, 
        isFetching: false, 
        items: [], 
        error: action.message, 
        query: action.query 
      }
    case GET_FILMS_FULFILLED:
      return { 
        ...state, 
        isFetching: false, 
        items: action.films, 
        query: action.query,
        error: undefined 
      }
    default:
      return state;
	}
};