import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieDetails } from 'src/app/models/movie-details.interface';
import { resolvedMovieDetails } from 'src/app/movies/resolved-movies.operator';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})

export class DetailsComponent {

    constructor(private route: ActivatedRoute) { }

    public movieDetails$: Observable<MovieDetails> = this.route.data.pipe(
        resolvedMovieDetails(),
    );

}
