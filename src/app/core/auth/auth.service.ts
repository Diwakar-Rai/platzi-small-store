import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface LoginResponse {
  access_token: string;
}
export interface RegisterPayload {
  name: string;
  avatar: string;
  password: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly BASE_URL = 'https://api.escuelajs.co/api/v1';
  private http: HttpClient = inject(HttpClient);

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/auth/login`, { email, password });
  }
  register(payload: RegisterPayload) {
    return this.http.post(`${this.BASE_URL}/users`, payload);
  }

  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return Boolean(localStorage.getItem('access_token'));
  }
}
