import { Component, OnInit } from '@angular/core';
import { NavegacaoService } from '../shared/services/navegacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { sexo, routeParams, routePieces } from '../app.constants';
import { AlertService } from '../shared/services/alert.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.pug',
	styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

	formulario: FormGroup;
	sexo: any = sexo;
	subscriptions: Subscription[] = [];

	isAdmin = false;
	isCliente = false;
	isAluno = false;

	constructor(
		private redirectService: NavegacaoService,
		private formBuilder: FormBuilder,
		private usuarioService: UsuarioService,
		private alertService: AlertService,
		private activatedRoute: ActivatedRoute
	) {

		this.listenToRoute();

	}

	ngOnInit() {

		this.loadForm();

	}

	loadForm() {

		this.formulario = this.formBuilder.group({
			nome: [null, [Validators.required, Validators.maxLength(45)]],
			cpf: [null, Validators.required],
			// sexo: [null, Validators.required],
			email: [null, Validators.required],
			senha: [null, [Validators.required, Validators.minLength(10)]],
			senhaRedigitada: [null, [Validators.required, Validators.minLength(10)]],
		});

	}

	listenToRoute() {

		this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {

			if(params.tipo === routeParams.tipo.admin) {

				this.isAdmin = true;
				this.isCliente = false;

			} else {

				this.isAdmin = true;
				this.isCliente = false;

			}

		}));
	}

	goToLogin() {

		this.redirectService.redirectToLogin();

	}

	goToCadastroProfessor() {

		this.redirectService.goTo(routePieces.cadastro.admin);

	}

	senhasConferem(): boolean {

		return this.formulario.get('senha').value === this.formulario.get('senhaRedigitada').value && this.formulario.get('senhaRedigitada').value &&
			this.formulario.get('senhaRedigitada').valid && this.formulario.get('senha').valid;


	}

	cadastrarUsuario() {

		this.usuarioService.cadastrarUsuario(this.formulario.value).subscribe(
			(response) => {


					this.alertService.showAlert('Usuário cadastrado com sucesso!','success');
					this.redirectService.redirectToLogin();


				},
			(error)	=> this.alertService.showAlert('Erro ao cadastrar usuário!','error')
		);

	}

}
