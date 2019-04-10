import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Movies } from '../models/movies.interface';
import { MoviesService } from './movies.service';

@Injectable()
export class MoviesResolver implements Resolve<Movies>{
    constructor(private moviesService: MoviesService) {}
    
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.moviesService.getMovies(route.data.movieType);
    }
}