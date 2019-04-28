import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { PopularComponent } from './pages/popular/popular.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { MovieTypes } from './models/movie-types.enum';
import { MoviesResolver } from './movies/movies.resolver';
import { MovieDetailsResolver } from './pages/details/details.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {movies: MoviesResolver},
        data: { movieType: MovieTypes.ALL }
    },
    {   path: 'now-playing',
        component: NowPlayingComponent,
        resolve: {movies: MoviesResolver},
        data: { movieType: MovieTypes.NOW_PLAYING }
    },
    {   path: 'popular',
        component: PopularComponent,
        resolve: {movies: MoviesResolver},
        data: { movieType: MovieTypes.POPULAR }
    },
    {   path: 'top-rated',
        component: TopRatedComponent,
        resolve: {movies: MoviesResolver},
        data: { movieType: MovieTypes.TOP_RATED }
    },
    {   path: 'details/:movieName/:id',
        component: DetailsComponent ,
        resolve: { movieDetails: MovieDetailsResolver },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
