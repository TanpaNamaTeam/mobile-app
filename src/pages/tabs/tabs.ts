import { Component,OnInit } from '@angular/core';
import { Services } from "../../providers/services";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {
  dashboard = 'dashboard';
  fooddetail = 'fooddetail';
  stale = 'stale';
  myfood = 'myfood';
  logins = 'Login';
  register ='Register';
  constructor(public service:Services,private barcodeScanner: BarcodeScanner) {

  }
  
  ngOnInit() {
    this.service.isLogin;
  }

  public scanQR() {

    this.barcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        return false;
      }
      console.log("Scanned successfully!");
      console.log(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }
}
