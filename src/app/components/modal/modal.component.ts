import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Optional } from '../../models/optional.model';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-modal',
  imports: [NgFor, NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
	providers: [NgbModalConfig, NgbModal],
})
export class ModalComponent {

	total : number = 0;
	totalCart:number=0;
	opcionalsCart : Optional[]=[];
	warn: string="";

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
		this.total=this.product.price;
		this.modalService.open(content);
	}

	plus(op :Optional){
		const index = this.opcionalsCart.findIndex(p => p.id === op.id);
		if (index === -1) {
			op.count = 1;
			this.opcionalsCart.push(op);
		} else {
			const actual = this.opcionalsCart[index];
			if (actual.count < actual.max) {
				actual.count++;
			} else {
				this.warn = "Se alcanzó la cantidad máxima para " + op.name;
				setTimeout(() => {
				this.warn = '';
				}, 5000);
			}
		}
		this.totalCart = this.opcionalsCart.reduce((total, p) => total + p.price * p.count, 0);
		this.total = this.product.price + this.totalCart;
	}

	minus(op:Optional){
		const index = this.opcionalsCart.findIndex(p => p.id === op.id);
		if (index !== -1) {
			const optional = this.opcionalsCart[index];
			if (optional.count > 1) {
				optional.count--;
			} else {
				this.opcionalsCart.splice(index, 1);
			}
		}
		this.totalCart = this.opcionalsCart.reduce((total, p) => total + p.price * p.count, 0);
		this.total = this.product.price + this.totalCart;
	}
}
