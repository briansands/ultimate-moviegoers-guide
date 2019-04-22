import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/models/movies.interface';
import { resolvedMovies } from 'src/app/movies/resolved-movies.operator';

@Component({
    selector: 'app-top-rated',
    templateUrl: './top-rated.component.html',
    styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent {

    constructor(private route: ActivatedRoute) { }

    public movie$: Observable<Movies> = this.route.data.pipe(
        resolvedMovies(),
    );

}
