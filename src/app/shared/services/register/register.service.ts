import { Injectable } from '@angular/core';
import { Http,Response, Headers  } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { User } from '../../models/models';

@Injectable()
export class RegisterService {
  private registerUrl: string = 'http://127.0.0.1:5000/auth/register';
  private headers = new Headers();
  constructor(private http: Http){
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  registerUser(username: string, email: string, password: string){
    let user = {
      username: username,
      password: password,
      email: email
    }
    return this.http.post(
      this.registerUrl, JSON.stringify(user), {headers: this.headers})
      .map((register_response: Response) => {
        // register successful
        let accessData = register_response.json();
        if (accessData) {
          localStorage.setItem('accessToken', accessData['token']);
        }
      });
    }

}
