import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/modules/User';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-min-side',
  templateUrl: './min-side.component.html',
  styleUrls: ['./min-side.component.css']
})
export class MinSideComponent implements OnInit {
  id: number;
  user: User;
  userForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    firstName: new FormControl({value: '', disabled: true}),
    lastName: new FormControl({value: '', disabled: true}),
    email: new FormControl({value: '', disabled: true}),
    phoneNumber: new FormControl({value: '', disabled: true}),
    street: new FormControl({value: '', disabled: true}),
    zipCode: new FormControl({value: '', disabled: true}),
    country: new FormControl(''),
    username: new FormControl({value: '', disabled: true}),
    password: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id)
      .subscribe(userFromRest => {
        this.user = userFromRest;
        this.userForm.patchValue({
          id: userFromRest.id,
          firstName: userFromRest.firstName,
          lastName: userFromRest.lastName,
          email: userFromRest.email,
          phoneNumber: userFromRest.phoneNumber,
          country: userFromRest.country,
          street: userFromRest.street,
          zipCode: userFromRest.zipCode,
          username: userFromRest.userName,
          password: userFromRest.password
        });
      });
  }

}
