import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavegacaoService } from '../shared/services/navegacao.service';
import { LoginService } from '../shared/security/services/login.service';
import { AlertService } from '../shared/services/alert.service';
import { messages, routePieces, perfis, routeParams, nivelAcesso, headersNames } from '../app.constants';
import { AuthService } from '../shared/security/services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.pug',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	formulario: FormGroup;

	subscriptions: Subscription[] = [];

	isAdmin = false;

	constructor(
		private formBuilder: FormBuilder,
		private redirectService: NavegacaoService,
		private loginService: LoginService,
		private alertService: AlertService,
		private authService: AuthService,
		private activatedRoute: ActivatedRoute
	) {

		this.loadForm();
		this.listenToRoute();

	}

	ngOnInit() {
	}

	listenToRoute() {

		this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {

			if(params.tipo === routeParams.tipo.admin) {

				this.isAdmin = true;


			} else {

				this.isAdmin = false;

			}

		}));

	}

	loadForm() {

		this.formulario = this.formBuilder.group({
			email: [null, Validators.required],
			senha: [null, Validators.required]
		});

	}

	goToCadastro() {

		this.redirectService.goTo(routePieces.cadastro.cliente);

	}

	login() {

		const user = {
			email: this.formulario.get('email').value,
			senha: this.formulario.get('senha').value,
		}

		this.loginService.login(this.isAdmin, user).subscribe(
			(usuario: any) => {

				if(!usuario.cpf) {

					this.alertService.showAlert(messages.loginIncorreto, 'error');
					return;

				}

				let userToBeStored = usuario;

				if(userToBeStored.admin) {

					userToBeStored.roles = [
						{ authority: nivelAcesso[0]}
					]

				} else {

					userToBeStored.roles = [
						{ authority: nivelAcesso[1]}
					]

				}

				this.authService.auth(userToBeStored);
				localStorage.setItem(headersNames.Authorization, 'tokenTeste');
				this.redirectService.goTo(routePieces.home);
			},
			(error) => this.alertService.showAlert('Erro ao realizar login', 'error')
		);

	}

}
