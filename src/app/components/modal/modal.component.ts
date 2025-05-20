import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Optional } from '../../models/optional.model';
import { NgFor, NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { log } from 'console';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
	providers: [NgbModalConfig, NgbModal],
})
export class ModalComponent implements OnInit {

	total : number = 0;
	totalCart:number=0;
	opcionalsCart : Optional[]=[];
	warn: string="";
	modalRef: any;

	@Input() product: Product = {
		id:0,
		description:"",
		img:"",
		name:"",
		price:0
	  };
	  @Input() optionals: Optional[]=[];
	  
	
	constructor(
		private cartService: CartService, 
		config: NgbModalConfig, 
		private modalService: NgbModal,
	) {
		config.backdrop = 'static';
		config.keyboard = false;
		config.centered = true;
		config.modalDialogClass
	}

	ngOnInit(): void {

	}


	open(content: any) {
		this.total=this.product.price;
		this.modalRef = this.modalService.open(content);
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
			if (optional.count <= 1) {
				this.opcionalsCart.splice(index, 1);
			}
			optional.count--;
		}
		this.totalCart = this.opcionalsCart.reduce((total, p) => total + p.price * p.count, 0);
		this.total = this.product.price + this.totalCart;
	}

	close(){
		this.modalRef?.close('');
		this.cartService.addItem(this.product, this.opcionalsCart);
	}
}
