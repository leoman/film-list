import moviesReducer, { initialState } from '../../reducers/moviesReducer';
import { FETCH_MOVIES } from '../../actions/movies';
import { mockData } from './mocks';

describe('Movies Tests', () => {
  
    it('Should return initial state', () => {
      const actualState = moviesReducer(undefined, {});
      expect(actualState).toEqual(initialState);
    });

    it('Should return stored movies', () => {
       
        const action = {
            type: FETCH_MOVIES,
            payload: mockData.results
        };
        
        const actualState = moviesReducer(initialState, action);

        expect(actualState.list).toEqual(mockData.results);
    });

});