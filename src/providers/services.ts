import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Services {
  isLogin = 'false';
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
    
    this.isLogin = var_login;
    console.log(this.isLogin);
    return var_login;
  }
    
  filterItems(searchTerm) {

    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }
}
