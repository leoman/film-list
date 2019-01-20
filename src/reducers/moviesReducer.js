import {
    FETCH_MOVIES,
} from '../actions/movies';

export const initialState = {
    loading: true,
    list: [],
    genres: []
}


function moviesReducer (state = initialState, action) {
    
    switch (action.type) {
       
        case FETCH_MOVIES: {
            
            const movies = action.payload;

            /**
             * Create a list of unique genre Id's from all movies being added
             * This allows us to use this when rendereing out genre's for filtering.
             */

            const genres = movies.reduce((genres, movie) => {
                let idsToInclude = [];
                movie.genre_ids.forEach(id => {
                    if(!genres.includes(id)) {
                        idsToInclude = [...idsToInclude, id];
                    }
                })
                
                return [...genres, ...idsToInclude];
            }, []);

            return {
                ...state,
                list: action.payload,
                genres,
                loading: false,
            }
        }

        default:
            return state

    }



}

export default moviesReducer;