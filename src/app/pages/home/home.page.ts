import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/interfaces/orders.interface';
import { OrderService } from 'src/app/services/order.service';
import { Topping, PizzaSize } from '../../interfaces/orders.interface';

import { Error, Success } from '../../interfaces/modals';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})



export class HomePage implements OnInit {
  

  order: Pizza[] = [];
  toppings: Topping[];
  sizes: PizzaSize[];

  qtyOrdered: string = 'none';

  public currentPizza: Pizza = {qty: 0,  price: 0, topping: '', size: '' };
  public toppingSelected: boolean = false;
  public sizeSelected: boolean = false;
  public currentTopping: Topping = {name: '0', price: 0};
  public currentSize: PizzaSize = {size: '0', price: 0};
  public qty: number = 0;
  public total: number = 0;

  

  numberSelected(num: number){

    if(num === -1 )
      return this.clear();      

    if(num === -2 ){      
        
        return this.add();
    }

    if(this.qtyOrdered === 'none')
        return this.qtyOrdered = num.toString();
    
    if( this.qtyOrdered.length > 1 )
        return this.qtyOrdered = this.qtyOrdered.charAt(1) + num;

    return this.qtyOrdered += num;
    

  }

  constructor(private data: OrderService) { }

  ngOnInit() {
    //get the values of my toppings and sizes from the service
    this.toppings = this.data.getToppings;
    this.sizes = this.data.getSizes;


  }

  ionViewDidEnter(){

    if(this.data.getOrder === null){

      this.order = [];
      this.qty = 0
      this.total = 0;
      
      console.log('did enter and order was null', "current order value", this.order);
      return;
    }

    this.order = this.data.getOrder.order;
    this.qty = this.data.getOrder.quantity;
    this.total = this.data.getOrder.total;
    console.log(this.order, this.qty, this.total);
  }

  selectTopping (event: any, topping: Topping){
    this.currentTopping = topping;
    this.toppingSelected = true;
  }
  
  selectSize(event: any, size: PizzaSize){
    this.currentSize = size;
    this.sizeSelected= true;
  }

  clear(){
    this.qtyOrdered = 'none';
    this.currentTopping = {name: '0', price: 0};;
    this.currentSize = {size: '0', price: 0};;
    this.toppingSelected = false;
    this.sizeSelected = false;

    return;

  }

  add(){

    if(this.currentSize.size === '0' || this.currentTopping.name === '0' || this.qtyOrdered === 'none' || this.qtyOrdered ==='0') {
      Error.fire({
        icon: 'error',
        title: 'Error',
        text: 'Quantity, Topping and Size MUST be selected',
      });

      console.log(this.order);
      return;
    }

    this.qty += parseInt(this.qtyOrdered);
    this.currentPizza = {
      qty: parseInt(this.qtyOrdered), 
      price: (this.currentTopping.price + this.currentSize.price) * parseInt(this.qtyOrdered),
      topping: this.currentTopping.name,
      size: this.currentSize.size,
    }
    this.total += this.currentPizza.price;
    this.order.push( this.currentPizza );
    Success.fire({
      icon: 'success',
      title: 'Success!!',
      text: `Your order has now ${this.qty} pizza${this.qty === 1 ? '' : 's'}, and the total is ${this.total.toFixed(2)} CAD`
    });

    this.data.setOrder(this.order, this.qty, this.total);
    console.log('order was added');
    console.log(this.order);
    console.log(this.qtyOrdered);

    return this.clear();
  }

  clearOrder(){
    this.order = [];
  }

}
