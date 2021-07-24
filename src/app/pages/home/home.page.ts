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
  
//declare all the local variables used on this page
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

  
//function to manage the calculator in the app register component
  numberSelected(num: number){

    //logic for reset button
    if(num === -1 )
      return this.clear();      

    //logic to add button
    if(num === -2 ){      
        
        return this.add();
    }

    //logic to update the quantity field restricting the field to a maximum of 99
    if(this.qtyOrdered === 'none')
        return this.qtyOrdered = num.toString();
    
    if( this.qtyOrdered.length > 1 )
        return this.qtyOrdered = this.qtyOrdered.charAt(1) + num;

    return this.qtyOrdered += num;
    

  }

  constructor(private data: OrderService) { }

  ngOnInit() {
    //get the values of my toppings and sizes from the service.
    this.toppings = this.data.getToppings;
    this.sizes = this.data.getSizes;


  }

  ionViewDidEnter(){

    //every time this page is loaded it will check that the date in our order has at least one order.
    if(this.data.getOrder === null){
      //if the order in our service is null then all local variables will be reset.
      this.order = [];
      this.qty = 0
      this.total = 0;

      return; // after null validation did enter function will end.
    }

    //if there is an order active in our service then all local variables will be loaded to keep track of the updates.
    this.order = this.data.getOrder.order;
    this.qty = this.data.getOrder.quantity;
    this.total = this.data.getOrder.total;
  }

  //function to keep track of the topping selected.
  selectTopping (topping: Topping){
    this.currentTopping = topping;
    this.toppingSelected = true;
  }
  
  //function to keep track of the size selected.
  selectSize(size: PizzaSize){
    this.currentSize = size;
    this.sizeSelected= true;
  }

  //function to clear all our local variables to default state.
  clear(){
    this.qtyOrdered = 'none';
    this.currentTopping = {name: '0', price: 0};;
    this.currentSize = {size: '0', price: 0};;
    this.toppingSelected = false;
    this.sizeSelected = false;

  }

  //function to add the pizza that we select to our order.
  add(){
    //data validation to ensure that a valid order is placed.
    if(this.currentSize.size === '0' || this.currentTopping.name === '0' || this.qtyOrdered === 'none' || this.qtyOrdered ==='0') {
      //fire modal in case the data selected is invalid.
      return Error.fire({
        icon: 'error',
        title: 'Error',
        text: 'Quantity, Topping and Size MUST be selected',
      });

    }

    //assign selectedattributes to order.
    this.qty += parseInt(this.qtyOrdered);
    this.currentPizza = {
      qty: parseInt(this.qtyOrdered), 
      price: (this.currentTopping.price + this.currentSize.price) * parseInt(this.qtyOrdered),
      topping: this.currentTopping.name,
      size: this.currentSize.size,
    }
    this.total += this.currentPizza.price;
    this.order.push( this.currentPizza );

    //launch modal indicating that order was added.
    Success.fire({
      icon: 'success',
      title: 'Success!!',
      text: `Your order has now ${this.qty} pizza${this.qty === 1 ? '' : 's'}, and the total is ${this.total.toFixed(2)} CAD`
    });

    //save the order in our service.
    this.data.setOrder(this.order, this.qty, this.total);

    //clear all local variables to default values.
    this.clear();
  }

}
