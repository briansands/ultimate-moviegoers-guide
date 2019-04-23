import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieDetails } from 'src/app/models/movie-details.interface';
import { resolvedMovieDetails } from 'src/app/movies/resolved-movies.operator';
import { BASE_BG_IMG_URL } from 'src/app/models/movies.const';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})

export class DetailsComponent {
    public readonly baseBgImgUrl = BASE_BG_IMG_URL;
    public bgImgUrl : string;

    constructor(private route: ActivatedRoute) { }

    public movieDetails$: Observable<MovieDetails> = this.route.data.pipe(
        resolvedMovieDetails(),
    );

    public ngOnInit(): void {
        this.movieDetails$.subscribe(details => this.bgImgUrl = `url(${this.baseBgImgUrl + details.backdrop_path}) no-repeat center`);
    }

}
