import { NgIf, NgClass, NgFor } from '@angular/common';
import { Component,  inject, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { 
	NgbModal,
	NgbModalConfig,
	NgbCalendar,
	NgbDatepickerModule,
	NgbDateStruct,
	NgbInputDatepickerConfig,
	NgbDropdownModule,
	NgbTimepickerModule
} 
	
from '@ng-bootstrap/ng-bootstrap';
import { log } from 'console';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-modal-pay',
  imports: [
	NgbDatepickerModule, 
	FormsModule, 
	NgIf, NgClass, NgFor, NgbTimepickerModule, ReactiveFormsModule, NgbDropdownModule],
  templateUrl: './modal-pay.component.html',
  styleUrl: './modal-pay.component.css',
  providers : [NgbInputDatepickerConfig],
  encapsulation: ViewEncapsulation.None
})
export class ModalPayComponent {
	modalRef: any;
	now : boolean = false;
	later: boolean = false;
	pickUp : boolean = false;
	delivery: boolean = false;
	payMethodSelected: string = "";
	today = inject(NgbCalendar).getToday();
	model: NgbDateStruct = this.today;
	date: { day: number; month: number } = {day:this.today.day, month: this.today.month};
	time = { hour: 12, minute: 30 };
	outOfRange: {can:boolean, msj:string}={can:true, msj:"Dentro del horario de atencion/despacho"};

	arrWarns : {warn: string, active: boolean}[] = [
		{warn: "Debe elegir delivery", active: false},
		{warn: "Debe que elgir momento de entrega", active: false},
		{warn: "Debe que elgir el metodo de pago", active: false},
		{warn: "El carrito esta vacio", active: false},
	];

	constructor(
		config: NgbModalConfig, 
		private modalService: NgbModal,
		dateConfig: NgbInputDatepickerConfig,
		private cartService: CartService
	) {
		config.backdrop = 'static';
		config.keyboard = false;
		config.centered = true;
		config.modalDialogClass;

		dateConfig.outsideDays = 'hidden';
		dateConfig.autoClose = 'outside';
		dateConfig.placement = ['top-start', 'top-end'];
	}

	ngOnInit(): void {

	}



	open(content: any) {
		this.modalRef = this.modalService.open(content);
	}

	whenOnCheck(opcion: number) {
		if (opcion === 2){ 
			this.now = true;
			this.later=false;
		}
		if (opcion === 1) {
			this.later = true;
			this.now = false;
		}
		this.arrWarns[1].active=false;
	}

	pickUpOnCheck(opcion: number) {
		if (opcion === 1){ 
			this.pickUp = true;
			this.delivery=false;
		}
		if (opcion === 2) {
			this.delivery = true;
			this.pickUp = false;
		}
		this.arrWarns[0].active=false;
	}

	payMethod(op: string) : void {
		this.payMethodSelected = op;
		this.arrWarns[2].active=false;
	}

	send(){
		let ready = true;
		!this.pickUp && !this.delivery ? this.arrWarns[0].active = true: this.arrWarns[0].active = false;
		!this.now && !this.later ? this.arrWarns[1].active = true : this.arrWarns[1].active = false;;
		this.payMethodSelected == "" ? this.arrWarns[2].active = true : this.arrWarns[2].active = false;
		this.arrWarns.map(w => {
			if (w.active){
				ready = false;
			}
		});
		if (ready){
			let deliveryIfo = this.cartService.getDeliveryInfo();
			this.pickUp? deliveryIfo.deliveryType = 'PickUp' : deliveryIfo.deliveryType = 'Delivery';
			if (deliveryIfo.deliveryType === 'Delivery'){
				//completar
				deliveryIfo.setDeliveryDetails("", "");
			}
			this.now? deliveryIfo.timeType = 'now':deliveryIfo.timeType = 'scheduled';
			if (deliveryIfo.timeType === 'scheduled'){
				deliveryIfo.setScheduledTime(this.date, this.time)
			}
			deliveryIfo.payMethod = this.payMethodSelected=== "Efectivo"?  'cash' : 'transfer'; 
			let b = this.cartService.sendMsg();
			//quiere decir que el carrito esta vacio 
			if (!b){
				this.arrWarns[3].active=true;
			}
		}
	}

	hourOnChange(t:{hour: number, minute:number}){
		//el horario de atencion arranca 12:30 y termina a las 16
		// a la noche arranca a las 20hs y termina a las 23
		if ( (t.hour>=12 && t.minute>=30) && t.hour<=16 || t.hour>=20 && t.hour<=23 ){
			this.outOfRange.msj = "Dentro del horario de atencion/despacho";
			this.outOfRange.can = true;
			this.time = t;

		}else{
			this.outOfRange.msj = "Fuera del horario de atencion/despacho";
			this.outOfRange.can = false;
		}
	}

	dateChange(d: number, m:number){
		this.date.day = d;
		this.date.month = m;
	}
}
