import React from 'react';
import { mount } from 'enzyme';
import Poster, { baseMovieUrl } from '../../components/Poster/index';

const posterUrl = '/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg';

it('should render Poster Image when passed', () => {

    const mountedComponent = mount(
        <Poster image={posterUrl} />
    )

    expect(mountedComponent.find('img').prop("src")).toEqual(`${baseMovieUrl}${posterUrl}`);

});