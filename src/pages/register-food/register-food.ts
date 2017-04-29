import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
import { Geolocation } from '@ionic-native/geolocation';
import { FormGroup, FormControl } from "@angular/forms";
declare var google;
/**
 * Generated class for the RegisterFood page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register-food',
  templateUrl: 'register-food.html',
})
export class RegisterFood {
  myForm : FormGroup;
  latitude: number = 0;
  longtitude: number = 0;
    LatLng:number;
    DestinationType:any;
   public base64Image: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private Camera: Camera,
    public geolocation: Geolocation) {
       this.myForm = new FormGroup({
    firstName: new FormControl('Josh'),
    lastName: new FormControl('Morony')
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterFood');
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

  getLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
      this.longtitude = position.coords.latitude;
      this.latitude = position.coords.longitude;
      console.log(this.longtitude );
    });
    // this.geolocation.getCurrentPosition().then((position) => {
    //   this.LatLng =position.coords.latitude,position.coords.longitude;
    //   // this.longtitude = new google.maps.LatLng( );
    //   console.log(this.LatLng);
    //   // console.log(this.longtitude);
    // }, (err) => {
    //   console.log(err);
    // });
  }
  goBack(){
    this.navCtrl.pop();
  }
}
