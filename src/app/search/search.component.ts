import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public myControl = new FormControl();
    public searchResults$: Observable<string | object>;

    public constructor(
        private searchService: SearchService,
        private router: Router
    ) { }

    public ngOnInit() {
        this.myControl.valueChanges.subscribe(value => this.searchResults$ = this.searchService.search(value));
    }

    public routeToMovieDetails(selectedMovieName: string, selectedMovieId: string) {
        const movieName = selectedMovieName.replace(/\W/g, '');

        if (selectedMovieId) {
            this.router.navigate([`details/${movieName}`, selectedMovieId]);
        }
    }
}
