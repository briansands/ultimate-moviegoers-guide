import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/models/movies.interface';
import { Observable } from 'rxjs';
import { resolvedMovies } from 'src/app/movies/resolved-movies.operator';
import { SortOptions } from 'src/app/models/sort-options.enum';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public sortOptions = [SortOptions.NOW_PLAYING, SortOptions.TOP_RATED, SortOptions.POPULAR];
    public selectedSortOption = SortOptions.NOW_PLAYING;

    constructor(private route: ActivatedRoute) { }

    public movies$: Observable<any> = this.route.data.pipe(
        resolvedMovies(),
    );

    public sortMovies(sortOption: SortOptions): Observable<Movies[]> {
        this.selectedSortOption = sortOption;
        return this.movies$ = this.movies$.pipe(map((movies: Movies[]) => {
            return this.sortedMovies(movies, sortOption);
        }));
    }

    private sortedMovies(movies: Movies[], sortOption: SortOptions): Movies[] {
        const sortedMovies = [];

        for (const movie of movies) {
            if (movie.type === sortOption) {
                sortedMovies.unshift(movie);
            } else {
                sortedMovies.push(movie)
            }
        }

        return sortedMovies;
    }
}
