import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
@Component({
  selector: 'app-card',
  imports: [ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() url: string='';
@Input() title: string='';
@Input() price: string='';


}
