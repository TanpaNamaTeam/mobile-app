import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { myfood } from './myfood';

@NgModule({
  declarations: [
    myfood,
  ],
  imports: [
    IonicPageModule.forChild(myfood),
  ],
  exports: [
    myfood
  ]
})
export class SearchModule {}
