import { NgIf } from '@angular/common';
import { Component,  inject } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule, ValidatorFn, AbstractControl  } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimepickerModule, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pay',
  imports: [NgbDatepickerModule, FormsModule, NgIf, NgbTimepickerModule, ReactiveFormsModule],
  templateUrl: './modal-pay.component.html',
  styleUrl: './modal-pay.component.css'
})
export class ModalPayComponent {
	modalRef: any;
	showInput : boolean=false;
	now : boolean = false;
	later: boolean = false;
	ctrl : FormControl;

	today = inject(NgbCalendar).getToday();
	model: NgbDateStruct = this.today;
	date: { year: number; month: number } = {year:this.today.year, month: this.today.month};


	constructor(
		config: NgbModalConfig, 
		private modalService: NgbModal,
	) {
		config.backdrop = 'static';
		config.keyboard = false;
		config.centered = true;
		config.modalDialogClass
		this.ctrl = new FormControl<NgbTimeStruct | null>(
			{ hour: 9, minute: 0, second: 0 },
			{validators: [this.validateTime()]}
		  );
	}

	ngOnInit(): void {

	}

	validateTime(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } | null => {
			const value = control.value as NgbTimeStruct | null;
			if (!value) return null;
		
			if (value.hour < 8) return { tooEarly: true };
			if (value.hour > 17) return { tooLate: true };
		
			return null;
		};
	}

	open(content: any) {
		this.modalRef = this.modalService.open(content);
	}

	onCheck(opcion: number) {
		if (opcion === 1 && this.now) this.later = false;
		if (opcion === 2 && this.later) this.now = false;
	}

	close(){

	}	
}
