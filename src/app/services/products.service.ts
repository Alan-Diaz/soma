import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model'; 
import { Optional } from '../models/optional.model'; 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products/products.json');
  }

  getProductById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products/products.json');
  }

  getOptionals(): Observable<Optional[]>{
    return this.http.get<Optional[]>('assets/products/optionals.json');
  }

  getProductsPerOrder(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products/perOrder.json');
  }



}
