import { Component, OnInit } from '@angular/core';
import { NavegacaoService } from '../shared/services/navegacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { CadastroService } from '../shared/services/cadastro.service';
import { sexo, routeParams, routePieces } from '../app.constants';
import { AlertService } from '../shared/services/alert.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

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
	isProfessor = false;
	isAluno = false;

	constructor(
		private redirectService: NavegacaoService,
		private formBuilder: FormBuilder,
		private cadastroService: CadastroService,
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
			sexo: [null, Validators.required],
			email: [null, Validators.required],
			senha: [null, [Validators.required, Validators.minLength(10)]],
			senhaRedigitada: [null, [Validators.required, Validators.minLength(10)]],
		});

	}

	listenToRoute() {

		this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {

			if(params.tipo === routeParams.tipo.admin) {

				this.isAdmin = true;
				this.isProfessor = false;
				this.isAluno = false;

			}

			if(params.tipo === routeParams.tipo.professor) {

				this.isProfessor = true;
				this.isAdmin = false;
				this.isAluno = false;

			}

			if(params.tipo === routeParams.tipo.aluno) {

				this.isAluno = true;
				this.isAdmin = false;
				this.isProfessor = false;

			}

		}));
	}

	goToLogin() {

		this.redirectService.redirectToLogin();

	}

	goToCadastroProfessor() {

		this.redirectService.goTo(routePieces.cadastro.professor);

	}

	senhasConferem(): boolean {

		return this.formulario.get('senha').value === this.formulario.get('senhaRedigitada').value && this.formulario.get('senhaRedigitada').value &&
			this.formulario.get('senhaRedigitada').valid && this.formulario.get('senha').valid;


	}

	cadastrarAdministrador() {

		this.cadastroService.cadastrarAdministrador(this.formulario.value).subscribe(
			(response) => {

				if(response.status) {

					this.alertService.showAlert('Administrador cadastrado com sucesso!','success');
					this.redirectService.redirectToLogin();

				} else {

					this.alertService.showAlert('Erro ao cadastrar administrador!','error');

				}

			}
		);

	}

	cadastrarProfessor() {

		this.cadastroService.cadastrarProfessor(this.formulario.value).subscribe(
			(response) => {

				if(response.status) {

					this.alertService.showAlert('Professor cadastrado com sucesso!','success');
					this.redirectService.redirectToLogin();

				} else {

					this.alertService.showAlert('Erro ao cadastrar Professor!','error');

				}

			}
		);

	}

	cadastrarAluno() {

		this.cadastroService.cadastrarAluno(this.formulario.value).subscribe(
			(response) => {

				if(response.status) {

					this.alertService.showAlert('Aluno cadastrado com sucesso!','success');
					this.redirectService.redirectToLogin();

				} else {

					this.alertService.showAlert('Erro ao cadastrar aluno!','error');

				}

			}
		);

	}

	cadastrarUsuario() {

		if(this.isAdmin) {

			this.cadastrarAdministrador();

		} else if(this.isAluno) {

			this.cadastrarAluno();

		} else if(this.isProfessor) {

			this.cadastrarProfessor();

		}

	}

}
