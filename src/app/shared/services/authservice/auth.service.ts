import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loginUrl: string = 'http://127.0.0.1:5000/auth/login';
  private headers = new Headers();

  constructor(private http: Http) {
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
          })
  }

  logOutUser() {
    // remove user from local storage to log user out
    localStorage.removeItem('accessToken');
  }

}
