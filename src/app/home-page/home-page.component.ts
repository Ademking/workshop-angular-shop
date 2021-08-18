import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  produits: any;

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProduits().subscribe(produits => {
      this.produits = produits;
    });
    
  }

}
