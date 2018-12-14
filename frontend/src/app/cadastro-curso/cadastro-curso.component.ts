import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from '../shared/services/cadastro.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
	selector: 'app-cadastro-curso',
	templateUrl: './cadastro-curso.component.pug',
	styleUrls: ['./cadastro-curso.component.scss']
})
export class CadastroCursoComponent implements OnInit {

	formulario: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private cadastroService: CadastroService,
		private alertService: AlertService
	) {

		this.initForm();

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

		this.cadastroService.cadastrarCurso(this.formulario.value).subscribe(
			(response) => {

				if(response.status) {

					this.alertService.showAlert('Curso cadastrado com sucesso', 'success');
					this.formulario.reset();

				} else {

					this.alertService.showAlert('Erro ao cadastrar curso', 'error');

				}

			}
		);

	}

}
