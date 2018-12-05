import { Component, OnInit } from '@angular/core';
import { perfis, routePieces } from '../app.constants';
import { UsuarioService } from '../shared/services/usuario.service';
import { NavegacaoService } from '../shared/services/navegacao.service';
import { LoginService } from '../shared/security/services/login.service';
import { AuthService } from '../shared/security/services/auth.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
	selector: 'app-menu-principal',
	templateUrl: './menu-principal.component.pug',
	styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

	usuario: any;

	constructor(
		private usuarioService: UsuarioService,
		private redirectService: NavegacaoService,
		private loginService: LoginService,
		private authService: AuthService,
		private alertService: AlertService
	) { }

	ngOnInit() {

		this.usuario = this.usuarioService.getUsuario();

	}

	usuarioIsAdmin(): boolean {

		return this.usuario.perfil === perfis.admin;

	}

	usuarioIsProfessor(): boolean {

		return this.usuario.perfil === perfis.professor;

	}

	usuarioIsCliente(): boolean  {

		return this.usuario.perfil === perfis.aluno;

	}

	logout() {

		this.loginService.logout().subscribe(
			() => this.authService.deAuth()
		);

	}

	goToCadastroCurso() {

		this.redirectService.goTo(routePieces.cadastroCurso);

	}

	goToCursosCadastrados() {

		this.redirectService.goTo(routePieces.listagemCurso.professor);

	}

	goToAprovacaoProfessor() {

		this.redirectService.goTo(routePieces.aprovacao.professor);

	}

	goToAprovacaoCurso() {

		this.redirectService.goTo(routePieces.aprovacao.curso);

	}

	goToHome() {

	}

	goToMeusCursos() {

		this.redirectService.goTo(routePieces.listagemCurso.aluno);

	}

	goToPerfil() {

		this.redirectService.goTo(routePieces.perfil);

	}

}
