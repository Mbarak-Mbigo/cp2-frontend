import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AlertService } from '../alert/alert.service';

@Injectable()
export class AuthService {
  private loginUrl: string = 'http://127.0.0.1:5000/auth/login';
  private headers = new Headers();

  constructor(private http: Http, private alertService: AlertService) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  logInUser(username:string, password:string){
    return this.http.post(this.loginUrl,
      JSON.stringify({'username': username, 'password': password}),
      {headers: this.headers})
          .map((login_response: Response) =>{
            // login successful if token returned from server
            let accessData = login_response.json();
            if (accessData) {
              localStorage.setItem('accessToken', accessData['token']);
            }
            // code to execute if login fails
            authError => {
              console.log('Oops' + authError);
              this.alertService.error('Token expired login again to access');

            }
          })
  }

  logOutUser() {
    // remove user from local storage to log user out
    localStorage.removeItem('accessToken');
  }

}
