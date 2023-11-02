import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
    private router: Router) { }

  private readonly url = '/api/v1/auth/authenticate';

  login(data: any): void{
    this.http.post(this.url, data, {withCredentials: true}).subscribe(
      () => this.router.navigate(['/home'])
    );
  }
}
