import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/orders.interface';
import { HistoryService } from 'src/app/services/history.service';
import { OrderService } from 'src/app/services/order.service';
import { Confirm } from '../../interfaces/modals';

@Component({
  selector: 'app-check-current-orders',
  templateUrl: './check-current-orders.page.html',
  styleUrls: ['./check-current-orders.page.scss'],
})
export class CheckCurrentOrdersPage implements OnInit {

  isOrder: boolean = false;
  myOrder: Order = null;

  constructor(private order: OrderService, private history: HistoryService) { }

  ngOnInit() {
  
    //on init the order from the service will be saved on local variables
    this.myOrder = this.order.getOrder;

    //validation that there is one valid order so place order button can be enabled
    if(this.myOrder !== null ) {
      this.isOrder = true;
    }
  }

//place order function that saves the order to the service
  placeOrder(){

    this.history.addOrder(this.myOrder);
    
    //launch modal when order is placed
    Confirm.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Order was placed successfully'
    })

  }

  //function to remove one of the items in our order
  removeItem(index: number){

    //if our order contains only one kind of pizza then our order is reset
    if(this.myOrder.order.length <= 1) {
      this.isOrder = false;

      return this.order.clearOrder();

    }

    //if only one item is deleted then our order is updated
    this.myOrder.quantity -= this.myOrder.order[index].qty
    this.myOrder.total -= this.myOrder.order[index].price
    this.myOrder.order.splice(index, 1);


    //update the order in our service
    this.order.updateOrder(this.myOrder);

  }


}
