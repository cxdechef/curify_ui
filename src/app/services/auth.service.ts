import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupUser } from '../models/signup-user';
import { SigninUser } from '../models/signin-user';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5008/api/user';
  private userPayload: any;
  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodedToken();
  }

  signupUser(signupUser: SignupUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, signupUser);
  }

  signinUser(signinUser: SigninUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, signinUser);
  }

  signOutUser() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  decodedToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
  }

  getFullNameFromToken() {
    if (this.userPayload) return this.userPayload.unique_name;
  }
  getRoleFromToken() {
    if (this.userPayload) return this.userPayload.role;
  }
}
