import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/authentication-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) {}

  formGroup: FormGroup = this.formBuilder.group({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit(): void {
    if(this.formGroup.valid) {
      let firstname = this.formGroup.controls['firstname'].value;
      let lastname = this.formGroup.controls['lastname'].value;
      let email = this.formGroup.controls['email'].value;
      let password = this.formGroup.controls['password'].value;

      this.authenticationService.register(firstname, lastname, email, password);
    }

  }
}
