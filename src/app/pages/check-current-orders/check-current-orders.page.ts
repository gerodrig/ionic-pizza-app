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
  
    console.log(this.order.getOrder);
    this.myOrder = this.order.getOrder;

    //console.log(this.myOrder);

    if(this.myOrder !== null ) {
      this.isOrder = true;
      //console.log(this.isOrder);
    }
  }

  ionViewDidLeave(){

    if(!this.isOrder){
      this.myOrder = null;
    }
    console.log('did Leave', this.isOrder, this.myOrder)
  }

  placeOrder(){

    this.history.addOrder(this.myOrder);
    
    Confirm.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Order was placed successfully'
    })

  }

  removeItem(index: number){

    if(this.myOrder.order.length <= 1) {
      this.isOrder = false;
      //this.myOrder = null;

      return this.order.clearOrder();

    }

    this.myOrder.quantity -= this.myOrder.order[index].qty
    this.myOrder.total -= this.myOrder.order[index].price
    this.myOrder.order.splice(index, 1);

    console.log(this.myOrder)

    this.order.updateOrder(this.myOrder);

  }


}
