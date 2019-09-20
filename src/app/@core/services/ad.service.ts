import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

export class Ad {
  _id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdService {

  constructor(private http: HttpClient) { }

  getAds(): Observable<Object> {
    return this.http.get(environment.apiUrl + '/ads/all');
  }
  updateAd(id, data): Observable<Object> {
    return this.http.patch(environment.apiUrl + '/ads/' + id, {data: data});
  }
  deleteAd(id): Observable<Object> {
    return this.http.delete(environment.apiUrl + '/ads/' + id);
  }
}
