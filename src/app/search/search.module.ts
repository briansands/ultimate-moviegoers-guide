import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule, MatFormFieldModule, MatAutocompleteModule } from '@angular/material';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

@NgModule({
    declarations: [SearchComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [
        SearchService
    ],
    exports: [
        SearchComponent,
    ]
})
export class SearchModule { }
