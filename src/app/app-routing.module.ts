import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { PersonalComponent } from './personal/personal.component';
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
const appRoutes:Routes=[
  {
    path:'entries',
    component:EntriesComponent,
    data:{title:'Form entry'}
  },
  {
   path:'personal',
   component:PersonalComponent,
   data:{title:'table display'}
  }
]
@NgModule({
declarations:[],
imports: [
    RouterModule.forRoot(
      appRoutes,{enableTracing:true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{}
