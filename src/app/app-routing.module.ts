import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RetrieveemployeeComponent } from './retrieveemployee/retrieveemployee.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"employee/:id",component:RetrieveemployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
