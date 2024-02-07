import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  post<T>(url: string, body?: any) {
    return this.http.post<T>(this.apiUrl + url, body);
  }

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(this.apiUrl + url, {
      params: new HttpParams({ fromObject: params }),
    });
  }
}
