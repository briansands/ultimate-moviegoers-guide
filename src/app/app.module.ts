import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { PopularComponent } from './pages/popular/popular.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { MoviesService } from './movies/movies.service';
import { MoviesResolver } from './movies/movies.resolver';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        DetailsComponent,
        NowPlayingComponent,
        PopularComponent,
        TopRatedComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
    ],
    providers: [
        MoviesService,
        MoviesResolver,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
