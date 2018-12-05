import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-cadastro-curso',
	templateUrl: './cadastro-curso.component.pug',
	styleUrls: ['./cadastro-curso.component.scss']
})
export class CadastroCursoComponent implements OnInit {

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
			valor: [null, Validators.required],
			descricao: [null, Validators.required]
		});

	}

	cadastrarCurso() {

		// TODO chamar backend para cadastrar material

	}

}
