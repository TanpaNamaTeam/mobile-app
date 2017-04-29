import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { stale } from './stale';

@NgModule({
  declarations: [
    stale,
  ],
  imports: [
    IonicPageModule.forChild(stale),
  ],
  exports: [
    stale
  ]
})
export class AboutModule {}
