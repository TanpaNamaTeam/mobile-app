import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

/**
 * Generated class for the Favourite page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'fooddetail.html',
})
export class fooddetail implements OnInit {
  food:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.food = this.navParams.get('food');
    console.log(this.food);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Favourite');
  }
  goBack(){
    this.navCtrl.pop();
  }
}
