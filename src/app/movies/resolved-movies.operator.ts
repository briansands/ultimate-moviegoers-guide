import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Movies } from '../models/movies.interface';
import { MovieDetails } from '../models/movie-details.interface';

interface ResolvedMoviesData {
    movies: Movies;
}

interface ResolvedMovieDetailsData {
    movies: Movies;
}

export function resolvedMovies() {
    return (source: Observable<ResolvedMoviesData>) => source.pipe(
        pluck<ResolvedMoviesData, Movies>('movies'),
    );
}

export function resolvedMovieDetails() {
    return (source: Observable<ResolvedMovieDetailsData>) => source.pipe(
        pluck<ResolvedMovieDetailsData, MovieDetails>('movieDetails'),
    );
}