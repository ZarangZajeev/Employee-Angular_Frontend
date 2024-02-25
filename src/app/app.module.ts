import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';
import { RetrieveemployeeComponent } from './retrieveemployee/retrieveemployee.component';
import { EmployeecreateComponent } from './employeecreate/employeecreate.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    HomeComponent,
    RetrieveemployeeComponent,
    EmployeecreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
