import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Movies } from './models/movies.interface';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) {}

  public getMovies(): Observable<Movies[]> {
    const baseUrl = 'https://api.themoviedb.org/3/movie'
    const apiKey = '7f6e79b6463a01c2aa63e6922d848dd4';
    
    const nowPlayingReq = `${baseUrl}/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    const popularReq = `${baseUrl}/popular?api_key=${apiKey}&language=en-US&page=1`;
    const topRatedReq = `${baseUrl}/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    
    const nowPlaying = this.request(nowPlayingReq, 'nowPlaying');
    const popular = this.request(popularReq, 'popular');
    const topRated = this.request(topRatedReq, 'topRated');

    return forkJoin([nowPlaying, popular, topRated])
      .pipe(map(responses => responses));
  }

  private request(req: any, type: string) {
    return this.http.get(req).pipe(map((response: any) => {
      response.type = type;
      return response;
    }),catchError(err => of(`error: ${err}`)));
  } 
}
