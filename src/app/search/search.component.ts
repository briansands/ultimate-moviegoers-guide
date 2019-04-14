import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    public myControl = new FormControl();
    public searchResults: Observable<string | Object>;

    public constructor(
        private searchService: SearchService,
    ) { }

    public ngOnInit() {
        this.myControl.valueChanges.subscribe(value => this.searchResults = this.searchService.search(value));
    }
}
