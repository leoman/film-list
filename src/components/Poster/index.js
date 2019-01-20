import React, { PureComponent } from 'react';
import { PosterWrapper, PosterImg } from './styles';

export const baseMovieUrl = 'http://image.tmdb.org/t/p/w500';

class Poster extends PureComponent {

  render () {
    const { image } = this.props;

    if(!image) return false;

    return (
      <PosterWrapper>
         <PosterImg src={`${baseMovieUrl}${image}`} />
      </PosterWrapper>
    )
  }
}

export default Poster