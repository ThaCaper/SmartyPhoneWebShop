import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {CreatUserComponent} from './pages/creat-user/creat-user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'creatUser', component: CreatUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
