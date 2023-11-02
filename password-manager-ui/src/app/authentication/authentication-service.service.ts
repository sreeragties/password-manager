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
      })).subscribe(() => this.router.navigate(['/home']));
  }

  dummy() {
    return this.http.get<any>(`${this.url}/demo-controller`).subscribe();
  }
}
