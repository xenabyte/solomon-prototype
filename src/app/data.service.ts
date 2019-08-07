import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from './business';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDirectories_uri = 'http://localhost:8000/api/directories';
  searchDirectories_uri = 'http://localhost:8000/api/search/';

  getDirectories() {
    return this.http.get(this.getDirectories_uri);
  }

  serarchDirectories(business: Business) {
    return this.http.post(this.searchDirectories_uri, Business);
  }
}
