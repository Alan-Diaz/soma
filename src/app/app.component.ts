import { Component } from '@angular/core';
import { HeadComponent } from './head/head.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { NutritionalFactComponent } from './nutritional-fact/nutritional-fact.component';

@Component({
  selector: 'app-root',
  imports: [
    HeadComponent,
    ProductListComponent,
    NutritionalFactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soma';
}
