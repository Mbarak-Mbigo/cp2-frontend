import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// local imports
import { dashboardRouting } from '../../approutes/dashboard.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
