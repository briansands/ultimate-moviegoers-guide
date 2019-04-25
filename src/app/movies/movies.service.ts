import { Observable, pipe, forkJoin, of } from 'rxjs';
import { map, catchError, publishReplay, refCount } from 'rxjs/operators'

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movies } from '../models/movies.interface';
import { MovieTypes } from '../models/movie-types.enum';
import { BASE_URL, API_KEY } from '../models/api.const'
import { NOW_PLAYING, POPULAR, TOP_RATED} from '../models/movies.const';
import { MovieDetails } from '../models/movie-details.interface';

@Injectable()
export class MoviesService {
    private allMoviesCache$: Observable<Movies|Movies[]>;
    private nowPlayingCache$: Observable<Movies|Movies[]>;
    private popularCache$: Observable<Movies|Movies[]>;
    private topRatedCache$: Observable<Movies|Movies[]>;
    
    constructor(private http: HttpClient) { }

    public getMovies(movieType: MovieTypes): Observable<Movies|Movies[]> {
        switch (movieType) {
            case MovieTypes.ALL:
                return this.getAllMovies();
            case MovieTypes.NOW_PLAYING:
                return this.getNowPlaying();
            case MovieTypes.POPULAR:
                return this.getPopularMovies();
            case MovieTypes.TOP_RATED:
                return this.getTopRatedMovies();
        }
    }

    public getDetails(id: string): Observable<MovieDetails> {
        const movieDetailsRequest = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
        return this.request(movieDetailsRequest).pipe(
            map(response => response)
        );
    }

    private getAllMovies() {
        if (!this.allMoviesCache$) {
            const nowPlayingRequest = this.request(NOW_PLAYING, MovieTypes.NOW_PLAYING);
            const popularRequest = this.request(POPULAR, MovieTypes.POPULAR);
            const topRatedRequest = this.request(TOP_RATED, MovieTypes.TOP_RATED);

            this.allMoviesCache$ = this.mapMovies(forkJoin([nowPlayingRequest, popularRequest, topRatedRequest]));
        }
        return this.allMoviesCache$;
    }

    private getNowPlaying() {
        if (!this.nowPlayingCache$) {
            this.nowPlayingCache$ = this.mapMovies(this.request(NOW_PLAYING, MovieTypes.NOW_PLAYING));
        }
        return this.nowPlayingCache$;
    }

    private getPopularMovies() {
        if (!this.popularCache$) {
            this.popularCache$ = this.mapMovies(this.request(POPULAR, MovieTypes.POPULAR));
        }
        return this.popularCache$;
    }

    private getTopRatedMovies() {
        if (!this.topRatedCache$) {
            this.topRatedCache$ =  this.mapMovies(this.request(TOP_RATED, MovieTypes.TOP_RATED));
        }
        return this.topRatedCache$
    }

    private mapMovies(moviesResponse: Observable<Movies|Movies[]>) {
        return moviesResponse.pipe(
            map(response => response),
            publishReplay(1),
            refCount()
        );
    }

    private request(req: string, type?: MovieTypes): Observable<Movies&MovieDetails> {
        return this.http.get(req).pipe(map((response: any) => {
            if (type) {
                response.type = type;
            }
            if (type === MovieTypes.NOW_PLAYING) {
                response = this.sortNowPlayingByReleaseDate(response);
            }
            
            return response;
        }), catchError(err => of(`error: ${err}`)));
    }

    private sortNowPlayingByReleaseDate(nowPlayingResponse: Movies): Movies {
        nowPlayingResponse.results.sort((a, b) => {
                if (a.release_date > b.release_date) {
                    return -1;
                }
                if (a.release_date < b.release_date) {
                    return 1;
                }
                return 0;
        });
        return nowPlayingResponse;
    }
}
