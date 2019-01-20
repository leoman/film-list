import React from 'react';
import { mount } from 'enzyme';
import GenreFilter from '../../components/GenreFilter';

const genres = [{id: 1, name: 'Action'}, {id: 2, name: 'Fantasy'}];
const filteredGenres = [];

it('should render two genres', () => {

    const mountedComponent = mount(
        <GenreFilter filteredGenres={filteredGenres} genres={genres} />
    );
    
    expect(mountedComponent.find('div.genre')).toHaveLength(2);
});
    
it('should call onChange when clicked', () => {

    const changeGenreFilter = jest.fn();
    const mountedComponent = mount(
        <GenreFilter changeGenreFilter={changeGenreFilter} filteredGenres={filteredGenres} genres={genres} />
    );
    mountedComponent.find('div.genre').first().simulate('click');
    expect(changeGenreFilter.mock.calls.length).toBe(1);
});
