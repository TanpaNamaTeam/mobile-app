import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Services } from "../../providers/services";
@IonicPage()
@Component({ 
  selector: 'page-home',
  templateUrl: 'dashboard.html',
})
export class dashboard implements OnInit{
  foods:any;
  public base64Image: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private Camera: Camera,
    private barcodeScanner: BarcodeScanner,
    public service:Services
    ) {
  }

  ngOnInit() {
   this.service.getFood().subscribe((foods)=>{
        this.foods = foods;
        console.log(this.foods);
   });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
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
  registerFood(){
    this.navCtrl.push('RegisterFood');
  }
  takePicture(){
    this.Camera.getPicture({
        destinationType: this.Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  foodSelected(food){
    this.navCtrl.push('fooddetail',{
      food:food
    });
  }
}
