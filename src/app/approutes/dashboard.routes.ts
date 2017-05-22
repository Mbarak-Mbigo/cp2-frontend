import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../core/dashboard/dashboard/dashboard.component';
import { BucketListComponent } from '../core/features/bucketlist/bucketlist.component';
import { BucketitemComponent } from '../core/features/bucketitem/bucketitem.component';
import { AuthguardService } from '../shared/services/authguard/authguard.service';


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path:'', redirectTo: 'bucketlists', pathMatch: 'full', canActivate: [AuthguardService]},
      {path: 'bucketlists', component: BucketListComponent, canActivate: [AuthguardService] },
      {path: 'bucketlists/:id/items', component: BucketitemComponent, canActivate: [AuthguardService]},
      {path: '**', redirectTo: 'pagenotfound', pathMatch: 'full'}
    ]
  }
];

export const dashboardRouting: ModuleWithProviders =
RouterModule.forChild(dashboardRoutes);
