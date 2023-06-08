import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { Signup } from 'src/common/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }
  checkAccountExists(email: string) {
    // Gửi yêu cầu kiểm tra tài khoản tồn tại đến server
    return this.http.get<any[]>(`${this.API_URL}/?email=${email}`);
  }
  signup(users: Signup): Observable<Signup> {
    return this.http.post<Signup>(`${this.API_URL}`, users)
  }
}
