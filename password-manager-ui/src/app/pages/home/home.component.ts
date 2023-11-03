import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {

  }

  logout(): void {
    this.authenticationService.logout();
  }

}
