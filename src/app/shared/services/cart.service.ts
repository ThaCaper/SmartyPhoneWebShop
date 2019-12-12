import { Injectable } from '@angular/core';
import {Product} from '../modules/product';
import {Order} from '../modules/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToBasket(product: Product) {
    let order = JSON.parse(localStorage.getItem('currentOrder')) as Order;
    if (!order) {
      order = new Order();
    }
    order.orderLines.push({
      qty: 1,
      priceWhenBought: product.price,
      productId: product.id,
      product
    });
    localStorage.setItem('currentOrder', JSON.stringify(order));

  }

  getBasket(): Order {
    const currentOrder = JSON.parse(localStorage.getItem('currentOrder'));
    if (currentOrder) {
      return currentOrder;
    } else {
      return null;
    }
  }
}
