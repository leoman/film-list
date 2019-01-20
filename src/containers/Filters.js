import { connect } from 'react-redux';
import {
    getGenresFromFilms,
} from '../selectors/movieSelectors';
import {
    changeGenreFilter,
    changeRating,
} from '../actions/filters';

import Filters from '../components/Filters'

const mapStateToProps = state => ({
    genres: getGenresFromFilms(state),
    filteredGenres: state.filters.filteredGenres,
    rating: state.filters.rating
})

const mapDispatchToProps = dispatch => ({
    changeGenreFilter: id => dispatch(changeGenreFilter(id)),
    changeRating: rating => dispatch(changeRating(rating))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);