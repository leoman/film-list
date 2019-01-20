import React, { Component } from 'react';
import Grid from './containers/Grid';
import Filters from './containers/Filters'; 
import { Container, Title } from './styles';

class App extends Component {

  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchMovieGenres();
  }

  render() {
    return (
      <Container>
        <Title>Movie Listings</Title>
        <Filters />
        <Grid />
      </Container>
    );
  }
}

export default App;
