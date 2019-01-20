import {
    CHANGE_MOVIE_RATING,
    CHANGE_GENRE_FILTER,
} from '../actions/filters';

export const initialState = {
    rating: 3,
    filteredGenres: [],
}

function filtersReducer (state = initialState, action) {
    switch (action.type) {

        case CHANGE_MOVIE_RATING: {

            const rating = action.payload;

            return {
                ...state,
                rating
            }
        }

        case CHANGE_GENRE_FILTER: {

            const id = action.payload;

            /**
             * If they genre ID is found within the current filter list, remove it, otherwise add it.
             */
  
            return {
                ...state,
                filteredGenres: state.filteredGenres.includes(id) ? 
                    [...state.filteredGenres.filter(genre => genre !== id)] :
                    [...state.filteredGenres, id] 
            }

        }

        default:
            return state

    }



}

export default filtersReducer;