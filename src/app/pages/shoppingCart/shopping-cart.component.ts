import { Component, OnInit } from '@angular/core';
import {CartService} from '../../shared/services/cart.service';
import {OrderLine} from '../../shared/modules/orderline';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  orderLines: OrderLine[];
  cartForm = new FormGroup({
    productName: new FormControl({value: '', disabled: true}),
    amount: new FormControl(''),
    price: new FormControl({value: '', disabled: true}),
    priceTotal: new FormControl({value: '', disabled: true}),
    remove: new FormControl('')
  });
  displayedColumns: string[] = ['productName', 'amount', 'price', 'priceTotal', 'remove'];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    const order = this.cartService.getBasket();
    if (order.orderLines) {
      this.orderLines = order.orderLines;
    }
  }

  getTotal() {
  }

  calcAmount() {

  }
  removeFromCart() {
  }
}
