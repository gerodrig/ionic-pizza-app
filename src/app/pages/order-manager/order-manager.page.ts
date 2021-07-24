import { Component, OnInit } from '@angular/core';
import { CancelOrder, Error, Success2 } from 'src/app/interfaces/modals';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-order',
  templateUrl: './order-manager.page.html',
  styleUrls: ['./order-manager.page.scss'],
})
export class MyOrderPage implements OnInit {

  //constructor to initiate the services and the router to navigate back to main page
  constructor(private order: OrderService, private router: Router) { }

  ngOnInit() {
  }

  newOrder(){

    CancelOrder.fire().then((result) => {
      if(result.isConfirmed) {

        //check that the order is not empty and fire error modal
        if(this.order.getOrder === null){
          return Error.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'order is empty',     
                  });
        }

        //if there is an order the cancel order modal is fired.
        Success2.fire(
          'Cancelled!',
          'Your order has been cancelled',
          'success',          
        );
        //service variables are set to default and user is sent to home page.
        this.order.clearOrder();
        this.router.navigate(['/home']);
      }
    })
    
  }
}
