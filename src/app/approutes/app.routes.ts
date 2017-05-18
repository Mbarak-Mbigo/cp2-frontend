import { NgModule, ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// local imports
import { HomeComponent } from '../core/base/home/home.component';
import { LoginComponent } from '../core/base/login/login.component';


// Routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
]

// export routes as a module
export const appRouting: ModuleWithProviders =
RouterModule.forRoot(routes);
