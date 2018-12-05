import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-cadastro-material',
	templateUrl: './cadastro-material.component.pug',
	styleUrls: ['./cadastro-material.component.scss']
})
export class CadastroMaterialComponent implements OnInit {

	formulario: FormGroup;

	constructor(private formBuilder: FormBuilder) {

		this.initForm();
		// TODO receber o curso (via injeção ou outro jeito)

	}

	ngOnInit() {
	}

	initForm() {

		this.formulario = this.formBuilder.group({
			nome: [null, Validators.required],
			texto: [null, Validators.required],
			linkVideoAula: [null, Validators.required],
			imagem: [null],
		});

	}

	cadastrarMaterial() {

		// TODO chamar backend para cadastrar material

	}

}
