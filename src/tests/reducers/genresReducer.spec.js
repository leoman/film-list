import genresReducer, { initialState } from '../../reducers/genresReducer';
import { FETCH_MOVIE_GENRES } from '../../actions/movies';
import { mockGenres } from './mocks';

describe('Genres Tests', () => {
  
    it('Should return initial state', () => {
      const actualState = genresReducer(undefined, {});
      expect(actualState).toEqual(initialState);
    });

    it('Should return stored genres', () => {
       
        const action = {
            type: FETCH_MOVIE_GENRES,
            payload: mockGenres.genres
        };
        
        const actualState = genresReducer(initialState, action);

        expect(actualState.list).toEqual(mockGenres.genres);
    });

});