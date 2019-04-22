import { BASE_URL, API_KEY } from './api.const'

export const NOW_PLAYING = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const POPULAR = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const TOP_RATED = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';