import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  public search(value: string) {
    return [''];
  }
}
