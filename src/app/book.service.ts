import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { usertype } from './entries/model';
@Injectable()
export class BookService {
    newUser:any;
    constructor(private http:HttpClient) { }
    
    ngOnInit(){
        this.patchThevalue();
        this.deleteValue();
       }
    d:any;
    patchThevalue(){
     return this.http.patch('https://reqres.in/api/users',{job:"Intern"}).subscribe(data=>{
         this.d=data;
         console.log(this.d);
     });
    }
    deleteValue(){
    return this.http.delete('https://reqres.in/api/users',this.newUser).subscribe(data=>{this.d=data;
    console.log(this.d);});
    }

    getThePosted(){
        return this.http.get('https://reqres.in/api/users');
    }
} 