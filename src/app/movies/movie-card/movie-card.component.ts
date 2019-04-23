import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { BASE_IMG_URL } from 'src/app/models/movies.const';
import { Router } from '@angular/router';

@Component({
    selector: 'movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
    @Input() 
    public movie: Movies;
    public readonly baseImgUrl = BASE_IMG_URL;

    constructor(private router: Router) { }

    public routeToMovieDetails(selectedMovieName: string, selectedMovieId: string) {
        const movieName = selectedMovieName.replace(/\W/g, '');

        if (selectedMovieId) {
            this.router.navigate([`details/${movieName}`, selectedMovieId]);
        }
    }
}
