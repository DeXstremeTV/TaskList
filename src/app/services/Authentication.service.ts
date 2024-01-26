import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtAuth } from '../model/jwt-auth';
import { Register } from '../model/register';
import { Login } from '../model/login';
import { Router } from '@angular/router';
import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = 'https://localhost:7107';
  registerUrl = '/api/AuthManagement/register';
  loginUrl = '/api/AuthManagement/login';

  constructor(private http: HttpClient, private router: Router) {}

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${this.baseUrl}${this.registerUrl}`, user);
  }
  public login(user: Login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${this.baseUrl}${this.loginUrl}`, user);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      try {
        const decodedToken: any = jwt.verify(token, "1b56e80f8506f6aa37c13b5ce489f6bf0f0e4d77adfd3e4a7b1e8dcd50fb8d7b19951c122ad87366b0c69475907e6839d9593d3a1a5b9f9302c5d6c13e0ee321"); 
        if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
          console.log('Token expired');
          return false;
        }
        return true;
      } catch (error) {
        console.error('Invalid token:', error);
        return false;
      }
    }
  
    return false;
  }
}


