import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginAccess = localStorage.getItem('accessToken');
  title = 'BucketList Application';

  logOut(){
    console.log('log out called')
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    location.reload();
  }
}
