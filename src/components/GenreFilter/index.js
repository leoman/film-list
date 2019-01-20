import React, { PureComponent } from 'react';
import { GenreFilterWrapper, GenreButton } from './styles';

class GenreFilter extends PureComponent {

  changeGenreFilter = id => {
      this.props.changeGenreFilter(id);
  }  

  genreList = (genres) => {
    const { filteredGenres } = this.props;
    return genres.map((genre, i) => <GenreButton className={'genre'} isFiltered={filteredGenres.includes(genre.id)} onClick={() => this.changeGenreFilter(genre.id)} key={i}>{genre.name}</GenreButton>)
  }

  render () {
    const { genres } = this.props;

    if(!genres) return false;

    return (
      <GenreFilterWrapper>
        {this.genreList(genres)}
      </GenreFilterWrapper>
    )
  }
}

export default GenreFilter