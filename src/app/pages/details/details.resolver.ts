import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MovieDetails } from 'src/app/models/movie-details.interface';
import { MoviesService } from 'src/app/movies/movies.service';


@Injectable()
export class MovieDetailsResolver implements Resolve<MovieDetails>{
    constructor(private moviesService: MoviesService) {}
    
    public resolve(route: ActivatedRouteSnapshot) {
        return this.moviesService.getDetails(route.params.id);
    }
}