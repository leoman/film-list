import {
    FETCH_MOVIE_GENRES,
} from '../actions/movies';

export const initialState = {
    list: [],
}


function genresReducer (state = initialState, action) {
    switch (action.type) {

        case FETCH_MOVIE_GENRES: {

            const genres = action.payload;

            return {
                ...state,
                list: genres,
            }
        }

        default:
            return state

    }



}

export default genresReducer;