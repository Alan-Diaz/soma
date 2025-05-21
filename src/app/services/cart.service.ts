import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { Optional } from '../models/optional.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<Cart>(new Cart([]));
  cartSub$ = this.cartSubject.asObservable();


  constructor() {
  }

  addItem(p: Product, o:Optional[]){
    const cart = this.cartSubject.value;
    cart.addItem(p, o);
    const c = new Cart(cart.getCart());
    this.cartSubject.next(c);
  }

  removeItem(id:number){
    const cart = this.cartSubject.value;
    cart.removeItemByItemId(id);
    const c = cart;
    this.cartSubject.next(c);
  }
  
  getTotalValue():number{
    return this.cartSubject.value.getTotalValue();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }
}
