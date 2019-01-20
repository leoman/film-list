import { connect } from 'react-redux';
import {
    getGenreNames,
} from '../selectors/movieSelectors';

import Genres from '../components/Genres'

const mapStateToProps = state => ({
    genres: getGenreNames(state)
})

export default connect(
    mapStateToProps,
    null
)(Genres);