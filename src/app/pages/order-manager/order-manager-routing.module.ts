import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyOrderPage } from './order-manager.page';

const routes: Routes = [
  {
    path: '',
    component: MyOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOrderPageRoutingModule {}
