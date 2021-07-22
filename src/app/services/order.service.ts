import { Injectable } from '@angular/core';
import { Topping, PizzaSize, Order, Pizza } from '../interfaces/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _myOrders: Order = null;

  private _myCurrentOrder: Pizza[] = [];

  private _toppings: Topping[] = [
    {
    name: 'Vegetables',
    price: 2.49,
    },
    {
    name: 'Meat Balls',
    price: 4.99,
    },
    {
    name: 'Pepperoni',
    price: 3.99,
    },
    {
    name: 'Mushrooms',
    price: 2.99,
    },
  ]

  private _sizes: PizzaSize[] = [
    {
    size: 'Large',
    price: 8.49,
    },
    {
    size: 'Medium',
    price: 7.99,
    },
    {
    size: 'Small',
    price: 6.99,
    },
    {
    size: 'Party',
    price: 10.99,
    },
  ]

  get getToppings(): Topping[]{
    return [...this._toppings]
  }

  get getSizes(): PizzaSize[]{
    return [...this._sizes]
  }

  get getOrder(): Order{

    return this._myOrders
  }

  get getCurrentOrder(): Pizza[]{

    return this._myCurrentOrder;
  }

  setOrder(order: Pizza[], quantity:number, total: number) {
    this._myOrders = {
      order,
      quantity,
      purchaseDate: new Date,
      total
    }
  }

  updateOrder(order: Order){
    this._myOrders = order;
    this._myCurrentOrder = this._myOrders.order;
    console.log(this._myOrders);
  }

  clearOrder(){
    this._myOrders = null;
    this._myCurrentOrder = [];
  }

  constructor() { }
}
