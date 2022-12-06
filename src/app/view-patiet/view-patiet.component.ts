import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-patiet',
  templateUrl: './view-patiet.component.html',
  styleUrls: ['./view-patiet.component.css']
})
export class ViewPatietComponent {
  constructor(private api:ApiService){
    
    api.fetchPatient().subscribe(
      (response:any)=>
      {
        this.patient=response;
      }
    )
  }


  
  patient:any=[]


}
