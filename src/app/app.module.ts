import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatDividerModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatSelectModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { LoginComponent } from './pages/login/login.component';
import { CreatUserComponent } from './pages/creat-user/creat-user.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {from} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
import { FontPagesComponent } from './pages/font-pages/font-pages.component';
import { ShoppingCartComponent } from './shoppingCart/shopping-cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MinSideComponent } from './pages/min-side/min-side.component';
import { CoversListComponent } from './pages/covers/covers-list/covers-list.component';
import { CoversDetailsComponent } from './pages/covers/covers-details/covers-details.component';
import { SmartphonesDetailsComponent } from './pages/smartphones/smartphones-details/smartphones-details.component';
import { SmartPhonesListComponent } from './pages/smartphones/smartphones-list/smartphones-list.component';
import {FlexModule} from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CreatUserComponent,
    FontPagesComponent,
    ShoppingCartComponent,
    ContactComponent,
    MinSideComponent,
    CoversListComponent,
    CoversDetailsComponent,
    SmartphonesDetailsComponent,
    SmartPhonesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatGridListModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
