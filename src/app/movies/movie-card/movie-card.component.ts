import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { BASE_IMG_URL } from 'src/app/models/movies.const';

@Component({
    selector: 'movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
    @Input() 
    public movie: Movies;
    public readonly baseImgUrl = BASE_IMG_URL;
}
