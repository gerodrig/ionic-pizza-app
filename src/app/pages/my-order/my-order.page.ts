import { Component, OnInit } from '@angular/core';
import { CancelOrder, Success2 } from 'src/app/interfaces/modals';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage implements OnInit {

  constructor(private order: OrderService, private router: Router) { }

  ngOnInit() {
  }

  newOrder(){
//TODO: implement if there are no orders placed
    CancelOrder.fire({}).then((result) => {
      if(result.isConfirmed) {
        Success2.fire(
          'Cancelled!',
          'Your order has been cancelled',
          'success',          
        );
        this.order.clearOrder();
        console.log('order cleared');
        this.router.navigate(['/home']);
      }
    })

    console.log('order cancelled')
    
  }
}
