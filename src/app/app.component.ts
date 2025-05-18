import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { ProductListComponent } from "./product-list/product-list.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soma';
}
