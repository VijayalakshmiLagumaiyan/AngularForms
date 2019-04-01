import { Injectable } from '@angular/core';
import { usertype } from './entries/model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  editIn=-1;
  constructor(private http:HttpClient) { }
getBooksWithObservable(){
  
  return this.http.get('http://localhost:62931/api/demo');
}
  sendData(val:any){
   if(this.editIn==-1){
  return this.http.post('http://localhost:62931/api/insert',val);
   }
   else{
     return this.http.put('http://localhost:62931/api/update',val);
   }
  }
  editIndex(index:any){
    this.editIn=index;
    return this.editIn;
  }
  editFormValue(){
    return this.editIn;
  }
  
}
