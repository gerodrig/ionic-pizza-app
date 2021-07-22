import { Injectable } from '@angular/core';
import { Order } from '../interfaces/orders.interface';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private _ordersHistory: Order[] = [];

  constructor(private order: OrderService) { }

  get getOrdersHistory(): Order[]{
    return [...this._ordersHistory]
  }

  addOrder(order: Order) {
    this._ordersHistory.push(order);
    this.order.clearOrder();
  }

}
