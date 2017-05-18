import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../core/dashboard/dashboard/dashboard.component';
import { BucketListComponent } from '../core/features/bucketlist/bucketlist.component';


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path:'', redirectTo: 'bucketlists', pathMatch: 'full'},
      {path: 'bucketlists', component: BucketListComponent }
    ]
  }
];

export const dashboardRouting: ModuleWithProviders =
RouterModule.forChild(dashboardRoutes);
