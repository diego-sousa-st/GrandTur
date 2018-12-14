import { Injectable } from '@angular/core';
import { HttpCustomizedService } from './http-customized.service';
import { api, ACAO } from '../../app.constants';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
	providedIn: 'root'
})
export class CadastroService {

	constructor(private http: HttpCustomizedService, private usuarioService: UsuarioService) { }

	cadastrarAdministrador(admin: any): Observable<any> {

		admin.acao = ACAO.INSERT_UPDATE;

		return this.http.postWithTextResponse(api.ADMINISTRADOR, admin);

	}

	cadastrarProfessor(professor: any): Observable<any> {

		professor.acao = ACAO.INSERT_UPDATE;

		return this.http.postWithTextResponse(api.PROFESSOR, professor);

	}

	cadastrarAluno(aluno: any): Observable<any> {

		aluno.acao = ACAO.INSERT_UPDATE;

		return this.http.postWithTextResponse(api.ALUNO, aluno);

	}

	findAdministrador(): Observable<any> {

		const user = this.usuarioService.getUsuario();
		user.acao = ACAO.GET;

		return this.http.postWithTextResponse(api.ADMINISTRADOR, user);

	}

	findAluno(): Observable<any> {

		const user = this.usuarioService.getUsuario();
		user.acao = ACAO.GET;

		return this.http.postWithTextResponse(api.ALUNO, user);

	}

	findProfessor(): Observable<any> {

		const user = this.usuarioService.getUsuario();
		user.acao = ACAO.GET;

		return this.http.postWithTextResponse(api.PROFESSOR, user);

	}

	updateAdministrador(admin: any): Observable<any> {

		admin.acao = ACAO.INSERT_UPDATE;
		return this.http.postWithTextResponse(api.ADMINISTRADOR, admin);

	}

	updateAluno(admin: any): Observable<any> {

		admin.acao = ACAO.INSERT_UPDATE;
		return this.http.postWithTextResponse(api.ALUNO, admin);

	}

	updateProfessor(admin: any): Observable<any> {

		admin.acao = ACAO.INSERT_UPDATE;
		return this.http.postWithTextResponse(api.PROFESSOR, admin);

	}

	cadastrarCurso(curso): Observable<any> {

		curso.acao = ACAO.INSERT_UPDATE;
		curso.professorId = this.usuarioService.getUsuario().id;

		return this.http.postWithTextResponse(api.CURSO, curso);

	}

	findUsuario(): Observable<any> {

		const user = this.usuarioService.getUsuario();

		if(user.nivel_acesso == 0) {

			return this.findAdministrador();

		} else if(user.nivel_acesso == 1) {

			return this.findProfessor();

		} else if(user.nivel_acesso == 2) {

			return this.findAluno();

		}

	}

	updateUsuario(usuario: any):Observable<any> {

		const user = this.usuarioService.getUsuario();

		if(user.nivel_acesso == 0) {

			return this.updateAdministrador(usuario);

		} else if(user.nivel_acesso == 1) {

			return this.updateProfessor(usuario);

		} else if(user.nivel_acesso == 2) {

			return this.updateAluno(usuario);

		}

	}
}
