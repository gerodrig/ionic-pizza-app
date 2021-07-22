import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckCurrentOrdersPageRoutingModule } from './check-current-orders-routing.module';

import { CheckCurrentOrdersPage } from './check-current-orders.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckCurrentOrdersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CheckCurrentOrdersPage]
})
export class CheckCurrentOrdersPageModule {}
