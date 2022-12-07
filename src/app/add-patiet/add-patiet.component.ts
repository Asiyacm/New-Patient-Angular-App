import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patiet',
  templateUrl: './add-patiet.component.html',
  styleUrls: ['./add-patiet.component.css']
})
export class AddPatietComponent {

  
  name=""
  address=""
  mobile=""
  dateofapmt=""
  dname=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"name":this.name,"address":this.address,"mobile":this.mobile,"dateofapmt":this.dateofapmt,"dname":this.dname}
    console.log(data)

    this.api.addPatient(data).subscribe(
      (response:any)=>
      {
        console.log(response)
  }
    )


}
}
