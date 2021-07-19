import { Injectable } from '@angular/core';
import { Topping, PizzaSize } from '../interfaces/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

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

  constructor() { }
}
