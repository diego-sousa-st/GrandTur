import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-email',
	templateUrl: './email.component.pug',
	styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

	formulario: FormGroup;
	curso: any;

	constructor(private formBuilder: FormBuilder) {

		this.initForm();
		// TODO receber curso para mandar o email

	}

	ngOnInit() {
	}


	initForm() {

		this.formulario = this.formBuilder.group({
			mensagem: [null, Validators.required]
		});

	}

	enviarEmail() {

		// TODO chamar backend para enviar email

	}

}
