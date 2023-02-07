import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FirstFormComponent } from '../first-form/first-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from '../home-page/home-page.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { SubmitFormComponent } from '../submit-form/submit-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstFormComponent,
    HomePageComponent,
    SubmitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
