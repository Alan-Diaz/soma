import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { Optional } from '../models/optional.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : Cart;

  constructor() {
    this.cart = new Cart;
  }

  addItem(p: Product, o:Optional[]){
    this.cart.addItem(p,o);
  }

  removeItem(id:number){
    this.cart.removeItemByItemId(id);
  }
  
  getTotalValue():number{
    return this.cart.getTotalValue();
  }
}
