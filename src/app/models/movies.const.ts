const baseUrl = 'https://api.themoviedb.org/3/movie'
const apiKey = '7f6e79b6463a01c2aa63e6922d848dd4';

export const NOW_PLAYING = `${baseUrl}/now_playing?api_key=${apiKey}&language=en-US&page=1`;
export const POPULAR = `${baseUrl}/popular?api_key=${apiKey}&language=en-US&page=1`;
export const TOP_RATED = `${baseUrl}/top_rated?api_key=${apiKey}&language=en-US&page=1`;