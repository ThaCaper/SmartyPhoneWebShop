import { Injectable } from '@angular/core';
import {SmartPhone} from '../modules/smartPhone';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  apiUrl = environment.apiUrl + '/smartPhones';
  constructor(private http: HttpClient) { }

  getSmartPhones(): Observable<SmartPhone[]> {
    return this.http.get<SmartPhone[]>(this.apiUrl);
  }
  getSmartPhoneById(id: number): Observable<SmartPhone> {
    return this.http.get<SmartPhone>(this.apiUrl + '/' + id);
  }

}
