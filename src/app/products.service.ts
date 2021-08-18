import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public produits = [];

  getProduits() {
   return  this.http.get('https://smartphone-store-fake-data.surge.sh/data.json');
  }




 
}
