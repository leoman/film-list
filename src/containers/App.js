import { connect } from 'react-redux';
import {
    fetchMovies,
    fetchMovieGenres,
} from '../actions/movies';

import App from '../App'

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchMovieGenres: () => dispatch(fetchMovieGenres())
})

export default connect(
  null,
  mapDispatchToProps
)(App)