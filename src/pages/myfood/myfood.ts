import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Services } from "../../providers/services";
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'myfood.html',
})
export class myfood implements OnInit {
    searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;
    userFilter: any = { name: '' };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private service:Services
    ) {
    this.searchControl = new FormControl();
  }
  ngOnInit() {
      this.items = this.service.items;
      this.setFilteredItems();
 
      this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
          this.searching = false;
          console.log(search);
          this.setFilteredItems();

      });
      
  }
  setFilteredItems() {
 
        this.items = this.service.filterItems(this.searchTerm);
        console.log(this.searchTerm)
    }
  
  scanQR() {

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
