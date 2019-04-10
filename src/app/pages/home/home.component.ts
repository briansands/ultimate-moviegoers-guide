import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/models/movies.interface';
import { Observable } from 'rxjs';
import { resolvedMovies } from 'src/app/movies/resolved-movies.operator';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    
    constructor(private route: ActivatedRoute) { }

    public movies$: Observable<Movies> = this.route.data.pipe(
        resolvedMovies(),
    );
}
