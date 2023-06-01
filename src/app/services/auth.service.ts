import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = "http://localhost:3000/users"
  constructor(private http: HttpClient) { }
  signup(users: any): Observable<any> {
    return this.http.post(`${this.API_URL}/signin`, users)
  }
}
