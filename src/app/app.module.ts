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
import { PagenotfoundComponent } from './core/base/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
