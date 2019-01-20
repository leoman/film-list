import React from 'react';
import { mount } from 'enzyme';
import Genres from '../../components/Genres';

const genreIds = [1, 2];

const genres = [{id: 1, name: 'Action'}, {id: 2, name: 'Fantasy'}]

it('should render two genres', () => {

    const mountedComponent = mount(
        <Genres genreIds={genreIds} genres={genres} />
    )
    
    expect(mountedComponent.find('Genres').find('div.genre')).toHaveLength(2);
});
    