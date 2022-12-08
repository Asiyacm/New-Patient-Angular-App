import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatietComponent } from './add-patiet/add-patiet.component';
import { FormsModule } from '@angular/forms';
import { ViewPatietComponent } from './view-patiet/view-patiet.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPatientComponent } from './search-patient/search-patient.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddPatietComponent
  },

  {
    path:"view",
    component:ViewPatietComponent
  },
  {
    path:"search",
    component:SearchPatientComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddPatietComponent,
    ViewPatietComponent,
    NavComponent,
    SearchPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
