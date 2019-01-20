import React, { PureComponent } from 'react';
import { MovieWrapper, Title } from './styles';
import Poster from '../Poster';
import Genres from '../../containers/Genres';

class Movie extends PureComponent {

  render () {
    const { movie } = this.props;

    if(!movie) return false;

    return (
      <MovieWrapper>
          <Title>{movie.title}</Title>
          <Poster image={movie.poster_path} />
          <Genres genreIds={movie.genre_ids} />
      </MovieWrapper>
    )
  }
}

export default Movie