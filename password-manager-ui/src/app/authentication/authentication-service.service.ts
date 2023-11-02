import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
    private router: Router) { }

  private readonly url = '/api/v1';

  login(username: string, password: string) {
    const body = { "email" : username, "password": password };
    this.http.post<any>(`${this.url}/auth/authenticate`, body)
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
        return response;
      })).subscribe(() => this.router.navigate(['']));
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtPayload = JSON.parse(atob(token.split('.')[1]));
      return jwtPayload.exp > Date.now() / 1000;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  dummy() {
    return this.http.get<any>(`${this.url}/demo-controller`).subscribe();
  }
}
