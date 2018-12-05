import { Component, OnInit } from '@angular/core';
import { NavegacaoService } from '../shared/services/navegacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.pug',
	styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

	formulario: FormGroup;

	constructor(private redirectService: NavegacaoService, private formBuilder: FormBuilder) { }

	ngOnInit() {

		this.loadForm();

	}

	loadForm() {

		this.formulario = this.formBuilder.group({
			nome: [null, Validators.required],
			cpf: [null, Validators.required],
			sexo: [null, Validators.required],
			email: [null, Validators.required],
			senha: [null, [Validators.required, Validators.minLength(15)]],
			senhaRedigitada: [null, [Validators.required, Validators.minLength(15)]],
		});

	}

	goToLogin() {

		this.redirectService.redirectToLogin();

	}

	goToCadastroProfessor() {

		// TODO redirecionar para o cadastro de professor

	}

	senhasConferem(): boolean {

		return this.formulario.get('senha').value === this.formulario.get('senhaRedigitada').value && this.formulario.get('senhaRedigitada').value &&
			this.formulario.get('senhaRedigitada').valid && this.formulario.get('senha').valid;


	}

	cadastrarUsuario() {

		// TODO cadastrar usuario no back

	}

}
