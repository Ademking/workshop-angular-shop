import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cart : any;

  shipping = 7.00; 

  subTotal() {
   let total = 0;
   this.cart.forEach((item:any) => {
    total += parseInt(item.prices.rawPrice);
   })
   return total;
  }


  total(){
    let total = 0;
   this.cart.forEach((item:any) => {
    total += parseInt(item.prices.rawPrice);
   })
   return total - this.shipping ;
  }

  ngOnInit(): void {
   this.cart = this.cartService.getCart();
   console.log(this.cart);
  }


  removeItem(item: any) {
    this.cartService.removeProductFromCart(item);
  }

}
