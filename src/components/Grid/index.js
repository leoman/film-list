import React, { PureComponent } from 'react';
import { GridWrapper, MovieMessage } from './styles';
import Movie from '../Movie';

class Grid extends PureComponent {

  movieList = (movies) => {
      return movies.map((movie, i) => <Movie key={i} movie={movie} />)
  }

  /*
   * Show a loading message when the API call hasn't finished.
   * Show a error message when movies are loaded, but none are returned due to filtering taking place
   * Show movie list
   */

  render () {
    const { movies, loading } = this.props;

    if(loading) {
        return (
            <MovieMessage>Loading Film data</MovieMessage>
        )
    }

    if(!loading && movies.length === 0) {
        return (
            <MovieMessage>No movies have matched your set of filters.</MovieMessage>
        )
    }

    return (
      <GridWrapper>
        {this.movieList(movies)}
      </GridWrapper>
    )
  }
}

export default Grid