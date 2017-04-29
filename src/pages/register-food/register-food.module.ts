import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterFood } from './register-food';

@NgModule({
  declarations: [
    RegisterFood,
  ],
  imports: [
    IonicPageModule.forChild(RegisterFood),
  ],
  exports: [
    RegisterFood
  ]
})
export class RegisterFoodModule {}
