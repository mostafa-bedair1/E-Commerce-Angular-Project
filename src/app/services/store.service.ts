import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  baseUrl: string = 'https://fakestoreapi.com/products';

  GetAllProudcts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  

  constructor(private http: HttpClient) {}
}
