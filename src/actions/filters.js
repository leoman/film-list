export const CHANGE_GENRE_FILTER = 'CHANGE_GENRE_FILTER';
export const CHANGE_MOVIE_RATING = 'CHANGE_MOVIE_RATING';


export const changeGenreFilter = id => ({
    type: CHANGE_GENRE_FILTER,
    payload: id
});

export const changeRating = rating => ({
    type: CHANGE_MOVIE_RATING,
    payload: rating
});