import { Injectable } from '@angular/core';
import {Product} from '../modules/product';
import {Order} from '../modules/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orders: Order;
  productsList: Product[];
  constructor() { }

  addToBasket(products: Product) {
    let order = JSON.parse(localStorage.getItem('currentOrder')) as Order;
    if (!order) {
      order = new Order();
    }
    order.orderLines.push({
      qty: 1,
      priceWhenBought: product.price,
      productId: product.id,
      product: products
    });
    ;
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

  getTotal() {
  return this.orders.orderLines
    .map(ol => ol.product.price * ol.qty)
    .reduce((a, b) => a + b, 0);
  }
}
