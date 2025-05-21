import { NgIf } from '@angular/common';
import { Component,  inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { 
	NgbCalendar,
	NgbDatepickerModule,
	NgbDateStruct,
	NgbInputDatepickerConfig,
	NgbDropdownModule
} 
	
from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pay',
  imports: [NgbDatepickerModule, FormsModule, NgIf, NgbTimepickerModule, ReactiveFormsModule, NgbDropdownModule],
  templateUrl: './modal-pay.component.html',
  styleUrl: './modal-pay.component.css',
  providers : [NgbInputDatepickerConfig]
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
	date: { year: number; month: number } = {year:this.today.year, month: this.today.month};


	constructor(
		config: NgbModalConfig, 
		private modalService: NgbModal,
		dateConfig: NgbInputDatepickerConfig,
	) {
		config.backdrop = 'static';
		config.keyboard = false;
		config.centered = true;
		config.modalDialogClass
		//this.ctrl = new FormControl<NgbTimeStruct | null>(
		//	{ hour: 9, minute: 0, second: 0 }
		//);

		dateConfig.minDate = { year: this.today.year, month: this.today.month, day: this.today.day-1 };
		dateConfig.maxDate = { year: this.today.year, month: this.today.month + 1, day: 31 };

		// days that don't belong to current month are not visible
		dateConfig.outsideDays = 'hidden';

		// setting datepicker popup to close only on click outside
		dateConfig.autoClose = 'outside';

		// setting datepicker popup to open above the input
		dateConfig.placement = ['top-start', 'top-end'];
	}

	ngOnInit(): void {

	}



	open(content: any) {
		this.modalRef = this.modalService.open(content);
	}

	whenOnCheck(opcion: number) {
		if (opcion === 1 && this.now) this.later = false;
		if (opcion === 2 && this.later) this.now = false;
	}

	pickUpOnCheck(opcion: number) {
		if (opcion === 1 && this.delivery) this.pickUp = false;
		if (opcion === 2 && this.pickUp) this.delivery = false;
	}

	payMethod(op: string) : void {
		this.payMethodSelected = op;
		
	}

	close(){

	}	
}
