import React, { PureComponent } from 'react';
import { GenreWrapper } from './styles';

class Genres extends PureComponent {

  genreName = id => {
    const { genres } = this.props;
    const genre = genres.find(g => g.id === id);
    return genre.name;
  }

  render () {

    const { genreIds, genres } = this.props;

    if(!genreIds || genres.length < 1) return null;
    
    return (
      <GenreWrapper>
        {genreIds.map((id, i) => <div className={'genre'} key={i}>{this.genreName(id)}</div>)}
      </GenreWrapper>
    )
  }
}

export default Genres