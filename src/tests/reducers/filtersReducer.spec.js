import filtersReducer, { initialState } from '../../reducers/filtersReducer';
import { CHANGE_GENRE_FILTER, CHANGE_MOVIE_RATING } from '../../actions/filters';

describe('Filters Tests', () => {
  
    it('Should return initial state', () => {
      const actualState = filtersReducer(undefined, {});
      expect(actualState).toEqual(initialState);
    });

    it('Should return updated rating when changed', () => {
        let actualState = filtersReducer(undefined, {});
        const newRating = 10;
        const action = {
            type: CHANGE_MOVIE_RATING,
            payload: newRating
        };

        expect(actualState.rating).toEqual(initialState.rating);
        
        actualState = filtersReducer(initialState, action);

        expect(actualState.rating).toEqual(newRating);
    });

    it('Should return updated genres when changed', () => {
        let actualState = filtersReducer(undefined, {});
        const newGenre = 1;
        const action = {
            type: CHANGE_GENRE_FILTER,
            payload: newGenre
        };

        expect(actualState.filteredGenres).toEqual(initialState.filteredGenres);
        
        actualState = filtersReducer(actualState, action);

        expect(actualState.filteredGenres).toEqual([newGenre]);
    });

    it('Should remove genre when added twice', () => {
        let actualState = filtersReducer(undefined, {});
        const newGenre = 1;
        const action = {
            type: CHANGE_GENRE_FILTER,
            payload: newGenre
        };

        expect(actualState.filteredGenres).toEqual(initialState.filteredGenres);
        actualState = filtersReducer(actualState, action);
        expect(actualState.filteredGenres).toEqual([newGenre]);
        actualState = filtersReducer(actualState, action);
        expect(actualState.filteredGenres).toEqual([]);
    });


});