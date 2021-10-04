import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {LoginComponent} from './guest/login/login.component';
import {RegisterComponent} from './guest/register/register.component';
import {AdminComponent} from './admin/admin/admin.component';
import {NotFoundComponent} from './error/not-found/not-found.component';
import {UnathorizedComponent} from './error/unathorized/unathorized.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BookComponent } from './admin/book/book.component';
import {HomeComponent} from "./guest/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    UnathorizedComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
