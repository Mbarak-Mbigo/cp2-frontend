import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../core/dashboard/dashboard/dashboard.component';


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path:'', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

export const dashboardRouting: ModuleWithProviders =
RouterModule.forChild(dashboardRoutes);
