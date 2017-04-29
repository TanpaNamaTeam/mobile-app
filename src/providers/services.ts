import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Services {
  isLogin = 'false';
  foodProducer = 'false';
  foodConsumer = 'false';
  items: any;
  constructor(public http: Http) {
    console.log('Hello Services Provider');
    this.items = [
            {title: 'one'},
            {title: 'two'},
            {title: 'three'},
            {title: 'four'},
            {title: 'five'},
            {title: 'six'}
        ]
  }

  islogin(var_login) {
    if(var_login == 'foodProducer'){
      this.foodProducer = 'true';
      this.isLogin ='true';
    }else{
      this.foodConsumer = 'true';
      this.isLogin = 'true';
    }
    console.log(this.isLogin);
    return var_login;
  }
    
  filterItems(searchTerm) {

    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  onLogout(var_login){
    this.foodConsumer = var_login;
     this.foodProducer = var_login;
      this.isLogin =var_login;
  }

  getFood(){
		return this.http.get("http://foodbuddy.getriuh.com/api/get_food")
		.map(res => res.json())
	}
}
