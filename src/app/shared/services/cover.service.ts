import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Cover} from '../modules/cover';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoverService {
  apiUrl = environment.apiUrl + '/covers';
  constructor(private http: HttpClient) { }

  getCovers(): Observable<Cover[]> {
    return this.http.get<Cover[]>(this.apiUrl);
  }
  getCoverById(id: number): Observable<Cover> {
    return this.http.get<Cover>(this.apiUrl + '/' + id);
  }
}
