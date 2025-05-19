import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Optional } from '../../models/optional.model';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-modal',
  imports: [NgFor],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
	providers: [NgbModalConfig, NgbModal],
})
export class ModalComponent {

	@Input() product: Product = {
		id:0,
		description:"",
		img:"",
		name:"",
		price:0
	  };
	  @Input() optionals: Optional[]=[];
	  

  constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {
		config.backdrop = 'static';
		config.keyboard = false;
    	config.centered = true;
	}

	open(content: any) {
		this.modalService.open(content);
	}
}
