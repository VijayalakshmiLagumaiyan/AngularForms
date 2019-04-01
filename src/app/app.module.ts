import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { PersonalComponent } from './personal/personal.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import{RouterModule,Routes} from '@angular/router';
import { ValuesService } from './values.service';
const appRoutes:Routes=[
  {
    path:'',
    component:PersonalComponent
  },
  {
    path:'entries',
    component:EntriesComponent
  },
  {
   path:'personal',
   component:PersonalComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    PersonalComponent
  ],
  exports: [
    AppComponent,
    EntriesComponent,
    PersonalComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes),
      HttpClientModule
  ],
  providers: [ValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
