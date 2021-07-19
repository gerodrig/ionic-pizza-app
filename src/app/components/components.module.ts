import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RegisterComponent
  ],
})
export class ComponentsModule { }
