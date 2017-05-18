import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// local imports
import { dashboardRouting } from '../../approutes/dashboard.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BucketListComponent } from '../features/bucketlist/bucketlist.component';
import { DashboardnavComponent } from './dashboardnav/dashboardnav.component';
import { BucketlistService } from '../../shared/services/bucketlist/bucketlist.service';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent,
    BucketListComponent,
    DashboardnavComponent
  ],
  providers: [BucketlistService],
  exports: [DashboardComponent],
})
export class DashboardModule { }
