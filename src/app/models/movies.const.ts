import { BASE_URL, API_KEY } from './api.const'

export const NOW_PLAYING = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`;
export const POPULAR = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`;
export const TOP_RATED = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const BASE_IMG_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';