import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

import { AlertService } from '../../../shared/services/alert/alert.service';
import { AuthService } from '../../../shared/services/authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  loading = false;
  returnUrl: string;
  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private alertService: AlertService) { }

  ngOnInit() {
    this.userLoginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
    // // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onLogin(){
    this.authService.logInUser(this.userLoginForm.value['username'],
                                this.userLoginForm.value['password'])
      .subscribe(
          responseData => {
            // on successful login
            console.log('login successful')
            this.router.navigate([this.returnUrl]);
          },
          registerError =>{
            // on login fail
            this.alertService.error(registerError);
            this.loading = false;
          });
  }

}
