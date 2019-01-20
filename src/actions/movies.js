
import * as moviesService from '../services';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE_GENRES = 'FETCH_MOVIE_GENRES';

export const fetchMovies = () => async dispatch => {
    
    const movies = await moviesService.fetchMovies();

    dispatch({
        type: FETCH_MOVIES,
        payload: movies.results
    });
}

export const fetchMovieGenres = () => async dispatch => {
   
    const results = await moviesService.fetchGenres();

    dispatch({
        type: FETCH_MOVIE_GENRES,
        payload: results.genres
    });
}