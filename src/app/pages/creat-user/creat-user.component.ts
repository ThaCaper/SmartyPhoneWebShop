import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../shared/modules/User';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css']
})
export class CreatUserComponent implements OnInit {

  user: User;
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    street: new FormControl(''),
    zipCode: new FormControl(''),
    country: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')

  });
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  AddUser() {
    const userToBeAdded = this.userForm.value;
    this.userService.adduser(userToBeAdded)
      .subscribe(() => {
        this.router.navigateByUrl('/login');
      });
  }

}
