import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { PROPERTIES_URL } from './injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class PropertyRepository {

  constructor(@Inject(PROPERTIES_URL) private url: string ,private http: HttpClient) { }

  getProperties(page: number, sortBy: string, direction: string) {
    const params = new HttpParams().set('page', `${page}`).set('sortBy', sortBy).set('direction', direction)
    return this.http.get(this.url, { params });
  }
}
