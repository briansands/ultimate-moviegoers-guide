import { Observable, pipe, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movies } from '../models/movies.interface';
import { MovieTypes } from '../models/movie-types.enum';
import { NOW_PLAYING, POPULAR, TOP_RATED} from '../models/movies.const';


@Injectable()
export class MoviesService {

    constructor(private http: HttpClient) { }

    public getMovies(movieType: MovieTypes): Observable<Movies> {
        let response;
        if (movieType === MovieTypes.ALL) {
            response = this.getAllMovies();
        } else if (movieType === MovieTypes.NOW_PLAYING) {
            response = this.getNowPlaying();
        } else if (movieType === MovieTypes.POPULAR) {
            response = this.getPopularMovies();
        } else if (movieType === MovieTypes.TOP_RATED) {
            response = this.getTopRatedMovies();
        }

        return response;
    }

    private getAllMovies() {
        const nowPlayingRequest = this.request(NOW_PLAYING, MovieTypes.NOW_PLAYING);
        const popularRequest = this.request(POPULAR, MovieTypes.POPULAR);
        const topRatedRequest = this.request(TOP_RATED, MovieTypes.TOP_RATED);

        return forkJoin([nowPlayingRequest, popularRequest, topRatedRequest])
            .pipe(map((response => response)));
    }

    private getNowPlaying() {
        return this.request(NOW_PLAYING, MovieTypes.NOW_PLAYING).pipe(
            map(response => response)
        );
    }

    private getPopularMovies() {
        return this.request(POPULAR, MovieTypes.POPULAR).pipe(
            map(response => response)
        );
    }

    private getTopRatedMovies() {
        return this.request(TOP_RATED, MovieTypes.TOP_RATED).pipe(
            map(response => response)
        );
    }

    private request(req: any, type: MovieTypes): Observable<Movies> {
        return this.http.get(req).pipe(map((response: any) => {
            response.type = type;
            return response;
        }), catchError(err => of(`error: ${err}`)));
    }
}
