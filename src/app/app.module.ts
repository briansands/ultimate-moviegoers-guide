import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { PopularComponent } from './pages/popular/popular.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { MoviesService } from './movies/movies.service';
import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './search/search.module';
import { MoviesResolver } from './movies/movies.resolver';
import { MovieDetailsResolver } from './pages/details/details.resolver';
import { MaterialModule } from './material.module';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { RuntimePipe } from './pipes/runtime.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        DetailsComponent,
        NowPlayingComponent,
        PopularComponent,
        TopRatedComponent,
        MovieCardComponent,
        RuntimePipe,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        SearchModule,
        MaterialModule,
    ],
    providers: [
        MoviesService,
        MoviesResolver,
        MovieDetailsResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
