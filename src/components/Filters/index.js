import React, { PureComponent } from 'react';
import GenreFilter from '../GenreFilter';
import RatingFilter from '../RatingFilter';

class Filters extends PureComponent {

  render () {
    const { genres, changeGenreFilter, rating, changeRating, filteredGenres } = this.props;

    return (
      <div>
          <GenreFilter filteredGenres={filteredGenres} changeGenreFilter={changeGenreFilter} genres={genres} />
          <RatingFilter rating={rating} changeRating={changeRating} />
      </div>
    )
  }
}

export default Filters