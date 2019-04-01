import { Component, OnChanges, SimpleChanges, OnInit, OnDestroy} from '@angular/core';
import{FormControl, FormGroup, FormGroupDirective, ControlContainer, Validators}from'@angular/forms';
import {Router} from '@angular/router';
import{ValuesService} from '../values.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal',
  inputs:['values'],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class PersonalComponent implements OnInit{
  form;
  clickEdit:boolean=true;
  receivedValue:any;
  buttonname:string="submit";
  arr:any=[];
  ngOnInit(){
    this.receivedValue=this.myvalue.editFormValue();
    if(this.receivedValue!=-1){
      this.clickEdit=false;
      this.buttonname="Update";
      console.log(this.buttonname);
      this.form = new FormGroup({
        id:new FormControl(this.receivedValue.id),
        FirstName: new FormControl(this.receivedValue.FirstName),
        LastName:new FormControl(this.receivedValue.LastName),
        Gender:new FormControl(this.receivedValue.Gender),
        email:new FormControl(this.receivedValue.email),
        dob:new FormControl(this.receivedValue.dob),
        state:new FormControl(this.receivedValue.state),
        city:new FormControl(this.receivedValue.city),
        country:new FormControl(this.receivedValue.country),
        phonenumber:new FormControl(this.receivedValue.phonenumber)
      });
    }
    else{
    this.clickEdit=true;
    this.buttonname="Submit";
    this.form=new FormGroup({
     id:new FormControl(''),
     FirstName:new FormControl(''),
     LastName:new FormControl(''),
     Gender:new FormControl(''),
     email:new FormControl(''),
     dob:new FormControl(''),
     state:new FormControl(''),
     city:new FormControl(''),
     country:new FormControl(''),
     phonenumber:new FormControl('',[Validators.maxLength(10)])
    });
  }
  }
  constructor(private router:Router,private myvalue:ValuesService,private http:HttpClient){
  }
  formValue:any;
  /*sending the form values */
  send(){
    alert("you have successfully submitted! click on the Ok button to view your details");
    this.formValue=this.form.value;
    console.log(this.formValue);
    this.myvalue.sendData(this.formValue).subscribe(data=>{console.log(data)});
    console.log(this.arr);
    this.router.navigate(['entries']);
  }
  /*navigate to the table when view button is pressed */
  navigation(){
    this.router.navigate(['entries']);
  }
}
