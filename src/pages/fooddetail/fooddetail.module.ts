import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { fooddetail } from './fooddetail';

@NgModule({
  declarations: [
    fooddetail,
  ],
  imports: [
    IonicPageModule.forChild(fooddetail),
  ],
  exports: [
    fooddetail
  ]
})
export class FavouriteModule {}
