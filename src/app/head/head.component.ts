import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-head',
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

	showNavigationArrows = false;
	showNavigationIndicators = false;

  images = [
  "assets/img/bondiola.png", 
  "assets/img/carne desmenuzada sin fondo.png", 
  "assets/img/atun y crema sin fondo.png",
  "assets/img/pollo y verdeo sin fond.png"];
}
