import { Observable, pipe, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MoviesResponse } from '../models/movies-response.interface';
import { MovieTypes } from '../models/movie-types.enum';
import { NOW_PLAYING, POPULAR, TOP_RATED} from '../models/movies.const';


@Injectable()
export class MoviesService {

    constructor(private http: HttpClient) { }

    public getAllMovies() {
        const nowPlayingRequest = this.request(NOW_PLAYING, MovieTypes.NOW_PLAYING);
        const popularRequest = this.request(POPULAR, MovieTypes.POPULAR);
        const topRatedRequest = this.request(TOP_RATED, MovieTypes.TOP_RATED);

        return forkJoin([nowPlayingRequest, popularRequest, topRatedRequest])
            .pipe(map((response => response)));
    }

    public getNowPlaying() {
        return this.request(NOW_PLAYING, MovieTypes.NOW_PLAYING).pipe(
            map(response => response)
        );
    }

    public getPopularMovies() {
        return this.request(POPULAR, MovieTypes.POPULAR).pipe(
            map(response => response)
        );
    }

    public getTopRatedMovies() {
        this.request(TOP_RATED, MovieTypes.TOP_RATED).pipe(
            map(response => response)
        );
    }

    private request(req: any, type: MovieTypes): Observable<MoviesResponse> {
        return this.http.get(req).pipe(map((response: any) => {
            response.type = type;
            return response;
        }), catchError(err => of(`error: ${err}`)));
    }
}
