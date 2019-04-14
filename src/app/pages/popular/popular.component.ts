import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/models/movies.interface';
import { resolvedMovies } from 'src/app/movies/resolved-movies.operator';

@Component({
    selector: 'app-popular',
    templateUrl: './popular.component.html',
    styleUrls: ['./popular.component.scss']
})
export class PopularComponent {

    constructor(private route: ActivatedRoute) { }

    public movies$: Observable<Movies> = this.route.data.pipe(
        resolvedMovies(),
    );

}
