import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatietComponent } from './add-patiet/add-patiet.component';
import { FormsModule } from '@angular/forms';
import { ViewPatietComponent } from './view-patiet/view-patiet.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddPatietComponent
  },

  {
    path:"view",
    component:ViewPatietComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddPatietComponent,
    ViewPatietComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
