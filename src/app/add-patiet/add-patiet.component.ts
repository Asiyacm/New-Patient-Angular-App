import { Component } from '@angular/core';

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

  readValue=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.mobile,"dateOfAppoinment":this.dateofapmt,"doctorName":this.dname}
    console.log(data)
  }



}
