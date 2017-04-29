import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Services } from "../../providers/services";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  password:any;
  test:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service:Services) {
  }

  onLogin(var_login){
    this.service.islogin(var_login);
  }

}
