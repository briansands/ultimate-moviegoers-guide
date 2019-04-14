import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    public myControl = new FormControl();
    public options: string[] = ['One', 'Two', 'Three'];
    public movies: Observable<string[]>;

    public constructor(
        private searchService: SearchService,
    ) { }

    public ngOnInit() {
        this.movies = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this.searchService.search(value))
            );
    }
}
