import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatietComponent } from './add-patiet/add-patiet.component';
import { FormsModule } from '@angular/forms';
import { ViewPatietComponent } from './view-patiet/view-patiet.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPatietComponent,
    ViewPatietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
