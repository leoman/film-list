import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer';
import genresReducer from './genresReducer';
import filtersReducer from './filtersReducer';

const allReducers = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  filters: filtersReducer
})

export default allReducers