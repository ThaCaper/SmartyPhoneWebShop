import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {CreatUserComponent} from './pages/creat-user/creat-user.component';
import {FontPagesComponent} from './pages/font-pages/font-pages.component';
import {ShoppingCartComponent} from './shoppingCart/shopping-cart.component';
import {ContactComponent} from './pages/contact/contact.component';
import {MinSideComponent} from './pages/min-side/min-side.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'creatUser', component: CreatUserComponent },
  { path: 'font-pages', component: FontPagesComponent },
  { path: 'home', component: FontPagesComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', component: FontPagesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'min-side', component: MinSideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
