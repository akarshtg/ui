import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Mobile",
    "profilePic": "assets/img/speakers/bear.jpg"
  };


  constructor() {
    let items = [
      {
        "name": "Mobile",
        "profilePic": "assets/img/speakers/mobile.png"
      },
      {
        "name": "Dress",
        "profilePic": "assets/img/speakers/dress.png"
      },
      {
        "name": "Laptop",
        "profilePic": "assets/img/speakers/laptop.png"
      },
      {
        "name": "Pantry",
        "profilePic": "assets/img/speakers/pantry.png"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
