import { connect } from 'react-redux';
import {
    getFilteredMovies,
} from '../selectors/movieSelectors';

import Grid from '../components/Grid'

const mapStateToProps = state => ({
    movies: getFilteredMovies(state),
    loading: state.movies.loading
})

export default connect(
    mapStateToProps,
    null
)(Grid)