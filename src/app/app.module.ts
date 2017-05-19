import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { appRouting } from './approutes/app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/base/home/home.component';
import { RegisterComponent } from './core/base/register/register.component';
import { LoginComponent } from './core/base/login/login.component';
import { PageNotFoundComponent } from './core/base/pagenotfound/pagenotfound.component';
import { DashboardModule } from './core/dashboard/dashboard.module';
import { AlertComponent } from './core/alert/alert.component';
import { AlertService } from './shared/services/alert/alert.service';
import { AuthguardService } from './shared/services/authguard/authguard.service';
import { AuthService } from './shared/services/authservice/auth.service';
import { BucketlistmodalComponent } from './core/features/modals/bucketlistmodal/bucketlistmodal.component';
import { BucketitemmodalComponent } from './core/features/modals/bucketitemmodal/bucketitemmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRouting,
    DashboardModule
  ],
  providers: [
    AlertService,
    AuthguardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
