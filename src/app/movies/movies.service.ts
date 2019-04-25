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
    private allMoviesCache$: Observable<Movies[]>;
    private nowPlayingCache$: Observable<Movies>;
    private popularCache$: Observable<Movies>;
    private topRatedCache$: Observable<Movies>;
    
    constructor(private http: HttpClient) { }

    public getMovies(movieType: MovieTypes): Observable<Movies|Movies[]> {
        if (movieType === MovieTypes.ALL) {
            if (!this.allMoviesCache$) {
                this.allMoviesCache$ = this.getAllMovies();
            }
            return this.allMoviesCache$;
        } else if (movieType === MovieTypes.NOW_PLAYING) {
            if (!this.nowPlayingCache$) {
                this.nowPlayingCache$ = this.getNowPlaying();
            }
            return this.nowPlayingCache$;
        } else if (movieType === MovieTypes.POPULAR) {
            if (!this.popularCache$) {
                this.popularCache$ = this.getPopularMovies();
            }
            return this.popularCache$;
        } else if (movieType === MovieTypes.TOP_RATED) {
            if (!this.topRatedCache$) {
                this.topRatedCache$ = this.getTopRatedMovies();
            }
            return this.topRatedCache$;
        }

    }

    public getDetails(id: string): Observable<MovieDetails> {
        const movieDetailsRequest = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
        return this.request(movieDetailsRequest).pipe(
            map(response => response)
        );
    }

    private getAllMovies() {
        const nowPlayingRequest = this.request(NOW_PLAYING, MovieTypes.NOW_PLAYING);
        const popularRequest = this.request(POPULAR, MovieTypes.POPULAR);
        const topRatedRequest = this.request(TOP_RATED, MovieTypes.TOP_RATED);

        return forkJoin([nowPlayingRequest, popularRequest, topRatedRequest]).pipe(
            map(response => response),
            publishReplay(1),
            refCount()
        );
    }

    private getNowPlaying() {
        return this.request(NOW_PLAYING, MovieTypes.NOW_PLAYING).pipe(
            map(response => response),
            publishReplay(1),
            refCount()
        );
    }

    private getPopularMovies() {
        return this.request(POPULAR, MovieTypes.POPULAR).pipe(
            map(response => response),
            publishReplay(1),
            refCount()
        );
    }

    private getTopRatedMovies() {
        return this.request(TOP_RATED, MovieTypes.TOP_RATED).pipe(
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
