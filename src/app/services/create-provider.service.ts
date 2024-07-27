import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProvider } from '../models/create-provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateProviderService {
  private apiUrl = 'http://localhost:5008/api/provider';

  constructor(private http: HttpClient) {}
  createProvider(createProvider: CreateProvider): Observable<any> {
    return this.http.post<any>(this.apiUrl, createProvider);
  }
}
