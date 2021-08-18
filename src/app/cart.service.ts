import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[] = []

  getCartCounter() {
    return this.cart.length;
  }

  constructor() { }

  getCart(){
    return this.cart
  }


  addProductToCart(product: any) {
    this.cart.push(product);
  }

  removeProductFromCart(product: any) {
    this.cart.splice(this.cart.indexOf(product), 1);
  }

}
