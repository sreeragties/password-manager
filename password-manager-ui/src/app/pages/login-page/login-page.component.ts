import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/authentication-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) {}

  formGroup: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit(): void {
    if(this.formGroup.valid) {
      let username = this.formGroup.controls['username'].value;
      let password = this.formGroup.controls['password'].value;

      this.authenticationService.login(username, password);
    }
  }

  test(): void {
    this.authenticationService.dummy();
  }
}
