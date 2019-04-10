import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { PopularComponent } from './pages/popular/popular.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { MovieTypes } from './models/movie-types.enum';
import { MoviesResolver } from './movies/movies.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent, 
        resolve: {movies: MoviesResolver},
        data: { movieType: MovieTypes.ALL }
    },
    { path: 'details', component: DetailsComponent },
    { path: 'now-playing', component: NowPlayingComponent },
    { path: 'popular', component: PopularComponent },
    { path: 'top-rated', component: TopRatedComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
