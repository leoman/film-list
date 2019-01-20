import { find } from 'lodash';

/**
 * Filters are:
 * Genre (multiple)
 * Rating (high > low)
 * 
 * Order is by popularity
 */


/**
 * Compare function to order the movies by popularity
 */
function compare(a, b) {
    
    let comparison = 0;
    if (a.popularity < b.popularity) {
      comparison = 1;
    } else if (a.popularity > b.popularity) {
      comparison = -1;
    }
    return comparison;
}


/**
 * Filter movie list returned from state.
 * Movies are first sorted by popularity (high - low)
 * Movies are then filtered to only return movies where the movie object contains all genre ID's from the current filter reducer.
 * Movies are then filtered by the current rating from the filters reducer 
 */
export const getFilteredMovies = state => {

    const movies = state.movies.list.sort(compare);
    const filteredGenres = state.filters.filteredGenres;
    const rating = state.filters.rating;

    const filteredMovies = movies.filter(movie => {
        const genreIds = movie.genre_ids;
        return filteredGenres.reduce((agg, f) => {
            if(!genreIds.includes(f)) {
                agg = false;
            }
            return agg;
        }, true);
    }).filter(movie => movie.vote_average >= rating);

    return filteredMovies;
}

/**
 * Returns an array of genres from the genres reducer, based on the list of genre ID's from the movies reducer.
 * Thereby returning only the generes that are found in the current movie list
 */
export const getGenresFromFilms = state => {
    const genres = state.movies.genres.map(genre => {
        return find(state.genres.list, (g) => g.id === genre) 
    }).filter(item => item !== undefined)

    return genres;
}

export const getGenreNames = state => {
    return state.genres.list;
}