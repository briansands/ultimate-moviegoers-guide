import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { BASE_URL, API_KEY } from '../models/api.const';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }

    public search(value: string): Observable<string | Object> {
        if (value) {
            const request = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`;
            return this.http.get(request).pipe(map(response => response), catchError(err => of(`error: ${err}`)));
        }
    }
}
