import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavegacaoService } from '../shared/services/navegacao.service';
import { LoginService } from '../shared/security/services/login.service';
import { AlertService } from '../shared/services/alert.service';
import { messages, routePieces, perfis } from '../app.constants';
import { AuthService } from '../shared/security/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.pug',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	formulario: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private redirectService: NavegacaoService,
		private loginService: LoginService,
		private alertService: AlertService,
		private authService: AuthService
	) {

		this.loadForm();

	}

	ngOnInit() {
	}

	loadForm() {

		this.formulario = this.formBuilder.group({
			email: [null, Validators.required],
			senha: [null, Validators.required]
		});

	}

	goToCadastro() {

		this.redirectService.goTo(routePieces.cadastro.aluno);

	}

	login() {

		const user = {
			email: this.formulario.get('email').value,
			senha: this.formulario.get('senha').value,
			roles: [
				{ authority: perfis.professor}
			]
		}

		this.loginService.login(user).subscribe(
			(response) => {
				alert(JSON.stringify(response));

				console.log(response);

				this.authService.auth(user);
				this.redirectService.goTo(routePieces.home);
				this.alertService.showAlert(messages.loginSucesso, 'success');

			},
			(error: any) => {

				debugger;

			}
		);

	}

}
