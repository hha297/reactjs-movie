export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = '5504b60886ea3b781bb83f3415f99a3d';
export const tmdbEndPoint = 'https://api.themoviedb.org/3/movie';
export const tmdbEndPointSearch = 'https://api.themoviedb.org/3/search/movie';
export const tmdbAPI = {
    getMovieList: (type, page = 1) => `${tmdbEndPoint}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieDetails: (movieId) => `${tmdbEndPoint}/${movieId}?api_key=${apiKey}`,
    getMovieType: (movieId, type) => `${tmdbEndPoint}/${movieId}/${type}?api_key=${apiKey}`,
    getMovieSearch: (query, page) => `${tmdbEndPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,

    image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
