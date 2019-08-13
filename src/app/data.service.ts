import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Business } from './business';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDirectories_uri = 'http://167.99.57.223/admin/public/api/directories'; // 167.99.57.223/admin/public
  searchDirectories_uri = 'http://localhost:8000/api/search';
  loading: false;

  addbusiness(business: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post<any>(this.searchDirectories_uri, business, {headers});
  }


  getDirectories() {
    return this.http.get(this.getDirectories_uri);
  }


  searchDirectories(business: string) {
    return this.http.post(this.searchDirectories_uri, Business);
  }
}
