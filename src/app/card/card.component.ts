import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card, [app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
 
})
export class CardComponent implements OnInit {

  @Input() produit: any;  

  constructor(private cartService: CartService , private toastService: HotToastService) { }

  ngOnInit(): void {
  }


  addToCart(produit: any){
    this.toastService.success("Produit ajouté au panier");
    this.cartService.addProductToCart(produit);
  }

}
