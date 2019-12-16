import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../modules/User';
import {UserService} from '../services/user.service';
import {ActivatedRoute, CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {count} from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  getToken() {
      if (this.authentication.getToken()) {
        return true;
      } else {
        return false;
      }
  }

  Logout() {
    this.authentication.Logout();
  }





}
