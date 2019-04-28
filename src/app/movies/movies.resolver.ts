import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Movies } from '../models/movies.interface';
import { MoviesService } from './movies.service';

@Injectable()
export class MoviesResolver implements Resolve<Movies|Movies[]>{
    constructor(private moviesService: MoviesService) {}

    public resolve(route: ActivatedRouteSnapshot) {
        const queryParams = route.queryParams;
        return this.moviesService.getMovies(route.data.movieType, queryParams);
    }
}
