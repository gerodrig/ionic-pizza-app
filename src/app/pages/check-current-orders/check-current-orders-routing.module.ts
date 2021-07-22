import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckCurrentOrdersPage } from './check-current-orders.page';

const routes: Routes = [
  {
    path: '',
    component: CheckCurrentOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckCurrentOrdersPageRoutingModule {}
