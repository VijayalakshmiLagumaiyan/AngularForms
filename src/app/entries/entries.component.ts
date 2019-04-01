import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ValuesService } from '../values.service';
import { HttpClient} from '@angular/common/http';
@Component({

  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent {
  entry:any=[];
  spin:boolean=true;
  constructor(private router: Router, private myvalue: ValuesService,private http:HttpClient) {
    setTimeout(()=>{
      this.myvalue.getBooksWithObservable().subscribe(entry=>{
      this.entry=entry;
      this.spin=false;
    });
    }, 3000);
  }
  editValue(i) 
  {
    console.log(i);
    console.log(this.entry[i]);
    this.myvalue.editIndex(this.entry[i]);
    this.router.navigate(['personal']);
  }
  value:boolean;
  confirmation(){
    if(confirm("Are you sure you want to delete this record")){
      this.value=true;
    }
    else{
      this.value=false;
    }
  }
  /* delete the data when delete button is pressed */
  deleteValue(form) {
    console.log(form);
    if(this.value){
    return this.http.delete("http://localhost:62931/api/delete?id="+encodeURIComponent(form.id)).subscribe(data=>{console.log(data);window.location.reload()});
    }
    else{
      return;
    }
  }
  backPage() {
    this.router.navigate(['personal']);
  }
}
