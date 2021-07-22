import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCurrentOrderPageRoutingModule } from './update-current-order-routing.module';

import { UpdateCurrentOrderPage } from './update-current-order.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCurrentOrderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UpdateCurrentOrderPage]
})
export class UpdateCurrentOrderPageModule {}
