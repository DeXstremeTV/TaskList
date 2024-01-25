import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtAuth } from '../model/jwt-auth';
import { Register } from '../model/register';
import { Login } from '../model/login';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{
    baseUrl= "https://localhost:7107"
    registerUrl= "/api/AuthManagement/register"
    loginUrl= "/api/AuthManagement/login"

    constructor(private http: HttpClient) { }


    public register(user: Register): Observable<JwtAuth> {
        return this.http.post<JwtAuth>(`${this.baseUrl}${this.registerUrl}`, user);
    }
    public login(user: Login): Observable<JwtAuth> {
        return this.http.post<JwtAuth>(`${this.baseUrl}${this.loginUrl}`, user);
    }
}