const baseMovieUrl = 'https://api.themoviedb.org/3';
const apiKey = '5ef496349d73cbf43098591925efb32d';

export const fetchMovies = async () => {
    
    const response = await fetch(`${baseMovieUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);

    if (response.status !== 200) {
        throw new Error('Error fetching movies');
    }

    return response.json();
}

export const fetchGenres = async () => {
    const response = await fetch(`${baseMovieUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`);

    if (response.status !== 200) {
        throw new Error('Error fetching genres');
    }

    return response.json();
}
 