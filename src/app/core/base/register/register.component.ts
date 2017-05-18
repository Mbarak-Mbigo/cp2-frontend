import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  registerTitle: string = 'Register View'
  loading = false;
  userRegisterForm: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.userRegisterForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

}
