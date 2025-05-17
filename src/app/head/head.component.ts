import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-head',
  imports: [NgbCarouselModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  images = [
  "src/assets/img1.png", 
  "./../assets/img2.png", 
  "./../../../assets/img3.jpg"];
}
