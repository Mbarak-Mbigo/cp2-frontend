import { Component } from '@angular/core';
import { AlertService } from '../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-dashboardnav',
  templateUrl: './dashboardnav.component.html',
  styleUrls: ['./dashboardnav.component.css']
})
export class DashboardnavComponent {
  bucketState = localStorage.getItem('bucketState');
  username: string = localStorage.getItem('username');
  constructor(private alertService: AlertService) {}

  createBucketList(){
    this.alertService.sendCreateBucketAlert();
  }

  searchAlert(searchQuery: string){
    this.alertService.sendSearchAlert(searchQuery);
  }
}
