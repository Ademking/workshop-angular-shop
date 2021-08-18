import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  produits = [];

  constructor(public cartService: CartService, public produitsService: ProductsService) {
  }



}
