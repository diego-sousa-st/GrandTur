import { Component, OnInit } from '@angular/core';
import { perfis, routePieces } from '../app.constants';
import { UsuarioService } from '../shared/services/usuario.service';
import { NavegacaoService } from '../shared/services/navegacao.service';
import { LoginService } from '../shared/security/services/login.service';
import { AuthService } from '../shared/security/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PontoTuristicoService } from '../shared/services/ponto-turistico.service';

@Component({
	selector: 'app-menu-principal',
	templateUrl: './menu-principal.component.pug',
	styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

	usuario: any;
	formulario: FormGroup;

	constructor(
		private usuarioService: UsuarioService,
		private redirectService: NavegacaoService,
		private loginService: LoginService,
		private authService: AuthService,
		private formBuilder: FormBuilder,
		private pontoTuristicoService: PontoTuristicoService
	) { }

	ngOnInit() {

		this.usuario = this.usuarioService.getUsuario();
		this.loadForm();

	}

	loadForm() {

		this.formulario = this.formBuilder.group({
			termo: [null]
		});

	}

	usuarioIsAdmin(): boolean {

		return this.usuario.perfil === perfis.admin;

	}

	usuarioIsCliente(): boolean  {

		return this.usuario.perfil === perfis.cliente;

	}

	logout() {

		this.loginService.logout().subscribe(
			() => this.authService.deAuth()
		);

	}

	goToCadastroCurso() {

		this.redirectService.goTo(routePieces.cadastroCurso);

	}

	goToHome() {

	// TODO enviar para o home componente

	}

	goToMeusCursos() {

		this.redirectService.goTo(routePieces.listagemPonto.cliente);

	}

	goToPerfil() {

		this.redirectService.goTo(routePieces.perfil);

	}

	pesquisar() {

		this.pontoTuristicoService.pesquisar(this.formulario.get('termo').value).subscribe(
			() => {

				if(this.usuarioIsAdmin()) {

					this.redirectService.goTo(routePieces.listagemPonto.admin);
					return;

				}

				this.redirectService.goTo(routePieces.listagemPonto.cliente);

			}
		);

	}

}
