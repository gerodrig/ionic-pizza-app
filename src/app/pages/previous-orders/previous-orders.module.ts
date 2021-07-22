import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviousOrdersPageRoutingModule } from './previous-orders-routing.module';

import { PreviousOrdersPage } from './previous-orders.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviousOrdersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PreviousOrdersPage]
})
export class PreviousOrdersPageModule {}
