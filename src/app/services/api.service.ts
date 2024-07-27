import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5008/api';
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<any>(`${this.apiUrl}/user`);
  }

  getProviders() {
    return this.httpClient.get<any>(`${this.apiUrl}/provider`);
  }
}
