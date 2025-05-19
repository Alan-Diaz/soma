import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { OnInit } from '@angular/core';
import { Product } from '../models/product.model';

import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-head',
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
      
    });
  }

	showNavigationArrows = false;
	showNavigationIndicators = false;

  images = [
  "assets/img/bondiola.png", 
  "assets/img/carne desmenuzada sin fondo.png", 
  "assets/img/atun y crema sin fondo.png",
  "assets/img/pollo y verdeo sin fond.png"];
}
