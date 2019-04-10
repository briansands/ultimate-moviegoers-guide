import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Movies } from '../models/movies.interface';

export interface ResolvedData {
    movies: Movies;
}

export function resolvedMovies() {
    return (source: Observable<ResolvedData>) => source.pipe(
        pluck<ResolvedData, Movies>('movies'),
    );
}