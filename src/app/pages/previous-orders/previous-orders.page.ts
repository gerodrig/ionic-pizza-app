import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/orders.interface';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.page.html',
  styleUrls: ['./previous-orders.page.scss'],
})
export class PreviousOrdersPage implements OnInit {

  ordersHistory: Order[] = []
  constructor(private history: HistoryService) { }

  //bring all the orders history from the service so it can be loaded in the list.
  ngOnInit() {
    this.ordersHistory = this.history.getOrdersHistory;
  }

}
