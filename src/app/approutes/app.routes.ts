import { NgModule, ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// local imports
import { HomeComponent } from '../core/base/home/home.component';
import { LoginComponent } from '../core/base/login/login.component';
import { RegisterComponent } from '../core/base/register/register.component';
import { PagenotfoundComponent } from '../core/base/pagenotfound/pagenotfound.component';


// Routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: '**', component: PagenotfoundComponent }
]

// export routes as a module
export const appRouting: ModuleWithProviders =
RouterModule.forRoot(routes);
