import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../../shared/services/cart.service';
import {SmartPhone} from '../../../shared/modules/smartPhone';
import {SmartphoneService} from '../../../shared/services/smartphone.service';

@Component({
  selector: 'app-smartphones-details',
  templateUrl: './smartphones-details.component.html',
  styleUrls: ['./smartphones-details.component.css']
})
export class SmartphonesDetailsComponent implements OnInit {
  phone: SmartPhone;
  id: number;
  constructor(private route: ActivatedRoute,
              private phoneService: SmartphoneService,
              private cartService: CartService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.phoneService.getSmartPhoneById(this.id)
      .subscribe(phoneFromRest => {
        this.phone = phoneFromRest;
      });
  }
  addToBasket() {
    this.cartService.addToBasket(this.phone);
  }
}
