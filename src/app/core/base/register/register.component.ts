import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../../../shared/services/register/register.service';
import { AlertService } from '../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})

export class RegisterComponent implements OnInit {
  registerTitle: string = 'Register View'
  loading = false;
  userRegisterForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private alertService: AlertService,
              private registerService: RegisterService) { }

  ngOnInit() {
    this.userRegisterForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  onSubmit(){
    this.loading = true;
    this.registerService.registerUser(
      this.userRegisterForm.value['username'],
      this.userRegisterForm.value['email'],
      this.userRegisterForm.value['password'])
      .subscribe(
        responseData => {
          // on successful registration
          this.alertService.success('Registration successful', true);
          this.router.navigate(['dashboard'])
        },
        registerError =>{
          this.alertService.error(registerError);
          this.errorMessage = registerError;
          this.loading = false;
        }
    );
  }

}
