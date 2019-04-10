import { Component, OnInit } from '@angular/core';
import { MoviesService} from 'src/app/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movies: MoviesService) { }

  ngOnInit() {
    const movies = this.movies.getAllMovies();
    movies.subscribe(x => console.log(x))
  }

}
