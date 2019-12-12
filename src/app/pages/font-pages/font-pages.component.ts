import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/services/authentication.service';

@Component({
  selector: 'app-font-pages',
  templateUrl: './font-pages.component.html',
  styleUrls: ['./font-pages.component.css']
})
export class FontPagesComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.Logout();
  }

}
